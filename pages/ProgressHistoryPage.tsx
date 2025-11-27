import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCourseProgress } from '../contexts/CourseProgressContext';
import { courseData } from '../constants/courseData';
import { ChevronLeftIcon, CheckCircleIcon } from '../constants/icons';

interface HistoryItem {
  id: string;
  type: 'section';
  title: string;
  moduleTitle: string;
  url: string;
  completedAt: string;
}

const findItemDetails = (key: string): Omit<HistoryItem, 'completedAt' | 'id'> | null => {
  if (key.startsWith('section-completed-')) {
    const sectionId = key.replace('section-completed-', '');
    for (const module of courseData.modules) {
      const section = module.sections.find(s => s.id === sectionId);
      if (section) {
        return {
          type: 'section',
          title: section.title,
          moduleTitle: module.title,
          url: `/modules/${module.id}/sections/${section.id}`,
        };
      }
    }
  }
  return null;
};

const formatDateGroup = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Hoje';
  }
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Ontem';
  }
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const ProgressHistoryPage: React.FC = () => {
  const { getCompletionHistory } = useCourseProgress();
  const navigate = useNavigate();

  const historyItems = useMemo(() => {
    const completedEvents = getCompletionHistory();
    return completedEvents
      .map(({ key, item }) => {
        const details = findItemDetails(key);
        if (details && item.completedAt) {
          return { ...details, completedAt: item.completedAt, id: key };
        }
        return null;
      })
      .filter((item): item is HistoryItem => item !== null);
  }, [getCompletionHistory]);

  const groupedHistory = useMemo(() => {
    return historyItems.reduce((acc, item) => {
      const dateKey = item.completedAt.split('T')[0]; // Group by YYYY-MM-DD
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(item);
      return acc;
    }, {} as Record<string, HistoryItem[]>);
  }, [historyItems]);

  const sortedGroupKeys = Object.keys(groupedHistory).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-colors"
      >
        <ChevronLeftIcon />
        Voltar
      </button>
      <h1 className="text-4xl font-extrabold text-brand-dark mb-8">Histórico de Progresso</h1>

      {historyItems.length === 0 ? (
        <div className="text-center py-10 px-6 bg-brand-surface rounded-lg shadow-md">
          <p className="text-lg text-gray-600">Você ainda não completou nenhuma seção.</p>
          <p className="mt-2 text-gray-500">Continue estudando para ver seu progresso aqui!</p>
          <Link
            to="/"
            className="mt-6 inline-block bg-brand-secondary hover:bg-brand-primary text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Ver Módulos
          </Link>
        </div>
      ) : (
        <div className="space-y-10">
          {sortedGroupKeys.map(dateKey => (
            <div key={dateKey}>
              <h2 className="text-2xl font-bold text-brand-primary pb-2 mb-4 border-b-2 border-brand-accent">
                {formatDateGroup(dateKey)}
              </h2>
              <div className="space-y-4">
                {groupedHistory[dateKey].map(item => (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="group block transform hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="bg-brand-surface p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center gap-4">
                      <div className="flex-shrink-0 text-green-500">
                        <CheckCircleIcon />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-lg text-brand-dark group-hover:text-brand-secondary transition-colors">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.moduleTitle}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>{new Date(item.completedAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressHistoryPage;
