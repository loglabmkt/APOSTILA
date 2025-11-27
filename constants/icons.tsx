

import React from 'react';

interface IconProps {
    className?: string;
}

// Utilitário para manter o padrão visual
const BaseIcon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "w-6 h-6" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={1.5} // Traço mais fino para elegância
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        {children}
    </svg>
);

export const BookOpenIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </BaseIcon>
);

export const PencilAltIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </BaseIcon>
);

export const CheckCircleIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </BaseIcon>
);

export const ChatIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </BaseIcon>
);

export const SparklesIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </BaseIcon>
);

export const ChevronLeftIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M15 19l-7-7 7-7" />
    </BaseIcon>
);

export const ChevronRightIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M9 5l7 7-7 7" />
    </BaseIcon>
);

export const CheckIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M5 13l4 4L19 7" />
    </BaseIcon>
);

export const MicrophoneIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </BaseIcon>
);

export const SaveIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
         <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </BaseIcon>
);

// Novos Ícones para Padronização

export const SearchIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </BaseIcon>
);

export const TargetIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" /> 
    </BaseIcon>
);

export const PlayIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </BaseIcon>
);

export const ListIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </BaseIcon>
);

export const UserIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </BaseIcon>
);

export const HistoryIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </BaseIcon>
);

export const LogoutIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </BaseIcon>
);

export const CloseIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M6 18L18 6M6 6l12 12" />
    </BaseIcon>
);

export const ObjectiveIcon = ({ className }: IconProps) => (
     <BaseIcon className={className}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </BaseIcon>
);

export const BotIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h1m4 0h1" />
    </BaseIcon>
);

export const LightbulbIcon = ({ className }: IconProps) => (
    <BaseIcon className={className}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </BaseIcon>
);