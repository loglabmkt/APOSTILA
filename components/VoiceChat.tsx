
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality, Blob } from '@google/genai';
import { decode, encode, decodeAudioData, createBlob } from '../utils/audio';
import { CloseIcon } from '../constants/icons';

interface VoiceChatProps {
  context: {
    question: string;
    answer: string;
    feedback: string;
  };
  onClose: () => void;
}

const VoiceChat: React.FC<VoiceChatProps> = ({ context, onClose }) => {
  const [status, setStatus] = useState('Conectando...');
  const [transcripts, setTranscripts] = useState<{ user: string; model: string }[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentOutput, setCurrentOutput] = useState('');
  
  const sessionRef = useRef<any | null>(null);
  const nextStartTimeRef = useRef(0);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  useEffect(() => {
    let mediaStream: MediaStream | null = null;
    let audioContext: AudioContext | null = null;
    let scriptProcessor: ScriptProcessorNode | null = null;
    let sourceNode: MediaStreamAudioSourceNode | null = null;
    let isClosing = false;

    const setupAudio = async () => {
      try {
        if (!process.env.API_KEY) {
          setStatus("Erro: API_KEY não configurada.");
          return;
        }

        setStatus('Solicitando permissão do microfone...');
        mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        if (isClosing) {
            mediaStream.getTracks().forEach(track => track.stop());
            return;
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const systemInstruction = `
          Você é um tutor de Análise de Requisitos conversando com um aluno por áudio. 
          O aluno acabou de receber o seguinte feedback sobre uma atividade:

          ---
          Pergunta da Atividade: "${context.question}"
          Resposta do Aluno: "${context.answer}"
          Seu Feedback (texto): "${context.feedback}"
          ---
          
          Sua primeira tarefa é ler o feedback em voz alta para o aluno. 
          Depois de ler o feedback, pergunte de forma clara e amigável: "Você tem alguma dúvida sobre este feedback ou quer explorar algum ponto em mais detalhes?".
          A partir daí, responda às perguntas do aluno sobre o feedback ou o tópico da atividade.
          Mantenha a conversa focada, educacional e encorajadora.
        `;

        outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        
        // Resume context if it's suspended (browser autoplay policy)
        if (outputAudioContextRef.current.state === 'suspended') {
            await outputAudioContextRef.current.resume();
        }

        const outputNode = outputAudioContextRef.current.createGain();
        outputNode.connect(outputAudioContextRef.current.destination);

        const sessionPromise = ai.live.connect({
          model: 'gemini-2.5-flash-native-audio-preview-09-2025',
          config: {
            systemInstruction,
            responseModalities: [Modality.AUDIO],
            inputAudioTranscription: {},
            outputAudioTranscription: {},
            speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
            },
          },
          callbacks: {
            onopen: () => {
              if (isClosing) return;
              setStatus('Conectado. Pode falar.');
              // Start streaming audio from the microphone
              try {
                // Ensure sample rate is supported, otherwise browser will resample or throw
                audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
                
                sourceNode = audioContext.createMediaStreamSource(mediaStream!);
                scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
                
                scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
                    if (isClosing) return;
                    const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
                    const pcmBlob = createBlob(inputData);
                    sessionPromise.then((session) => {
                    if (!isClosing) {
                        session.sendRealtimeInput({ media: pcmBlob });
                    }
                    }).catch(() => {
                        // Ignore errors here, handled by onerror/main catch
                    });
                };
                
                sourceNode.connect(scriptProcessor);
                scriptProcessor.connect(audioContext.destination);
              } catch (err) {
                console.error("Audio context setup failed", err);
                setStatus("Erro ao iniciar áudio do microfone.");
              }
            },
            onmessage: async (message: LiveServerMessage) => {
              if (isClosing) return;

              // Handle audio output
              const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
              if (base64Audio && outputAudioContextRef.current) {
                try {
                    const ctx = outputAudioContextRef.current;
                    nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                    const audioBuffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
                    
                    const source = ctx.createBufferSource();
                    source.buffer = audioBuffer;
                    source.connect(outputNode);
                    source.addEventListener('ended', () => {
                      sourcesRef.current.delete(source);
                    });
                    
                    source.start(nextStartTimeRef.current);
                    nextStartTimeRef.current += audioBuffer.duration;
                    sourcesRef.current.add(source);
                } catch (e) {
                    console.error("Audio decode error", e);
                }
              }

              // Handle transcriptions
              if (message.serverContent?.inputTranscription) {
                setCurrentInput(prev => prev + message.serverContent.inputTranscription.text);
              }
              if (message.serverContent?.outputTranscription) {
                setCurrentOutput(prev => prev + message.serverContent.outputTranscription.text);
              }
              if (message.serverContent?.turnComplete) {
                const finalInput = currentInput + (message.serverContent.inputTranscription?.text || '');
                const finalOutput = currentOutput + (message.serverContent.outputTranscription?.text || '');
                
                if (finalInput.trim() || finalOutput.trim()) {
                    setTranscripts(prev => [...prev, { user: finalInput.trim(), model: finalOutput.trim() }]);
                }
                setCurrentInput('');
                setCurrentOutput('');
              }

              // Handle interruption
              if (message.serverContent?.interrupted) {
                for (const source of sourcesRef.current.values()) {
                  try { source.stop(); } catch (e) {} // Ignore stop errors
                  sourcesRef.current.delete(source);
                }
                nextStartTimeRef.current = 0;
              }
            },
            onerror: (e: ErrorEvent) => {
              console.error('Session error:', e);
              if (!isClosing) {
                  setStatus('Erro de conexão. Tentando recuperar...');
                  // Don't set isClosing=true immediately for transient errors, 
                  // but usually 'Internal error' is fatal for the session.
                  // Let's stop streaming input to prevent spamming errors.
                  if (scriptProcessor) {
                      scriptProcessor.disconnect();
                      scriptProcessor = null;
                  }
                  setStatus('Sessão desconectada por erro. Feche e reabra para tentar novamente.');
              }
            },
            onclose: () => {
              if (!isClosing) {
                  setStatus('Sessão encerrada pelo servidor.');
              }
            },
          },
        });
        
        const session = await sessionPromise;
        if (isClosing) {
            session.close();
            return;
        }
        sessionRef.current = session;

      } catch (error) {
        console.error('Error setting up voice chat:', error);
        setStatus(`Falha ao iniciar sessão. Verifique a chave de API.`);
      }
    };
    
    setupAudio();

    return () => {
      isClosing = true;
      if (sessionRef.current) {
        try { sessionRef.current.close(); } catch(e) { console.error("Error closing session", e); }
        sessionRef.current = null;
      }
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
      if (scriptProcessor) {
        try { scriptProcessor.disconnect(); } catch(e) {}
      }
       if (sourceNode) {
        try { sourceNode.disconnect(); } catch(e) {}
      }
      if (audioContext) {
        try { audioContext.close(); } catch(e) {}
      }
       if (outputAudioContextRef.current) {
        try { outputAudioContextRef.current.close(); } catch(e) {}
      }
      for (const source of sourcesRef.current.values()) {
        try { source.stop(); } catch(e) {}
      }
      sourcesRef.current.clear();
    };
  }, [context]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-inner">
      <div className="flex justify-between items-center mb-3">
        <h5 className="font-bold text-gray-800">Conversa com IA (Áudio)</h5>
        <button
          onClick={handleClose}
          className="p-1 text-gray-500 hover:text-red-500 transition-colors rounded-full hover:bg-gray-200"
          title="Fechar conversa"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="text-sm font-medium text-gray-600 mb-3 p-2 bg-white rounded flex items-center justify-between">
        <span>Status: <span className={`font-bold ${status.includes('Conectado') ? 'text-green-600' : 'text-orange-600'}`}>{status}</span></span>
      </div>
      <div className="h-48 overflow-y-auto p-2 bg-white rounded space-y-3 text-sm border border-gray-200">
        {transcripts.length === 0 && !currentInput && !currentOutput && (
            <p className="text-gray-400 text-center italic mt-4">A transcrição aparecerá aqui...</p>
        )}
        {transcripts.map((t, index) => (
          <div key={index}>
            {t.user && <p className="text-right text-blue-800 mb-1"><span className="font-bold text-xs uppercase text-blue-400 block">Você</span> {t.user}</p>}
            {t.model && <p className="text-left text-teal-800"><span className="font-bold text-xs uppercase text-teal-400 block">Tutor</span> {t.model}</p>}
          </div>
        ))}
        {(currentInput || currentOutput) && (
            <div className="animate-pulse">
                {currentInput && <p className="text-right text-blue-600 opacity-70"><span className="font-bold text-xs uppercase text-blue-300 block">Você</span> {currentInput}</p>}
                {currentOutput && <p className="text-left text-teal-600 opacity-70"><span className="font-bold text-xs uppercase text-teal-300 block">Tutor</span> {currentOutput}</p>}
            </div>
        )}
      </div>
    </div>
  );
};

export default VoiceChat;
    