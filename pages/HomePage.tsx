
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { courseData } from '../constants/courseData';
import { useCourseProgress } from '../contexts/CourseProgressContext';
import { useAuth } from '../contexts/AuthContext';
import ProgressBar from '../components/ProgressBar';
import { type Module, type ActivityQuestion, type ChecklistItem } from '../types';
import { ChevronRightIcon, CheckCircleIcon, SearchIcon, PlayIcon, PencilAltIcon, ListIcon } from '../constants/icons';

const ResumeBanner: React.FC = () => {
    const { getProgress } = useCourseProgress();
    const navigate = useNavigate();
    
    const lastVisitedRaw = getProgress('last_visited_metadata');
    
    if (!lastVisitedRaw || typeof lastVisitedRaw !== 'string') return null;

    try {
        const lastVisited = JSON.parse(lastVisitedRaw);
        
        return (
            <div className="mb-10 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-2xl shadow-lg p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 transform transition-all hover:shadow-xl">
                <div className="space-y-2 text-center sm:text-left">
                    <div className="uppercase tracking-wider text-xs font-bold text-brand-accent/80">Continuar de onde parou</div>
                    <h2 className="text-2xl font-bold">{lastVisited.moduleTitle}</h2>
                    <p className="text-white/80 text-lg">{lastVisited.sectionTitle}</p>
                </div>
                <button 
                    onClick={() => navigate(lastVisited.path)}
                    className="px-8 py-3 bg-white text-brand-primary font-bold rounded-full shadow-md hover:bg-brand-light hover:text-brand-dark transition-all transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap"
                >
                    Retomar
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
        );
    } catch (e) {
        console.error("Error parsing last visited data", e);
        return null;
    }
};

const ModuleCard: React.FC<{ module: Module }> = ({ module }) => {
  const { getProgress } = useCourseProgress();
  
  const totalSections = module.sections.length;
  const completedSections = module.sections.filter(section => getProgress(`section-completed-${section.id}`) === true).length;
  const progressPercentage = totalSections > 0 ? (completedSections / totalSections) * 100 : 0;
  const isCompleted = progressPercentage === 100;
  const isStarted = progressPercentage > 0;

  // Calculate detailed progress for activities and checklists
  let totalActivities = 0;
  let completedActivities = 0;
  let totalChecklistItems = 0;
  let completedChecklistItems = 0;

  module.sections.forEach(section => {
    section.content.forEach(block => {
      if (block.type === 'activity') {
        const questions = block.content as ActivityQuestion[];
        totalActivities += questions.length;
        questions.forEach(q => {
          if (getProgress(q.id)) {
            completedActivities++;
          }
        });
      } else if (block.type === 'checklist') {
        const items = block.content as ChecklistItem[];
        totalChecklistItems += items.length;
        items.forEach(item => {
          if (getProgress(item.id) === true) {
            completedChecklistItems++;
          }
        });
      }
    });
  });
  
  const getActionButton = () => {
      if (isCompleted) {
          return (
              <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-full">
                  <CheckCircleIcon className="w-5 h-5" />
                  <span>Concluído</span>
              </div>
          )
      }
      if (isStarted) {
          return (
              <div className="flex items-center gap-2 text-brand-secondary font-bold bg-brand-background px-4 py-2 rounded-full group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                  <span>Continuar</span>
                  <ChevronRightIcon className="w-5 h-5" />
              </div>
          )
      }
      return (
        <div className="flex items-center gap-2 text-brand-primary font-bold bg-brand-background px-4 py-2 rounded-full group-hover:bg-brand-primary group-hover:text-white transition-colors">
            <PlayIcon className="w-5 h-5" />
            <span>Começar</span>
        </div>
      )
  };

  return (
    <Link to={`/modules/${module.id}`} className="block group h-full">
      <div className="bg-brand-surface rounded-2xl shadow-md hover:shadow-xl overflow-hidden h-full flex flex-col border border-gray-100 transition-all duration-300 transform group-hover:-translate-y-1">
        <div className="p-8 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-2">{module.title}</h2>
              {isCompleted && <span className="text-green-500 flex-shrink-0"><CheckCircleIcon className="w-6 h-6" /></span>}
          </div>
          <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">{module.description}</p>
          
          <div className="flex justify-end mt-auto">
            {getActionButton()}
          </div>
        </div>
        
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Progresso</span>
            <span className="text-xs font-bold text-gray-700">{Math.round(progressPercentage)}%</span>
          </div>
          <ProgressBar progress={progressPercentage} />
          
          {(totalActivities > 0 || totalChecklistItems > 0) && (
            <div className="mt-4 pt-3 border-t border-gray-200/50 grid grid-cols-2 gap-4 text-xs text-gray-500">
              {totalActivities > 0 && (
                <div className="flex items-center gap-1.5">
                   <PencilAltIcon className="w-4 h-4" />
                   <span>{completedActivities}/{totalActivities} Atividades</span>
                </div>
              )}
              {totalChecklistItems > 0 && (
                <div className="flex items-center gap-1.5">
                   <ListIcon className="w-4 h-4" />
                   <span>{completedChecklistItems}/{totalChecklistItems} Checks</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { currentUser } = useAuth();

  const filteredModules = useMemo(() => courseData.modules.filter(module =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase())
  ), [searchTerm]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
            Olá, <span className="text-brand-primary">{currentUser?.name?.split(' ')[0]}</span>! 👋
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
            Pronto para dominar a Análise de Requisitos? Continue sua jornada ou explore novos módulos abaixo.
        </p>
      </div>
      
      <ResumeBanner />
      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
         <h3 className="text-2xl font-bold text-brand-dark">Módulos do Curso</h3>
         <div className="w-full sm:w-auto min-w-[300px]">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar módulos..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute left-3 top-3.5 text-gray-400">
                    <SearchIcon className="w-5 h-5" />
                </div>
            </div>
         </div>
      </div>

      {filteredModules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredModules.map(module => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      ) : (
         <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
           <div className="text-6xl mb-4 flex justify-center text-gray-300">
             <SearchIcon className="w-16 h-16" />
           </div>
           <p className="text-xl text-gray-600 font-medium">Nenhum módulo encontrado com o termo "{searchTerm}".</p>
           <button onClick={() => setSearchTerm('')} className="mt-4 text-brand-secondary hover:underline font-medium">Limpar busca</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
