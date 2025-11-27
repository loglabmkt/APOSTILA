
import React, { useRef, useEffect } from 'react';
import { useGlossary } from '../contexts/GlossaryContext';
import { glossaryTerms } from '../constants/glossaryData';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const { showDefinition } = useGlossary();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTermClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('glossary-term')) {
        const term = target.getAttribute('data-term');
        if (term) {
          showDefinition(term);
        }
      }
    };

    container.addEventListener('click', handleTermClick);
    return () => {
      container.removeEventListener('click', handleTermClick);
    };
  }, [showDefinition]);

  const createMarkup = (text: string) => {
    // 1. Identify and wrap glossary terms
    const terms = Object.keys(glossaryTerms).sort((a, b) => b.length - a.length);
    let processedText = text;
    
    terms.forEach(term => {
        const regex = new RegExp(`\\b(${term})\\b`, 'gi');
        processedText = processedText.replace(regex, (match) => {
            return `<span class="glossary-term text-brand-secondary font-semibold border-b-2 border-dotted border-brand-secondary cursor-help hover:bg-brand-accent/20 transition-colors rounded px-0.5" data-term="${match}">${match}</span>`;
        });
    });

    // 2. Process standard markdown
    const html = processedText
      // Bold and Italic with specific styling
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-indigo-800">$1</strong>')
      .replace(/_(.*?)_/g, '<em class="italic text-gray-600">$1</em>')
      // Line breaks
      .replace(/\n/g, '<br />');
    
    return { __html: html };
  };

  // Split content into logical blocks based on double newlines
  const blocks = content.split(/\n\s*\n/);

  return (
    <div ref={containerRef} className="text-gray-700 leading-relaxed font-sans">
      {blocks.map((block, index) => {
        const trimmedBlock = block.trim();

        if (trimmedBlock.startsWith('>')) {
          const quoteContent = trimmedBlock.split('\n').map(line => line.replace(/^>\s?/, '')).join('\n');
          return (
            <blockquote key={index} className="my-6 pl-6 italic border-l-4 border-brand-secondary bg-gray-50 py-4 pr-4 rounded-r-lg text-gray-700 shadow-sm">
              <div dangerouslySetInnerHTML={createMarkup(quoteContent)} />
            </blockquote>
          );
        }

        if (trimmedBlock.startsWith('# ')) {
           const headerText = trimmedBlock.substring(2);
          return <h1 key={index} className="text-3xl font-extrabold text-brand-dark mt-10 mb-6 border-b pb-2" dangerouslySetInnerHTML={createMarkup(headerText)} />;
        }
        
        if (trimmedBlock.startsWith('## ')) {
           const headerText = trimmedBlock.substring(3);
          return <h2 key={index} className="text-2xl font-bold text-brand-primary mt-8 mb-4 flex items-center" dangerouslySetInnerHTML={createMarkup(headerText)} />;
        }

        if (trimmedBlock.startsWith('### ')) {
           const headerText = trimmedBlock.substring(4);
          return <h3 key={index} className="text-lg font-bold text-indigo-700 mt-6 mb-3 uppercase tracking-wider border-l-4 border-indigo-300 pl-3" dangerouslySetInnerHTML={createMarkup(headerText)} />;
        }

        if (trimmedBlock.match(/^(\*|-|\d+\.)\s/)) {
          const items = trimmedBlock.split('\n');
          const isOrdered = /^\d+\.\s/.test(items[0]);
          const ListTag = isOrdered ? 'ol' : 'ul';
          
          return (
            <ListTag key={index} className={`my-4 pl-2 space-y-2 ${isOrdered ? 'list-none' : 'list-none'}`}>
              {items.map((item, itemIndex) => {
                 const content = item.replace(/^(\*|-|\d+\.)\s/, '');
                 return (
                    <li key={itemIndex} className="flex items-start gap-3">
                        <span className={`flex-shrink-0 mt-1.5 w-2 h-2 rounded-full ${isOrdered ? 'bg-transparent text-brand-secondary font-bold w-auto h-auto mr-1' : 'bg-brand-accent'}`}>
                            {isOrdered ? item.match(/^(\d+\.)/)?.[0] : ''}
                        </span>
                        <div dangerouslySetInnerHTML={createMarkup(content)} />
                    </li>
                 );
              })}
            </ListTag>
          );
        }

        if (trimmedBlock) {
          return <p key={index} className="mb-4 text-lg leading-8 text-gray-700" dangerouslySetInnerHTML={createMarkup(trimmedBlock)} />;
        }
        
        return null;
      })}
    </div>
  );
};

export default MarkdownRenderer;
