
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCourseProgress } from '../contexts/CourseProgressContext';
import { SaveIcon, HistoryIcon, UserIcon, LogoutIcon } from '../constants/icons';

const SaveStatusIndicator: React.FC = () => {
    const { saveStatus } = useCourseProgress();

    if (saveStatus === 'idle') {
        return null;
    }
    
    const messages = {
        saving: 'Salvando...',
        saved: 'Progresso salvo ✓'
    };
    
    return (
        <div className="flex items-center gap-2 text-sm text-brand-accent transition-opacity duration-300">
            <SaveIcon className="w-4 h-4" />
            <span>{messages[saveStatus]}</span>
        </div>
    );
};


const AppLayout: React.FC = () => {
    const { currentUser, logout } = useAuth();

    return (
        <div className="min-h-screen bg-brand-background text-brand-dark font-sans">
            <header className="bg-brand-primary shadow-md sticky top-0 z-10">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-white text-2xl font-bold hover:text-brand-accent transition-colors">
                                Apostila de Análise de Requisitos
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6">
                            {currentUser && (
                                <>
                                    <SaveStatusIndicator />
                                    
                                    <Link to="/history" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors" title="Histórico">
                                        <HistoryIcon className="w-5 h-5" />
                                        <span className="hidden sm:inline text-sm font-medium">Histórico</span>
                                    </Link>
                                    
                                    <Link to="/profile" className="flex items-center gap-3 group">
                                        <div className="text-right hidden sm:block">
                                            <div className="text-sm font-medium text-white group-hover:text-brand-accent transition-colors">{currentUser.name}</div>
                                        </div>
                                        <img src={currentUser.photoUrl} alt="Foto de perfil" className="h-9 w-9 rounded-full object-cover border-2 border-brand-accent/50 group-hover:border-brand-accent transition-colors"/>
                                    </Link>

                                    <button 
                                        onClick={logout} 
                                        className="text-white/80 hover:text-red-200 transition-colors p-2 rounded-lg hover:bg-white/10"
                                        title="Sair"
                                    >
                                        <LogoutIcon className="w-5 h-5" />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
