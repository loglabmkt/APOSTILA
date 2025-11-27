
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courseData } from '../constants/courseData';
import { useCourseProgress } from '../contexts/CourseProgressContext';
import { type Section } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon, SearchIcon } from '../constants/icons';

const SectionLink: React.FC<{ module_id: string; section: Section }> = ({ module_id, section }) => {
  const { getProgress } = useCourseProgress();
  const isCompleted = getProgress(`section-completed-${section.id}`) === true;

  return (
    <Link 
      to={`/modules/${module_id}/sections/${section.id}`} 
      className="group block p-6 border-b hover:bg-brand-accent/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="transition-transform duration-300 group-hover:translate-x-2">
          <h3 className="text-lg font-semibold text-brand-secondary group-hover:text-brand-primary">{section.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{section.objective}</p>
        </div>
        <div className="flex items-center gap-4">
          {isCompleted && (
            <div className="text-green-500" title="Concluído">
              <CheckCircleIcon className="w-6 h-6" />
            </div>
          )}
          <div className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const module = courseData.modules.find(m => m.id === moduleId);
  const [searchTerm, setSearchTerm] = useState('');

  if (!module) {
    return <div className="text-center py-10">Módulo não encontrado.</div>;
  }
  
  const filteredSections = module.sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.objective.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-colors"
      >
        <ChevronLeftIcon className="w-5 h-5" />
        Voltar para Módulos
      </button>
      <h1 className="text-4xl font-extrabold text-brand-dark mb-2">{module.title}</h1>
      <p className="text-lg text-gray-700 mb-8">{module.description}</p>

      <div className="bg-brand-surface rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-gray-50 border-b flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold text-brand-dark">Seções</h2>
           <div className="w-full sm:w-1/2 relative">
             <input
              type="text"
              placeholder="Buscar seções por título ou objetivo..."
              className="w-full pl-10 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-secondary focus:border-brand-secondary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
                <SearchIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          {filteredSections.length > 0 ? (
            filteredSections.map(section => (
              <SectionLink key={section.id} module_id={module.id} section={section} />
            ))
           ) : (
             <div className="p-4 text-center text-gray-600">
                <p>Nenhuma seção encontrada com o termo "{searchTerm}".</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
