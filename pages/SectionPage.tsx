


import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { courseData } from '../constants/courseData';
import { type ContentBlock, type ChecklistItem, type ActivityQuestion, type SimulationScenario } from '../types';
import { useCourseProgress } from '../contexts/CourseProgressContext';
import { BookOpenIcon, PencilAltIcon, CheckCircleIcon, ChatIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon, CheckIcon, MicrophoneIcon, ObjectiveIcon, BotIcon, LightbulbIcon, UserIcon } from '../constants/icons';
import VoiceChat from '../components/VoiceChat';
import MarkdownRenderer from '../components/MarkdownRenderer';

const SimulationBlock: React.FC<{ block: ContentBlock }> = ({ block }) => {
    const scenarioData = block.content as SimulationScenario;
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({}); // Added to fix undefined error if used elsewhere or kept for consistency

    const handleSendMessage = async () => {
        if (!inputText.trim() || !selectedMethod) return;

        const userMsg = inputText;
        setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
        setInputText('');
        setIsLoading(true);

        try {
             if (!process.env.API_KEY) {
                setMessages(prev => [...prev, { sender: 'ai', text: "Erro: API_KEY não configurada." }]);
                return;
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const activeMethod = scenarioData.methods.find(m => m.name === selectedMethod);

            // Construct conversation history for context
            const historyContext = messages.map(m => `${m.sender === 'user' ? 'Aluno' : 'Cliente'}: ${m.text}`).join('\n');

            const prompt = `
                **Simulação de Negociação**
                
                **Cenário:** ${scenarioData.scenario}
                **Seu Papel:** ${scenarioData.role}
                **Método que o aluno deve aplicar:** ${activeMethod?.name}
                **Princípios do Método:** ${activeMethod?.prompt}

                **Histórico da conversa:**
                ${historyContext}
                Aluno: ${userMsg}

                **Sua tarefa:**
                Responda como o ${scenarioData.role}. 
                1. Reaja realisticamente ao que o aluno disse.
                2. Se o aluno aplicou bem os princípios do método (${activeMethod?.name}), seja mais flexível e cooperativo.
                3. Se o aluno foi agressivo, vago ou ignorou os princípios, seja mais resistente ou difícil.
                4. Mantenha a resposta curta (máximo 3 frases) para manter o diálogo dinâmico.
                5. Responda APENAS com a fala do personagem.
            `;

             const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            setMessages(prev => [...prev, { sender: 'ai', text: response.text || "..." }]);

        } catch (error) {
             console.error("Error in simulation:", error);
             setMessages(prev => [...prev, { sender: 'ai', text: "Erro de conexão. Tente novamente." }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!selectedMethod) {
        return (
            <div className="my-10 bg-white border border-indigo-100 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Simulação de Negociação</h3>
                <p className="text-gray-600 mb-6">{scenarioData.scenario}</p>
                <h4 className="font-semibold text-gray-800 mb-4">Escolha um método para praticar:</h4>
                <div className="grid gap-4 md:grid-cols-3">
                    {scenarioData.methods.map((method) => (
                        <button
                            key={method.name}
                            onClick={() => setSelectedMethod(method.name)}
                            className="p-4 border-2 border-indigo-100 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group"
                        >
                            <div className="font-bold text-indigo-700 group-hover:text-indigo-900 mb-2">{method.name}</div>
                            <div className="text-sm text-gray-500">{method.description}</div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="my-10 bg-gray-50 border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col h-[600px]">
            {/* Header */}
            <div className="bg-indigo-600 p-4 text-white flex justify-between items-center shadow-md">
                <div>
                    <div className="font-bold text-lg">Simulando: {scenarioData.role}</div>
                    <div className="text-xs text-indigo-200">Método: {selectedMethod}</div>
                </div>
                <button 
                    onClick={() => { setSelectedMethod(null); setMessages([]); }}
                    className="text-xs bg-indigo-700 hover:bg-indigo-800 px-3 py-1 rounded transition-colors"
                >
                    Reiniciar
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-100">
                {/* Scenario Intro Message */}
                <div className="flex justify-center">
                    <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                        Início da Simulação
                    </span>
                </div>
                
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                            msg.sender === 'user' 
                            ? 'bg-indigo-600 text-white rounded-tr-none' 
                            : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                        }`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex justify-start">
                        <div className="bg-white text-gray-500 p-3 rounded-2xl rounded-tl-none border border-gray-200 text-sm italic animate-pulse">
                            Digitando...
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Sua resposta..."
                        className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={isLoading || !inputText.trim()}
                        className="bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 disabled:opacity-50 transition-colors w-10 h-10 flex items-center justify-center"
                    >
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">
                    Dica: Lembre-se dos princípios do método {selectedMethod}.
                </p>
            </div>
        </div>
    );
};

const ActivityBlock: React.FC<{ block: ContentBlock }> = ({ block }) => {
    const { getProgress, updateProgress } = useCourseProgress();
    const [feedbacks, setFeedbacks] = useState<{ [key: string]: string }>({});
    const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});
    const [voiceChatStates, setVoiceChatStates] = useState<{ [key: string]: boolean }>({});
    const questions = block.content as ActivityQuestion[];

    const handleAnalyze = async (activityId: string, question: string, answer: string, context: string) => {
        setLoadingStates(prev => ({ ...prev, [activityId]: true }));
        setFeedbacks(prev => ({...prev, [activityId]: 'Analisando sua resposta...' }));

        try {
            if (!process.env.API_KEY) {
                setFeedbacks(prev => ({...prev, [activityId]: "Erro: A chave de API do Gemini não foi configurada. Por favor, configure a API_KEY no ambiente para usar esta funcionalidade."}));
                return;
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const prompt = `
                **Contexto da Atividade:** ${context}

                **Pergunta:** "${question}"

                **Resposta do Aluno:** "${answer}"

                **Sua Análise:**
                1.  Avalie se a resposta do aluno está correta, parcialmente correta ou incorreta, com base no contexto fornecido.
                2.  Forneça um feedback construtivo.
                3.  Se a resposta estiver errada ou incompleta, explique o porquê de forma clara e didática.
                4.  Apresente uma sugestão de resposta ideal ou aponte os elementos que faltaram.
            `;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    systemInstruction: 'Você é um tutor especialista em Análise de Requisitos. Sua tarefa é avaliar a resposta de um aluno. Mantenha um tom encorajador e educativo. Responda em português do Brasil. Use markdown para formatar sua resposta: use "### " para separar seções da sua resposta (ex: ### Análise, ### Correção, ### Sugestão). Use **negrito** para conceitos chave e listas para tópicos.',
                }
            });
            
            setFeedbacks(prev => ({...prev, [activityId]: response.text || "Sem resposta gerada." }));
        } catch (error: any) {
            console.error("Error analyzing with Gemini:", error);
            if (error.message && (error.message.includes('permission denied') || error.message.toLowerCase().includes('api key not valid'))) {
                 setFeedbacks(prev => ({...prev, [activityId]: "Erro de permissão: A chave de API do Gemini é inválida ou não tem permissão para usar este modelo. Verifique a configuração da sua chave." }));
            } else {
                setFeedbacks(prev => ({...prev, [activityId]: "Ocorreu um erro ao analisar sua resposta. Verifique o console para mais detalhes e tente novamente." }));
            }
        } finally {
            setLoadingStates(prev => ({ ...prev, [activityId]: false }));
        }
    };
    
    const toggleVoiceChat = (activityId: string) => {
        setVoiceChatStates(prev => ({...prev, [activityId]: !prev[activityId]}));
    };


    return (
        <div className="bg-white border border-indigo-100 rounded-2xl shadow-lg overflow-hidden my-10 transform transition-all hover:shadow-xl">
            <div className="bg-gradient-to-r from-indigo-50 to-white border-b border-indigo-100 p-5 flex items-center gap-4">
                 <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl shadow-inner">
                    <PencilAltIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-indigo-900 tracking-tight">{block.title}</h4>
            </div>
            
            <div className="p-6 sm:p-8 space-y-10">
                {questions.map((q) => {
                    const activityId = q.id;
                    const userAnswer = (getProgress(activityId) as string) || '';
                    const feedback = feedbacks[activityId];
                    const isLoading = loadingStates[activityId];
                    const isVoiceChatActive = voiceChatStates[activityId];

                    return (
                        <div key={activityId} className="space-y-4">
                            <div className="text-gray-800 font-medium leading-relaxed">
                                <MarkdownRenderer content={q.question} />
                            </div>
                            
                            {/* Área de Resposta Principal */}
                            <div className="relative group">
                                <textarea
                                    className="w-full p-5 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all min-h-[140px] resize-y text-gray-700 text-lg bg-gray-50 focus:bg-white placeholder-gray-400"
                                    value={userAnswer}
                                    onChange={(e) => updateProgress(activityId, e.target.value)}
                                    placeholder="Escreva sua resposta aqui..."
                                />
                                <div className="absolute bottom-4 right-4 pointer-events-none text-xs text-gray-400 group-focus-within:text-indigo-400 transition-colors">
                                    Sua resposta
                                </div>
                            </div>

                            <div className="flex justify-end pt-2">
                                <button
                                    onClick={() => handleAnalyze(activityId, q.question, userAnswer, q.context)}
                                    disabled={isLoading || !userAnswer}
                                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-full shadow-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-all active:scale-95 transform hover:-translate-y-0.5"
                                >
                                    <SparklesIcon className="w-5 h-5" />
                                    {isLoading ? 'Analisando...' : 'Confirmar'}
                                </button>
                            </div>
                            
                            {feedback && (
                                <div className="mt-8 animate-fade-in-up">
                                    <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-2xl p-6 shadow-inner relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -mr-6 -mt-6"></div>
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-center mb-4 pb-4 border-b border-indigo-100/50">
                                                <h5 className="font-bold text-indigo-900 flex items-center gap-3 text-lg">
                                                    <div className="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg">
                                                        <BotIcon className="w-6 h-6" />
                                                    </div>
                                                    Tutor Virtual
                                                </h5>
                                                {!isLoading && !isVoiceChatActive && (
                                                    <button 
                                                        onClick={() => toggleVoiceChat(activityId)}
                                                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none transition-colors shadow-sm"
                                                    >
                                                        <MicrophoneIcon className="w-4 h-4" />
                                                        Ouvir Feedback
                                                    </button>
                                                )}
                                            </div>

                                            {isVoiceChatActive && (
                                                <div className="mb-6 animate-fade-in">
                                                    <VoiceChat
                                                        context={{
                                                            question: q.question,
                                                            answer: userAnswer,
                                                            feedback: feedback,
                                                        }}
                                                        onClose={() => toggleVoiceChat(activityId)}
                                                    />
                                                </div>
                                            )}

                                            <div>
                                                <MarkdownRenderer content={feedback} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const ChecklistBlock: React.FC<{ block: ContentBlock }> = ({ block }) => {
    const { getProgress, updateProgress } = useCourseProgress();
    const items = block.content as ChecklistItem[];

    const progress = items.filter(i => getProgress(i.id) === true).length / items.length * 100;

    return (
        <div className="bg-white border border-green-100 rounded-2xl shadow-lg overflow-hidden my-10">
             <div className="bg-gradient-to-r from-green-50 to-white border-b border-green-100 p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-xl shadow-inner">
                        <CheckCircleIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-green-900 tracking-tight">{block.title}</h4>
                </div>
                <div className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    {Math.round(progress)}% Concluído
                </div>
            </div>
            
            <div className="relative h-1 w-full bg-green-50">
                 <div 
                    className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                 />
            </div>

            <div className="p-6 sm:p-8">
                <div className="space-y-3">
                    {items.map(item => {
                        const isChecked = getProgress(item.id) === true;
                        return (
                            <label 
                                key={item.id} 
                                className={`group flex items-start p-4 rounded-xl cursor-pointer transition-all duration-300 border ${isChecked ? 'bg-green-50 border-green-200' : 'bg-white border-gray-100 hover:border-green-200 hover:shadow-md'}`}
                            >
                                <div className="flex items-center h-6 mt-0.5">
                                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors duration-300 ${isChecked ? 'bg-green-500 border-green-500' : 'border-gray-300 group-hover:border-green-400 bg-white'}`}>
                                        {isChecked && (
                                            <CheckIcon className="w-4 h-4 text-white" />
                                        )}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={isChecked}
                                        onChange={() => updateProgress(item.id, !isChecked)}
                                    />
                                </div>
                                <span className={`ml-4 text-lg transition-all duration-300 ${isChecked ? 'line-through text-green-800 opacity-60' : 'text-gray-700 font-medium'}`}>
                                    {item.text}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


const BlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
    switch (block.type) {
        case 'header':
            return (
                <div className="mt-16 mb-8 border-b border-gray-200 pb-4">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight">
                        {block.content as string}
                    </h1>
                    <div className="h-1 w-20 bg-brand-secondary mt-2 rounded-full"></div>
                </div>
            );
        case 'subheader':
            return (
                <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mt-12 mb-6 flex items-center gap-3">
                    <span className="inline-block w-1.5 h-6 bg-brand-accent rounded-full"></span>
                    {block.content as string}
                </h2>
            );
        case 'paragraph':
            return (
                <div className="text-lg text-gray-700 leading-8 mb-8 mx-1 sm:mx-0 text-justify sm:text-left">
                    <MarkdownRenderer content={block.content as string} />
                </div>
            );
        case 'list':
            return (
                <div className="mb-8 ml-2 sm:ml-6">
                    <ul className="space-y-4">
                        {(block.content as string[]).map((item, index) => (
                            <li key={index} className="flex items-start gap-4 text-lg text-gray-700 leading-relaxed">
                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-brand-secondary ring-4 ring-brand-secondary/20"></span>
                                <div className="flex-1">
                                    <MarkdownRenderer content={item} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        case 'quote':
            return (
                <blockquote className="relative p-8 my-10 bg-brand-background rounded-2xl border-l-8 border-brand-secondary shadow-sm">
                    <div className="absolute top-4 left-4 text-brand-secondary opacity-20">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                    </div>
                    <div className="relative z-10 text-xl sm:text-2xl font-serif font-medium italic text-brand-dark leading-relaxed pl-6">
                        <MarkdownRenderer content={block.content as string} />
                    </div>
                </blockquote>
            );
        case 'concept':
            return (
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6 sm:p-8 my-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
                    <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
                        <div className="flex-shrink-0 p-3 bg-white text-sky-600 rounded-xl shadow-sm ring-1 ring-sky-100">
                            <BookOpenIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-sky-900 mb-3 uppercase tracking-wide text-sm">{block.title}</h4>
                            <div className="text-lg text-sky-900/80 leading-relaxed font-medium">
                                <MarkdownRenderer content={block.content as string} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'note':
            return (
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 sm:p-8 my-10 shadow-sm hover:shadow-md transition-all duration-300">
                     <div className="flex flex-col sm:flex-row items-start gap-5">
                        <div className="flex-shrink-0 p-3 bg-white text-amber-500 rounded-xl shadow-sm ring-1 ring-amber-100">
                            <ChatIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-amber-900 mb-3 uppercase tracking-wide text-sm">{block.title}</h4>
                            <div className="text-lg text-amber-900/80 leading-relaxed">
                                <MarkdownRenderer content={block.content as string} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'quick_tip':
            return (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-r-lg shadow-sm flex items-start gap-3">
                    <div className="text-yellow-500 flex-shrink-0 mt-1">
                        <LightbulbIcon className="w-6 h-6" />
                    </div>
                    <div className="text-gray-800 text-base">
                         <strong className="block text-yellow-800 font-bold mb-1 text-sm uppercase tracking-wide">Dica Rápida</strong>
                        <MarkdownRenderer content={block.content as string} />
                    </div>
                </div>
            );
        case 'image':
            return (
                <div className="my-10 flex flex-col items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white p-2">
                        <img 
                            src={block.src} 
                            alt={block.alt || 'Imagem ilustrativa'} 
                            className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                            onError={(e) => {
                                e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/1e293b?text=Imagem+Indispon%C3%ADvel';
                            }}
                        />
                    </div>
                    {block.caption && (
                        <p className="mt-3 text-sm text-gray-500 font-medium text-center italic px-4">
                            {block.caption}
                        </p>
                    )}
                </div>
            );
        case 'simulation':
            return <SimulationBlock block={block} />;
        case 'activity':
            return <ActivityBlock block={block} />;
        case 'checklist':
            return <ChecklistBlock block={block} />;
        default:
            return null;
    }
};

const SectionPage: React.FC = () => {
  const { moduleId, sectionId } = useParams<{ moduleId: string; sectionId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { updateProgress, getProgress } = useCourseProgress();

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [moduleId, sectionId]);

  const module = courseData.modules.find(m => m.id === moduleId);
  const sectionIndex = module?.sections.findIndex(s => s.id === sectionId) ?? -1;
  const section = module?.sections[sectionIndex];

  const prevSection = sectionIndex > 0 ? module?.sections[sectionIndex - 1] : null;
  const nextSection = sectionIndex < (module?.sections.length || 0) - 1 ? module?.sections[sectionIndex + 1] : null;

  const sectionNotesKey = section ? `section-notes-${section.id}` : 'temp-notes';
  const sectionNotes = (getProgress(sectionNotesKey) as string) || '';


  // Save current location as last visited when the component mounts or updates
  useEffect(() => {
      if (module && section) {
          const metadata = JSON.stringify({
              moduleId: module.id,
              sectionId: section.id,
              moduleTitle: module.title,
              sectionTitle: section.title,
              path: location.pathname
          });
          updateProgress('last_visited_metadata', metadata);
      }
  }, [module, section, location.pathname, updateProgress]);


  if (!module || !section) {
    return <div className="text-center py-20 text-xl text-gray-500">Seção não encontrada.</div>;
  }
  
  const handleMarkAsComplete = () => {
    updateProgress(`section-completed-${section.id}`, true, true); // Mark as a completion event
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(nextSection) {
      navigate(`/modules/${moduleId}/sections/${nextSection.id}`);
    } else {
      navigate(`/modules/${moduleId}`);
    }
  }

  return (
    <div className="min-h-screen bg-brand-background pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
            {/* Breadcrumb / Nav */}
            <nav className="flex items-center justify-between mb-8">
                <button
                    onClick={() => navigate(`/modules/${moduleId}`)}
                    className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-brand-surface hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-all"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                    <span className="group-hover:underline decoration-brand-secondary underline-offset-2">Voltar para Módulo</span>
                </button>
                <span className="text-sm font-medium text-gray-400 hidden sm:inline-block">{module.title}</span>
            </nav>

            <div className="bg-brand-surface p-6 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
                {/* Section Header */}
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <div className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">Seção {sectionIndex + 1}</div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-6 leading-tight">{section.title}</h1>
                    <div className="flex items-start gap-4 text-gray-600 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                         <div className="text-brand-secondary flex-shrink-0 p-1">
                            <ObjectiveIcon className="w-10 h-10" />
                         </div>
                         <div>
                            <h3 className="font-bold text-brand-dark mb-1">Objetivo de Aprendizagem</h3>
                            <p className="text-lg leading-relaxed text-gray-700">{section.objective}</p>
                         </div>
                    </div>
                </div>

                {/* Content Blocks */}
                <div className="space-y-2">
                    {section.content.map(block => <BlockRenderer key={block.id} block={block} />)}
                </div>

                {/* Section Notes (Moved to Bottom) */}
                <div className="my-12 bg-yellow-50 border border-yellow-100 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                            <PencilAltIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-yellow-900">Anotações da Seção</h3>
                    </div>
                    <label htmlFor="section-notes" className="sr-only">Suas observações sobre esta seção</label>
                    <textarea
                        id="section-notes"
                        className="w-full p-4 border border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all min-h-[120px] text-gray-700 bg-white placeholder-gray-400 resize-y shadow-inner"
                        value={sectionNotes}
                        onChange={(e) => updateProgress(sectionNotesKey, e.target.value)}
                        placeholder="Espaço livre para suas anotações, dúvidas ou resumos desta seção..."
                    />
                    <p className="text-right text-xs text-yellow-600/70 mt-2 italic">Suas anotações são salvas automaticamente.</p>
                </div>
                
                {/* Navigation Footer */}
                <div className="mt-10 pt-10 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        
                        {/* Prev Button */}
                        <div className="w-full md:w-1/4 order-2 md:order-1">
                            {prevSection ? (
                                <Link 
                                    to={`/modules/${moduleId}/sections/${prevSection.id}`} 
                                    className="group flex items-center justify-center md:justify-start gap-3 px-5 py-4 w-full rounded-xl text-gray-500 hover:text-brand-primary hover:bg-gray-50 transition-all duration-300"
                                >
                                    <div className="p-2 rounded-full bg-white border border-gray-200 group-hover:border-brand-primary/40 group-hover:text-brand-primary text-gray-400 transition-all shadow-sm">
                                        <ChevronLeftIcon className="w-5 h-5" />
                                    </div>
                                    <span className="uppercase tracking-widest text-xs font-bold">Anterior</span>
                                </Link>
                            ) : <div className="hidden md:block w-full"></div>}
                        </div>

                        {/* Main Action (Finish) */}
                        <div className="w-full md:w-2/4 order-1 md:order-2 flex justify-center">
                             <button 
                                onClick={handleMarkAsComplete} 
                                className="relative inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-brand-secondary to-brand-primary hover:from-brand-primary hover:to-brand-dark text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-brand-primary/20 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-accent/50 overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
                                <CheckIcon className="w-6 h-6" />
                                <span className="text-lg tracking-wide relative z-10 uppercase font-bold">
                                    {nextSection ? "Concluir & Avançar" : "Finalizar Módulo"}
                                </span>
                            </button>
                        </div>

                        {/* Next Button */}
                        <div className="w-full md:w-1/4 order-3 md:order-3">
                             {nextSection ? (
                                <Link 
                                    to={`/modules/${moduleId}/sections/${nextSection.id}`} 
                                    className="group flex items-center justify-center md:justify-end gap-3 px-5 py-4 w-full rounded-xl text-gray-500 hover:text-brand-primary hover:bg-gray-50 transition-all duration-300"
                                >
                                    <span className="uppercase tracking-widest text-xs font-bold">Próxima</span>
                                    <div className="p-2 rounded-full bg-white border border-gray-200 group-hover:border-brand-primary/40 group-hover:text-brand-primary text-gray-400 transition-all shadow-sm">
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </div>
                                </Link>
                            ) : <div className="hidden md:block w-full"></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SectionPage;
