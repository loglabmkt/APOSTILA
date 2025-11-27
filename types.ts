

export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl: string; // base64 data URL
  password?: string;
}

export interface ActivityQuestion {
  id: string;
  question: string;
  context: string; // Contexto ou guia de resposta esperada para o Gemini
}

export interface SimulationScenario {
    scenario: string;
    role: string;
    methods: {
        name: string;
        prompt: string;
        description: string;
    }[];
}

export interface ContentBlock {
  id: string;
  type: 'header' | 'subheader' | 'paragraph' | 'list' | 'concept' | 'activity' | 'checklist' | 'quote' | 'note' | 'quick_tip' | 'simulation' | 'image';
  content: string | string[] | ChecklistItem[] | ActivityQuestion[] | SimulationScenario;
  title?: string;
  src?: string; // For image blocks
  alt?: string; // For image blocks
  caption?: string; // For image blocks
}

export interface ChecklistItem {
  id:string;
  text: string;
}

export interface Section {
  id: string;
  title: string;
  objective: string;
  content: ContentBlock[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

export interface Course {
  title: string;
  modules: Module[];
}

export interface ProgressItem {
  value: string | boolean;
  completedAt?: string; // ISO 8601 date string
}


export interface ProgressState {
  [key: string]: ProgressItem;
}