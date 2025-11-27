

import { type Course } from '../types';

export const courseData: Course = {
  title: "Formação Analista de Requisitos",
  modules: [
    {
      id: "module-1",
      title: "Capacidade de Abstração da Solução",
      description: "Aprenda a focar na essência do problema, objetivos de negócio e valor real para o usuário, saindo do 'como' para o 'o que' precisa ser resolvido.",
      sections: [
        {
          id: "sec-1-1",
          title: "Introdução à Abstração",
          objective: "Compreender o papel fundamental da abstração na análise de requisitos de software.",
          content: [
            { id: "c1-1-1", type: 'header', content: 'Introdução' },
            { id: "c1-1-2", type: 'paragraph', content: 'No desenvolvimento de software, é fácil afundar nos detalhes: telas, campos, botões, tecnologias... Mas, antes de tudo isso, o Analista de Requisitos precisa enxergar: a essência do problema, o objetivo de negócio, e o valor real para usuário e organização.' },
            { id: "c1-1-3", type: 'quote', content: 'Essa é a capacidade de abstração da solução: sair do "como exatamente vai ser implementado" e olhar primeiro para o que realmente precisa ser resolvido.' },
            { id: "c1-1-4", type: 'subheader', content: 'Objetivos de aprendizagem deste módulo' },
            { id: "c1-1-5", type: 'list', content: [
              'Explicar o que é abstração em análise de requisitos.',
              'Identificar e evitar armadilhas como scope creep, gold plating e alguns tipos de viés de pensamento.',
              'Utilizar técnicas de abstração, como: perguntas indutivas, 5 porquês, storytelling, storyboard, brainstorming + mapas mentais.',
              'Validar e confirmar requisitos abstratos usando: revisões/walkthroughs, prototipagem de baixa fidelidade, cenários e histórias de usuário, critérios de aceitação (incluindo BDD), e testes de aceitação e métricas de sucesso.'
            ]},
            {
              id: "c1-1-6", type: 'activity', title: 'Reflexão Inicial',
              content: [
                { id: 'act1-1-q1', question: 'Por que focar no "como" (telas, botões) muito cedo pode ser prejudicial para um projeto de software?', context: 'Uma boa resposta deve mencionar que focar no "como" cedo demais limita a criatividade, pode levar a soluções que não resolvem o problema real e aumenta o custo de mudança se a solução estiver errada.' },
                { id: 'act1-1-q2', question: 'Qual a diferença entre o "problema do usuário" e a "solução técnica"? Dê um exemplo.', context: 'Exemplo: Problema = "Não consigo pagar minhas contas no prazo". Solução Técnica = "Um sistema de agendamento automático de pagamentos via API bancária".' },
                { id: 'act1-1-q3', question: 'Você já participou de um projeto onde a equipe construiu algo que ninguém usou? Qual foi a causa raiz na sua opinião?', context: 'Resposta pessoal. Geralmente a causa raiz está na falta de entendimento do problema (falta de abstração) ou falta de validação com o usuário.' }
              ]
            }
          ]
        },
        {
            id: "sec-1-2",
            title: "Aquecimento - O que é abstrair?",
            objective: "Definir o conceito de abstração com suas próprias palavras e aplicá-lo a um problema cotidiano.",
            content: [
                { id: "c1-2-1", type: 'header', content: 'Aquecimento - O que é abstrair?' },
                { id: "c1-2-2", type: 'concept', title: 'Conceito-chave - Abstração', content: 'Abstrair é ignorar detalhes que não são importantes naquele momento e focar nos elementos essenciais de um problema ou sistema.' },
                { id: "c1-2-3", type: 'quote', content: '"Abstração é a arte de simplificar um problema complexo sem distorcer o que é importante.”' },
                {
                    id: "c1-2-4", type: 'activity', title: 'Atividade 1 - Praticando a Abstração',
                    content: [
                        { id: 'act1-q1', question: '1. Em 2-3 frases, escreva com suas palavras: O que é "abstrair" um problema de software?', context: 'Uma boa resposta deve focar em simplificação, em ignorar detalhes irrelevantes e em focar nos elementos essenciais do problema para entender o "o quê" antes do "como".' },
                        { id: 'act1-q2', question: '2. Agora escolha um problema simples do dia a dia (ex.: "me atraso para compromissos" ou "tenho muitos e-mails acumulados"). Descreva-o de forma bem concreta, cheia de detalhes (horários, sentimentos, locais).', context: 'Avalie se a descrição é rica em detalhes específicos, como horários, pessoas, sentimentos, e ações concretas. A resposta é um exercício de escrita, então o foco é a concretude.' },
                        { id: 'act1-q3', question: '3. Depois, reescreva o mesmo problema de forma abstrata, focando apenas na essência (causa raiz ou padrão).', context: 'Verifique se a reescrita remove os detalhes específicos da resposta anterior e captura o problema central. Por exemplo, "me atraso para compromissos" poderia ser abstraído para "dificuldade no gerenciamento de tempo e prioridades".' }
                    ]
                },
                { id: "c1-2-5", type: 'note', title: 'Dica', content: 'Abstrair não é ser vago. É ser preciso sobre o que importa e ignorar o ruído.' },
            ]
        },
        {
            id: "sec-1-3",
            title: "Precedentes importantes: o que evitar",
            objective: "Identificar perigos clássicos que atrapalham a abstração, como Scope Creep, Gold Plating e Viés de Confirmação.",
            content: [
                { id: "c1-3-1", type: 'header', content: 'Precedentes importantes: o que evitar' },
                { id: "c1-3-2", type: 'paragraph', content: 'Antes de falar de técnicas, vamos ver alguns perigos clássicos que atrapham a abstração.' },
                { id: "c1-3-3", type: 'concept', title: 'Scope creep (Escopo rastejante)', content: 'Quando o escopo do projeto vai crescendo aos poucos, sem controle, sem planejamento, sem alinhamento formal. Resultado: prazos estouram, custo aumenta, equipe se perde.' },
                { id: "c1-3-4", type: 'concept', title: 'Gold plating (Folhear a ouro)', content: 'Quando a equipe entrega além do combinado, adicionando coisas “bonitinhas” ou “legais", mas não pedidas e não necessárias. Resultado: mais esforço, mais risco, pouco ou nenhum valor adicional.' },
                { id: "c1-3-5", type: 'concept', title: 'Viés de confirmação', content: 'Tendência de procurar apenas evidências que confirmem o que já acreditamos e ignorar aquilo que contradiz nossas ideias.' },
                {
                    id: "c1-3-6", type: 'activity', title: 'Atividade 2 - Caçando armadilhas',
                    content: [
                        { id: 'act2-q1', question: 'Pensem em um projeto fictício de "Aplicativo de Dieta". Descreva um exemplo de Scope Creep que poderia acontecer.', context: 'Exemplo esperado: Começar apenas com contagem de calorias e, sem planejar, decidir adicionar integração com relógios inteligentes, rede social de receitas e marketplace de suplementos no meio do desenvolvimento.' },
                        { id: 'act2-q2', question: 'Para o mesmo app, dê um exemplo de Gold Plating.', context: 'Exemplo esperado: O desenvolvedor decide criar animações complexas de confete toda vez que o usuário bate a meta de água, sendo que o requisito era apenas mostrar um "check".' },
                        { id: 'act2-q3', question: 'Como o Viés de Confirmação poderia atrapalhar o levantamento de requisitos desse app?', context: 'Exemplo esperado: O analista acredita que "todo mundo quer contar calorias" e só entrevista fisiculturistas, ignorando usuários comuns que preferem apenas dicas de alimentação saudável.' }
                    ]
                },
            ]
        },
        {
            id: "sec-1-4",
            title: "Técnicas Detalhadas de Abstração",
            objective: "Aprender e aplicar técnicas visuais e interrogativas para elicitar e abstrair requisitos complexos.",
            content: [
                { id: "c1-4-intro", type: 'paragraph', content: 'Há diversas formas de modelar o negócio de uma aplicação a ser implementada, as quais ajudam na abstração: BPMN, Diagramas de Casos de Uso, UML, etc. Nesta seção, focaremos nas técnicas mais exploratórias e visuais.' },
                
                // Perguntas Indutivas
                { id: "c1-4-q1", type: 'header', content: 'Perguntas Indutivas' },
                { id: "c1-4-q2", type: 'paragraph', content: 'As perguntas indutivas são uma técnica fundamental para abstração de requisitos, pois permitem que o analista explore o conhecimento tácito do usuário e identifique necessidades que muitas vezes não estão formalizadas. O objetivo é conduzir o usuário ou stakeholder a refletir sobre suas atividades e processos.' },
                { id: "c1-4-q3", type: 'list', content: [
                    '**Exemplos de perguntas indutivas:**',
                    'Quais são as etapas envolvidas quando você executa [determinada atividade]?',
                    'O que acontece se determinada informação estiver incorreta ou faltar?',
                    'Como você sabe que a tarefa foi concluída com sucesso?',
                    'Quais são os problemas mais comuns que você enfrenta nesse processo?',
                    'O que você gostaria que fosse diferente ou mais automatizado em relação ao processo atual?',
                    'Como você reage quando ocorre uma exceção ou uma situação não prevista?'
                ]},
                { id: "c1-4-q4", type: 'quick_tip', title: 'Boas Práticas', content: '**Evite perguntas fechadas** (sim/não). Prefira perguntas abertas. **Mantenha um tom neutro**, evitando induzir respostas enviesadas. **Explore exemplos concretos** e situações reais vivenciadas pelo usuário.' },

                // 5 Porquês
                { id: "c1-4-5why-1", type: 'header', content: 'Os 5 Porquês' },
                { id: "c1-4-5why-2", type: 'concept', title: 'Causa Raiz', content: 'Uma das formas relevantes de fazer "follow-up" é utilizar a técnica dos 5 Porquês. Trata-se de uma ferramenta de análise de causa raiz. Seu objetivo é investigar a relação de causa e efeito subjacente a um problema, perguntando repetidamente "Por quê?" até que a causa raiz seja identificada.' },
                { 
                    id: "c1-4-5why-img", 
                    type: 'image',
                    content: '', 
                    src: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22400%22%20viewBox%3D%220%200%20800%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22grad1%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%23005f73%3Bstop-opacity%3A1%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%230a9396%3Bstop-opacity%3A1%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f8f9fa%22%20rx%3D%2215%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%2250%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22bold%22%20fill%3D%22%23001219%22%20text-anchor%3D%22middle%22%3ET%C3%A9cnica%20dos%205%20Porqu%C3%AAs%3C%2Ftext%3E%3Cg%20transform%3D%22translate(50%2C%2080)%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22120%22%20height%3D%2260%22%20rx%3D%2210%22%20fill%3D%22%2394d2bd%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%2260%22%20y%3D%2235%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23001219%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E1.%20Por%20qu%C3%AA%3F%3C%2Ftext%3E%3Crect%20x%3D%22150%22%20y%3D%2250%22%20width%3D%22120%22%20height%3D%2260%22%20rx%3D%2210%22%20fill%3D%22%2394d2bd%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22210%22%20y%3D%2285%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23001219%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E2.%20Por%20qu%C3%AA%3F%3C%2Ftext%3E%3Crect%20x%3D%22300%22%20y%3D%22100%22%20width%3D%22120%22%20height%3D%2260%22%20rx%3D%2210%22%20fill%3D%22%230a9396%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22360%22%20y%3D%22135%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E3.%20Por%20qu%C3%AA%3F%3C%2Ftext%3E%3Crect%20x%3D%22450%22%20y%3D%22150%22%20width%3D%22120%22%20height%3D%2260%22%20rx%3D%2210%22%20fill%3D%22%23005f73%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22510%22%20y%3D%22185%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E4.%20Por%20qu%C3%AA%3F%3C%2Ftext%3E%3Crect%20x%3D%22600%22%20y%3D%22200%22%20width%3D%22120%22%20height%3D%2260%22%20rx%3D%2210%22%20fill%3D%22%23001219%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22660%22%20y%3D%22235%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E5.%20Por%20qu%C3%AA%3F%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(250%2C%20320)%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22300%22%20height%3D%2260%22%20rx%3D%2230%22%20fill%3D%22url(%23grad1)%22%20%2F%3E%3Ctext%20x%3D%22150%22%20y%3D%2235%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2222%22%20font-weight%3D%22bold%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3ECausa%20Raiz%20Encontrada!%3C%2Ftext%3E%3C%2Fg%3E%3Cpath%20d%3D%22M%20710%20310%20L%20710%20350%20L%20550%20350%22%20fill%3D%22none%22%20stroke%3D%22%23001219%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%225%2C5%22%2F%3E%3C%2Fsvg%3E', 
                    alt: 'Diagrama ilustrando a técnica dos 5 Porquês com setas descendentes',
                    caption: 'A técnica dos 5 Porquês ajuda a chegar na causa raiz de um problema.'
                },

                // Storytelling
                { id: "c1-4-story-1", type: 'header', content: 'Storytelling' },
                { id: "c1-4-story-2", type: 'paragraph', content: 'Storytelling é a arte de contar histórias para transmitir uma mensagem, ideia ou informação de forma envolvente e memorável. No contexto da análise de requisitos, isso pode ser feito começando de uma narrativa com base no "caminho feliz" (fluxo principal).' },
                { id: "c1-4-story-3", type: 'quote', content: 'Isso ajuda a área de negócio a perceber melhor suas necessidades no dia a dia, facilitando a identificação da "dor do cliente".' },
                { 
                    id: "c1-4-story-img", 
                    type: 'image',
                    content: '', 
                    src: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22400%22%20viewBox%3D%220%200%20800%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22bgGrad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%23f0f4f8%3Bstop-opacity%3A1%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%23dbeafe%3Bstop-opacity%3A1%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22url(%23bgGrad)%22%20rx%3D%2215%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%2250%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%20fill%3D%22%23001219%22%20text-anchor%3D%22middle%22%3EStorytelling%3A%20A%20Jornada%20do%20Usu%C3%A1rio%3C%2Ftext%3E%3Crect%20x%3D%22250%22%20y%3D%2280%22%20width%3D%22400%22%20height%3D%22220%22%20rx%3D%225%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20d%3D%22M%20280%20250%20Q%20350%20250%2C%20380%20150%20T%20480%20150%20T%20600%20220%22%20fill%3D%22none%22%20stroke%3D%22%23e9d8a6%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%22280%22%20cy%3D%22250%22%20r%3D%226%22%20fill%3D%22%230a9396%22%2F%3E%3Ctext%20x%3D%22280%22%20y%3D%22270%22%20font-family%3D%22Arial%22%20font-size%3D%2212%22%20fill%3D%22%23555%22%20text-anchor%3D%22middle%22%3EIn%C3%ADcio%3C%2Ftext%3E%3Ccircle%20cx%3D%22380%22%20cy%3D%22150%22%20r%3D%226%22%20fill%3D%22%230a9396%22%2F%3E%3Ctext%20x%3D%22380%22%20y%3D%22130%22%20font-family%3D%22Arial%22%20font-size%3D%2212%22%20fill%3D%22%23555%22%20text-anchor%3D%22middle%22%3EA%C3%A7%C3%A3o%3C%2Ftext%3E%3Ccircle%20cx%3D%22600%22%20cy%3D%22220%22%20r%3D%226%22%20fill%3D%22%23005f73%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22240%22%20font-family%3D%22Arial%22%20font-size%3D%2212%22%20fill%3D%22%23555%22%20text-anchor%3D%22middle%22%3ESucesso%3C%2Ftext%3E%3Cg%20transform%3D%22translate(150%2C%20180)%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%2230%22%20fill%3D%22%23005f73%22%2F%3E%3Cpath%20d%3D%22M%20-35%2040%20L%20-35%20150%20L%2035%20150%20L%2035%2040%20Q%2035%2030%2C%200%2030%20Q%20-35%2030%2C%20-35%2040%22%20fill%3D%22%23005f73%22%2F%3E%3Cpath%20d%3D%22M%2030%2060%20L%2090%2040%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%2210%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22380%22%20r%3D%2240%22%20fill%3D%22%2394d2bd%22%20opacity%3D%220.8%22%2F%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22400%22%20r%3D%2245%22%20fill%3D%22%230a9396%22%20opacity%3D%220.8%22%2F%3E%3Ccircle%20cx%3D%22700%22%20cy%3D%22390%22%20r%3D%2240%22%20fill%3D%22%2394d2bd%22%20opacity%3D%220.8%22%2F%3E%3Ccircle%20cx%3D%22600%22%20cy%3D%22410%22%20r%3D%2250%22%20fill%3D%22%230a9396%22%20opacity%3D%220.8%22%2F%3E%3C%2Fsvg%3E', 
                    alt: 'Apresentador contando uma história para uma plateia engajada, com uma jornada do usuário projetada ao fundo',
                    caption: 'Histórias conectam o técnico ao emocional e facilitam a compreensão do problema.'
                },

                // Storyboard
                { id: "c1-4-board-1", type: 'header', content: 'Storyboard' },
                { id: "c1-4-board-2", type: 'paragraph', content: 'Storyboard concentra-se em expressar os requisitos numa sequência de desenhos, quadro a quadro, com uma sequência de narrativa. Envolve o elemento lúdico que traz muito mais clareza e envolvimento do cliente do que simplesmente falar e escrever. Pode ser feito em forma de um esboço simples, até mesmo "rabiscado em papel".' },
                { 
                    id: "c1-4-board-img", 
                    type: 'image',
                    content: '', 
                    src: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22400%22%20viewBox%3D%220%200%20800%20400%22%3E%3Cdefs%3E%3Cstyle%3E.panel%7Bfill%3A%23ffffff%3Bstroke%3A%23334155%3Bstroke-width%3A3%3Brx%3A5%7D.sketch%7Bfill%3Anone%3Bstroke%3A%23334155%3Bstroke-width%3A3%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%7D.accent%7Bfill%3A%2394d2bd%3Bstroke%3Anone%7D.text%7Bfont-family%3A%27Comic%20Sans%20MS%27%2C%27Chalkboard%20SE%27%2Csans-serif%3Bfont-size%3A16px%3Bfill%3A%23475569%3Btext-anchor%3Amiddle%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f8fafc%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%2240%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%20fill%3D%22%231e293b%22%20text-anchor%3D%22middle%22%3EStoryboard%3A%20O%20Fluxo%20da%20Ideia%3C%2Ftext%3E%3Cg%20transform%3D%22translate(50%2C80)%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20class%3D%22panel%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2230%22%20class%3D%22sketch%22%2F%3E%3Cpath%20d%3D%22M100%20130v50m-20-30h40m-20%2030l-15%2030m15-30l15%2030%22%20class%3D%22sketch%22%2F%3E%3Cellipse%20cx%3D%22160%22%20cy%3D%2260%22%20rx%3D%2225%22%20ry%3D%2220%22%20class%3D%22accent%22%20opacity%3D%220.5%22%2F%3E%3Cpath%20d%3D%22M160%2040a25%2020%200%201%200%200%2040a25%2020%200%201%200%200-40%22%20class%3D%22sketch%22%20stroke-dasharray%3D%225%2C5%22%2F%3E%3Ctext%20x%3D%22160%22%20y%3D%2265%22%20font-size%3D%2220%22%20fill%3D%22%23334155%22%20text-anchor%3D%22middle%22%3E%3F%3C%2Ftext%3E%3Ctext%20x%3D%22100%22%20y%3D%22230%22%20class%3D%22text%22%3E1.%20Necessidade%3C%2Ftext%3E%3C%2Fg%3E%3Cpath%20d%3D%22M260%20180h30l-5-5m5%205l-5%205%22%20class%3D%22sketch%22%20stroke%3D%22%2394a3b8%22%2F%3E%3Cg%20transform%3D%22translate(300%2C80)%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20class%3D%22panel%22%2F%3E%3Crect%20x%3D%2260%22%20y%3D%2250%22%20width%3D%2280%22%20height%3D%22120%22%20rx%3D%225%22%20class%3D%22sketch%22%2F%3E%3Crect%20x%3D%2270%22%20y%3D%2260%22%20width%3D%2260%22%20height%3D%2260%22%20class%3D%22accent%22%20opacity%3D%220.3%22%2F%3E%3Cline%20x1%3D%2270%22%20y1%3D%22140%22%20x2%3D%22130%22%20y2%3D%22140%22%20class%3D%22sketch%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22160%22%20r%3D%225%22%20class%3D%22sketch%22%2F%3E%3Cpath%20d%3D%22M140%20120l20%2010l-5%2020z%22%20fill%3D%22%23334155%22%2F%3E%3Ctext%20x%3D%22100%22%20y%3D%22230%22%20class%3D%22text%22%3E2.%20Intera%C3%A7%C3%A3o%3C%2Ftext%3E%3C%2Fg%3E%3Cpath%20d%3D%22M510%20180h30l-5-5m5%205l-5%205%22%20class%3D%22sketch%22%20stroke%3D%22%2394a3b8%22%2F%3E%3Cg%20transform%3D%22translate(550%2C80)%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20class%3D%22panel%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2290%22%20r%3D%2230%22%20class%3D%22sketch%22%2F%3E%3Cpath%20d%3D%22M90%2085a5%205%200%200%201%205%205m10-5a5%205%200%200%201%205%205m-15%2015q10%2010%2020%200%22%20class%3D%22sketch%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M100%20120v50m-20-40l20-10l20%2010m-20%2040l-15%2030m15-30l15%2030%22%20class%3D%22sketch%22%2F%3E%3Cpath%20d%3D%22M150%2050l5%2015h15l-10%2010l5%2015l-15-10l-15%2010l5-15l-10-10h15z%22%20class%3D%22accent%22%2F%3E%3Ctext%20x%3D%22100%22%20y%3D%22230%22%20class%3D%22text%22%3E3.%20Valor%20Entregue%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E', 
                    alt: 'Exemplo de Storyboard desenhado à mão mostrando telas de um app',
                    caption: 'Um esboço simples desenhado à mão pode valer mais que mil palavras de especificação.'
                },

                // Brainstorming
                { id: "c1-4-brain-1", type: 'header', content: 'Brainstorming com Mapas Mentais' },
                { id: "c1-4-brain-2", type: 'paragraph', content: 'Ao conduzir uma "chuva de ideias", torna-se muito mais eficiente o analista já esboçar visualmente essas ideias diante dos participantes, organizando dentro de tópicos. Isso pode ser feito no estilo árvore, ramificando tópicos e subtópicos, ou por meio de diagramas de Venn.' },
                { 
                    id: "c1-4-brain-img", 
                    type: 'image',
                    content: '', 
                    src: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22shadow%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%222%22%20dy%3D%222%22%20stdDeviation%3D%223%22%20flood-color%3D%22%23000000%22%20flood-opacity%3D%220.15%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22%23f8f9fa%22%20rx%3D%2215%22%2F%3E%3Cpath%20d%3D%22M400%20250%20Q%20300%20250%20200%20150%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%224%22%2F%3E%3Cpath%20d%3D%22M400%20250%20Q%20500%20250%20600%20150%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%224%22%2F%3E%3Cpath%20d%3D%22M400%20250%20Q%20300%20250%20200%20350%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%224%22%2F%3E%3Cpath%20d%3D%22M400%20250%20Q%20500%20250%20600%20350%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%224%22%2F%3E%3Cpath%20d%3D%22M200%20150%20L%20120%20100%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cpath%20d%3D%22M200%20150%20L%20200%2080%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cpath%20d%3D%22M200%20150%20L%20280%20100%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cpath%20d%3D%22M600%20150%20L%20520%20100%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cpath%20d%3D%22M600%20150%20L%20680%20100%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cpath%20d%3D%22M200%20350%20L%20120%20400%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cpath%20d%3D%22M200%20350%20L%20280%20400%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cpath%20d%3D%22M600%20350%20L%20520%20400%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cpath%20d%3D%22M600%20350%20L%20600%20420%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cpath%20d%3D%22M600%20350%20L%20680%20400%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%2F%3E%3Cellipse%20cx%3D%22400%22%20cy%3D%22250%22%20rx%3D%2290%22%20ry%3D%2260%22%20fill%3D%22%23005f73%22%20filter%3D%22url(%23shadow)%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22245%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22bold%22%20font-size%3D%2218%22%20text-anchor%3D%22middle%22%3EAPP%20DE%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22265%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22bold%22%20font-size%3D%2218%22%20text-anchor%3D%22middle%22%3EDELIVERY%3C%2Ftext%3E%3Crect%20x%3D%22140%22%20y%3D%22125%22%20width%3D%22120%22%20height%3D%2250%22%20rx%3D%2210%22%20fill%3D%22%230a9396%22%20filter%3D%22url(%23shadow)%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22155%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%3EFuncionalidades%3C%2Ftext%3E%3Crect%20x%3D%22540%22%20y%3D%22125%22%20width%3D%22120%22%20height%3D%2250%22%20rx%3D%2210%22%20fill%3D%22%230a9396%22%20filter%3D%22url(%23shadow)%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22155%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%3EUsu%C3%A1rios%3C%2Ftext%3E%3Crect%20x%3D%22140%22%20y%3D%22325%22%20width%3D%22120%22%20height%3D%2250%22%20rx%3D%2210%22%20fill%3D%22%230a9396%22%20filter%3D%22url(%23shadow)%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22355%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%3ETecnologia%3C%2Ftext%3E%3Crect%20x%3D%22540%22%20y%3D%22325%22%20width%3D%22120%22%20height%3D%2250%22%20rx%3D%2210%22%20fill%3D%22%230a9396%22%20filter%3D%22url(%23shadow)%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22355%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%3ERegras%3C%2Ftext%3E%3Cg%3E%3Crect%20x%3D%2280%22%20y%3D%2280%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22120%22%20y%3D%2298%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3ECat%C3%A1logo%3C%2Ftext%3E%3Crect%20x%3D%22160%22%20y%3D%2250%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%2268%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3ECarrinho%3C%2Ftext%3E%3Crect%20x%3D%22240%22%20y%3D%2280%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22280%22%20y%3D%2298%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3EPagamento%3C%2Ftext%3E%3Crect%20x%3D%22480%22%20y%3D%2280%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22520%22%20y%3D%2298%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3ECliente%3C%2Ftext%3E%3Crect%20x%3D%22640%22%20y%3D%2280%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22680%22%20y%3D%2298%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3ELoja%3C%2Ftext%3E%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22120%22%20y%3D%22408%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3EReact%3C%2Ftext%3E%3Crect%20x%3D%22240%22%20y%3D%22390%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22280%22%20y%3D%22408%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3ENode.js%3C%2Ftext%3E%3Crect%20x%3D%22480%22%20y%3D%22390%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22520%22%20y%3D%22408%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3EFrete%3C%2Ftext%3E%3Crect%20x%3D%22560%22%20y%3D%22420%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22438%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3ECupons%3C%2Ftext%3E%3Crect%20x%3D%22640%22%20y%3D%22390%22%20width%3D%2280%22%20height%3D%2228%22%20rx%3D%2214%22%20fill%3D%22%23e9d8a6%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%221%22%2F%3E%3Ctext%20x%3D%22680%22%20y%3D%22408%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3EEstoque%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E', 
                    alt: 'Exemplo de Mapa Mental ramificado mostrando Ideia Central conectada a Funcionalidades, Usuários, Tecnologia e Regras',
                    caption: 'Visualizar as ideias em tempo real ajuda a organizar o pensamento coletivo.'
                },

                // Abstração Matricial
                { id: "c1-4-matrix-1", type: 'header', content: 'Abstração Matricial' },
                { id: "c1-4-matrix-2", type: 'paragraph', content: 'Algo simples que pode ajudar significativamente o analista é "planilhar as ideias". Isso auxilia na decomposição de estruturas abstratas, correlação de ideias e categorização dos elementos que compõem um negócio.' },
                { 
                    id: "c1-4-matrix-img", 
                    type: 'image',
                    content: '', 
                    src: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22400%22%20viewBox%3D%220%200%20800%20400%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f8f9fa%22%20rx%3D%2215%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%2240%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%20fill%3D%22%23001219%22%20text-anchor%3D%22middle%22%3EMatriz%20de%20Permiss%C3%B5es%20(CRUD)%3C%2Ftext%3E%3Cg%20transform%3D%22translate(50%2C%2070)%22%3E%3Cpath%20d%3D%22M0%200%20H700%20V50%20H0%20Z%22%20fill%3D%22%23005f73%22%2F%3E%3Ctext%20x%3D%2220%22%20y%3D%2232%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%3EPerfil%20%2F%20Entidade%3C%2Ftext%3E%3Ctext%20x%3D%22200%22%20y%3D%2232%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%3EClientes%3C%2Ftext%3E%3Ctext%20x%3D%22350%22%20y%3D%2232%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%3EProdutos%3C%2Ftext%3E%3Ctext%20x%3D%22500%22%20y%3D%2232%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%3EVendas%3C%2Ftext%3E%3Ctext%20x%3D%22650%22%20y%3D%2232%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%3ERelat%C3%B3rios%3C%2Ftext%3E%3Crect%20y%3D%2250%22%20width%3D%22700%22%20height%3D%2260%22%20fill%3D%22%23ffffff%22%2F%3E%3Ctext%20x%3D%2220%22%20y%3D%2285%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%3EAdministrador%3C%2Ftext%3E%3Cg%20transform%3D%22translate(160%2C%2065)%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%232e7d32%22%2F%3E%3Ctext%20x%3D%2210%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EC%3C%2Ftext%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3Crect%20x%3D%2250%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23ef6c00%22%2F%3E%3Ctext%20x%3D%2260%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EU%3C%2Ftext%3E%3Crect%20x%3D%2275%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23c62828%22%2F%3E%3Ctext%20x%3D%2285%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ED%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(310%2C%2065)%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%232e7d32%22%2F%3E%3Ctext%20x%3D%2210%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EC%3C%2Ftext%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3Crect%20x%3D%2250%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23ef6c00%22%2F%3E%3Ctext%20x%3D%2260%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EU%3C%2Ftext%3E%3Crect%20x%3D%2275%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23c62828%22%2F%3E%3Ctext%20x%3D%2285%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ED%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(460%2C%2065)%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%232e7d32%22%2F%3E%3Ctext%20x%3D%2210%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EC%3C%2Ftext%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3Crect%20x%3D%2250%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23ef6c00%22%2F%3E%3Ctext%20x%3D%2260%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EU%3C%2Ftext%3E%3Crect%20x%3D%2275%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23c62828%22%2F%3E%3Ctext%20x%3D%2285%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ED%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(610%2C%2065)%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%232e7d32%22%2F%3E%3Ctext%20x%3D%2210%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EC%3C%2Ftext%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3Crect%20x%3D%2250%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23ef6c00%22%2F%3E%3Ctext%20x%3D%2260%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EU%3C%2Ftext%3E%3Crect%20x%3D%2275%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23c62828%22%2F%3E%3Ctext%20x%3D%2285%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ED%3C%2Ftext%3E%3C%2Fg%3E%3Crect%20y%3D%22110%22%20width%3D%22700%22%20height%3D%2260%22%20fill%3D%22%23e9d8a6%22%20fill-opacity%3D%220.3%22%2F%3E%3Ctext%20x%3D%2220%22%20y%3D%22145%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%3EGerente%3C%2Ftext%3E%3Cg%20transform%3D%22translate(160%2C%20125)%22%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(310%2C%20125)%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%232e7d32%22%2F%3E%3Ctext%20x%3D%2210%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EC%3C%2Ftext%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3Crect%20x%3D%2250%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23ef6c00%22%2F%3E%3Ctext%20x%3D%2260%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EU%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(460%2C%20125)%22%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(610%2C%20125)%22%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3C%2Fg%3E%3Crect%20y%3D%22170%22%20width%3D%22700%22%20height%3D%2260%22%20fill%3D%22%23ffffff%22%2F%3E%3Ctext%20x%3D%2220%22%20y%3D%22205%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%3EVendedor%3C%2Ftext%3E%3Cg%20transform%3D%22translate(160%2C%20185)%22%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(310%2C%20185)%22%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(460%2C%20185)%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%232e7d32%22%2F%3E%3Ctext%20x%3D%2210%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3EC%3C%2Ftext%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(610%2C%20185)%22%3E%3Ctext%20x%3D%2245%22%20y%3D%2215%22%20fill%3D%22%23aaa%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%3E-%3C%2Ftext%3E%3C%2Fg%3E%3Crect%20y%3D%22230%22%20width%3D%22700%22%20height%3D%2260%22%20fill%3D%22%23e9d8a6%22%20fill-opacity%3D%220.3%22%2F%3E%3Ctext%20x%3D%2220%22%20y%3D%22265%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%3EVisitante%3C%2Ftext%3E%3Cg%20transform%3D%22translate(160%2C%20245)%22%3E%3Ctext%20x%3D%2245%22%20y%3D%2215%22%20fill%3D%22%23aaa%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%3E-%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(310%2C%20245)%22%3E%3Crect%20x%3D%2225%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%2235%22%20y%3D%2215%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3ER%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(460%2C%20245)%22%3E%3Ctext%20x%3D%2245%22%20y%3D%2215%22%20fill%3D%22%23aaa%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%3E-%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(610%2C%20245)%22%3E%3Ctext%20x%3D%2245%22%20y%3D%2215%22%20fill%3D%22%23aaa%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%3E-%3C%2Ftext%3E%3C%2Fg%3E%3Cpath%20d%3D%22M0%2050%20V290%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%221%22%2F%3E%3Cpath%20d%3D%22M150%2050%20V290%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%221%22%2F%3E%3Cpath%20d%3D%22M300%2050%20V290%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%221%22%2F%3E%3Cpath%20d%3D%22M450%2050%20V290%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%221%22%2F%3E%3Cpath%20d%3D%22M600%2050%20V290%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%221%22%2F%3E%3Cpath%20d%3D%22M700%2050%20V290%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%221%22%2F%3E%3Cpath%20d%3D%22M0%20290%20H700%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%221%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(220%2C%20360)%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%232e7d32%22%2F%3E%3Ctext%20x%3D%2230%22%20y%3D%2215%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-size%3D%2212%22%3ECreate%3C%2Ftext%3E%3Crect%20x%3D%2290%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%231565c0%22%2F%3E%3Ctext%20x%3D%22120%22%20y%3D%2215%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-size%3D%2212%22%3ERead%3C%2Ftext%3E%3Crect%20x%3D%22180%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23ef6c00%22%2F%3E%3Ctext%20x%3D%22210%22%20y%3D%2215%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-size%3D%2212%22%3EUpdate%3C%2Ftext%3E%3Crect%20x%3D%22280%22%20width%3D%2220%22%20height%3D%2220%22%20rx%3D%224%22%20fill%3D%22%23c62828%22%2F%3E%3Ctext%20x%3D%22310%22%20y%3D%2215%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-size%3D%2212%22%3EDelete%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E', 
                    alt: 'Tabela matricial mostrando permissões de acesso (CRUD)',
                    caption: 'Matrizes ajudam a visualizar regras complexas de forma estruturada.'
                },

                // Visão Sistêmica
                { id: "c1-4-sys-1", type: 'header', content: 'Desenvolvendo a Visão Sistêmica' },
                { id: "c1-4-sys-2", type: 'list', content: [
                    '**Identificação de Partes Interessadas (Stakeholders):** Mapear todos os envolvidos no projeto.',
                    '**Sequenciamento de trâmites:** Identificar o que vai/volta para quem e em quais momentos (ex: status de tarefas).',
                    '**Análise de Impacto:** Avaliar como uma mudança afeta outras partes do sistema.',
                    '**Pensamento de "Ponta a Ponta":** Considerar o ciclo de vida completo de um processo.',
                    '**Visão de Arquitetura do Software:** Compreender a estrutura geral e como os componentes se interligam.'
                ]},
                {
                     id: "c1-4-sys-img",
                     type: 'image',
                     content: '',
                     src: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22400%22%20viewBox%3D%220%200%20800%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22bgGradSys%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%23f1f5f9%3Bstop-opacity%3A1%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%23e2e8f0%3Bstop-opacity%3A1%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22shadowSys%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%223%22%20dy%3D%223%22%20stdDeviation%3D%224%22%20flood-color%3D%22%23000000%22%20flood-opacity%3D%220.2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22url(%23bgGradSys)%22%20rx%3D%2215%22%2F%3E%3Cpath%20d%3D%22M400%20200%20L200%20100%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%223%22%20stroke-dasharray%3D%226%2C4%22%2F%3E%3Cpath%20d%3D%22M400%20200%20L600%20100%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%223%22%20stroke-dasharray%3D%226%2C4%22%2F%3E%3Cpath%20d%3D%22M400%20200%20L600%20300%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%223%22%20stroke-dasharray%3D%226%2C4%22%2F%3E%3Cpath%20d%3D%22M400%20200%20L200%20300%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%223%22%20stroke-dasharray%3D%226%2C4%22%2F%3E%3Cpath%20d%3D%22M200%20100%20Q%20400%2030%20600%20100%22%20fill%3D%22none%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%222%22%20opacity%3D%220.5%22%2F%3E%3Cpath%20d%3D%22M600%20100%20Q%20700%20200%20600%20300%22%20fill%3D%22none%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%222%22%20opacity%3D%220.5%22%2F%3E%3Cpath%20d%3D%22M600%20300%20Q%20400%20370%20200%20300%22%20fill%3D%22none%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%222%22%20opacity%3D%220.5%22%2F%3E%3Cpath%20d%3D%22M200%20300%20Q%20100%20200%20200%20100%22%20fill%3D%22none%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%222%22%20opacity%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22200%22%20r%3D%2260%22%20fill%3D%22%23005f73%22%20filter%3D%22url(%23shadowSys)%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22200%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2394d2bd%22%20stroke-width%3D%222%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22200%22%20r%3D%2220%22%20fill%3D%22%23ffffff%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22200%22%20r%3D%2210%22%20fill%3D%22%23005f73%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22285%22%20fill%3D%22%23005f73%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22bold%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%3EVis%C3%A3o%20Sist%C3%AAmica%3C%2Ftext%3E%3Cg%20transform%3D%22translate(200%2C%20100)%22%3E%3Ccircle%20r%3D%2240%22%20fill%3D%22%230a9396%22%20filter%3D%22url(%23shadowSys)%22%2F%3E%3Cpath%20d%3D%22M-10%20-5%20a%2010%2010%200%201%201%2020%200%20a%2010%2010%200%201%201%20-20%200%20M-20%2015%20q%2020%20-10%2040%200%20v%2010%20h-40%20z%22%20fill%3D%22white%22%20transform%3D%22scale(0.7)%22%2F%3E%3Ctext%20y%3D%2260%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%3EPessoas%3C%2Ftext%3E%3Ctext%20y%3D%2275%22%20fill%3D%22%23555%22%20font-family%3D%22Arial%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3E(Stakeholders)%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(600%2C%20100)%22%3E%3Ccircle%20r%3D%2240%22%20fill%3D%22%230a9396%22%20filter%3D%22url(%23shadowSys)%22%2F%3E%3Cpath%20d%3D%22M-15%20-10%20h30%20v20%20h-30%20z%20M-15%2015%20h30%20M-10%20-5%20h5%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%3Ctext%20y%3D%2260%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%3ETecnologia%3C%2Ftext%3E%3Ctext%20y%3D%2275%22%20fill%3D%22%23555%22%20font-family%3D%22Arial%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3E(Arquitetura)%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(600%2C%20300)%22%3E%3Ccircle%20r%3D%2240%22%20fill%3D%22%230a9396%22%20filter%3D%22url(%23shadowSys)%22%2F%3E%3Cpath%20d%3D%22M-15%200%20h20%20l5%205%20l-5%205%20h-20%20z%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M0%20-15%20h20%20l5%205%20l-5%205%20h-20%20z%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3Ctext%20y%3D%2260%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%3EProcessos%3C%2Ftext%3E%3Ctext%20y%3D%2275%22%20fill%3D%22%23555%22%20font-family%3D%22Arial%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3E(Fluxo)%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(200%2C%20300)%22%3E%3Ccircle%20r%3D%2240%22%20fill%3D%22%230a9396%22%20filter%3D%22url(%23shadowSys)%22%2F%3E%3Cpath%20d%3D%22M-15%2010%20v-20%20M-5%2010%20v-10%20M5%2010%20v-25%20M15%2010%20v-15%20M-15%2010%20v-20%20M-5%2010%20v-10%20M5%2010%20v-25%20M15%2010%20v-15%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20y%3D%2260%22%20fill%3D%22%23001219%22%20font-family%3D%22Arial%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%3ENeg%C3%B3cio%3C%2Ftext%3E%3Ctext%20y%3D%2275%22%20fill%3D%22%23555%22%20font-family%3D%22Arial%22%20font-size%3D%2211%22%20text-anchor%3D%22middle%22%3E(Impacto)%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                     alt: 'Diagrama de Visão Sistêmica conectando Pessoas, Processos, Tecnologia e Negócios',
                     caption: 'A visão sistêmica conecta todos os pontos soltos da análise.'
                }
            ]
        },
        {
          id: "sec-1-8",
          title: "Conclusão do Módulo",
          objective: "Revisar os aprendizados do módulo e refletir sobre a aplicação prática das técnicas de abstração.",
          content: [
              { id: "c1-8-1", type: 'header', content: 'Conclusão do Módulo' },
              { id: "c1-8-2", type: 'checklist', title: 'Checklist - Posso dizer que avancei se...', content: [
                  { id: 'cl-1-8-1', text: 'Sei explicar o que é abstração em análise de requisitos.' },
                  { id: 'cl-1-8-2', text: 'Consigo reconhecer e explicar scope creep e gold plating.' },
                  { id: 'cl-1-8-3', text: 'Estou mais atento a vieses que podem distorcer minha análise.' },
                  { id: 'cl-1-8-4', text: 'Já usei (ao menos em exercícios) técnicas como: perguntas indutivas, 5 porquês, storytelling.' },
                  { id: 'cl-1-8-5', text: 'Entendo o papel de critérios de aceitação e BDD na validação.' }
              ]},
              {
                  id: "c1-8-3", type: 'activity', title: 'Reflexão final do módulo',
                  content: [
                      { id: 'act-ref-1-q1', question: '1. O que mudou na forma como você enxerga o papel do Analista de Requisitos depois deste módulo?', context: 'Avalie se a resposta do aluno menciona uma mudança de perspectiva, como focar mais no "porquê" do que no "como".' },
                      { id: 'act-ref-1-q2', question: '2. Que técnica de abstração você pretende usar primeiro em um projeto real?', context: 'O aluno pode citar qualquer técnica do módulo (5 porquês, storytelling, etc.). Avalie se a escolha faz sentido.' },
                      { id: 'act-ref-1-q3', question: '3. Qual a diferença prática entre Scope Creep e Gold Plating?', context: 'Scope Creep: aumento não controlado do escopo (novas features). Gold Plating: perfeccionismo desnecessário em features existentes (exageros).' }
                  ]
              }
          ]
        }
      ]
    },
    {
        id: "module-2",
        title: "Técnicas de Elicitação de Requisitos – Protótipos",
        description: "Explore o uso de protótipos como uma ferramenta poderosa para comunicação, descoberta e validação de requisitos.",
        sections: [
            {
                id: "sec-2-1",
                title: "Introdução à Elicitação com Protótipos",
                objective: "Entender o que é elicitação de requisitos e como os protótipos se encaixam nesse processo.",
                content: [
                    { id: "c2-1-1", type: 'header', content: 'Introdução' },
                    { id: "c2-1-2", type: 'paragraph', content: 'A elicitação de requisitos é o momento de "trazer à tona" o que está oculto. Protótipos são excelentes para isso porque transformam ideias abstratas em algo tangível.' },
                    { id: "c2-1-intro-extra", type: 'paragraph', content: 'Muitas vezes, o cliente diz "eu quero um cadastro", mas na cabeça dele, ele imagina um wizard de 5 passos, enquanto o analista imagina um formulário único gigante. O texto aceita tudo, mas a imagem revela a verdade. O protótipo elimina essa lacuna de entendimento (O que eu digo vs. O que eu imagino) imediatamente.' },
                    { 
                        id: "c2-1-img-proto", 
                        type: 'image', 
                        content: '', 
                        src: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22400%22%20viewBox%3D%220%200%20800%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22screenGrad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23f8f9fa%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23e9ecef%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22dropShadow%22%20x%3D%22-20%25%22%20y%3D%22-20%25%22%20width%3D%22140%25%22%20height%3D%22140%25%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%224%22%20stdDeviation%3D%226%22%20flood-color%3D%22%23000000%22%20flood-opacity%3D%220.15%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23ffffff%22%2F%3E%3Cpath%20d%3D%22M0%200h800v400H0z%22%20fill%3D%22none%22%2F%3E%3Cg%20transform%3D%22translate(40%2C%2060)%22%3E%3Crect%20width%3D%22400%22%20height%3D%22250%22%20rx%3D%228%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%230a9396%22%20stroke-width%3D%222%22%20filter%3D%22url(%23dropShadow)%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22400%22%20height%3D%2230%22%20rx%3D%228%22%20fill%3D%22%23f1f5f9%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2220%22%20width%3D%22400%22%20height%3D%2210%22%20fill%3D%22%23f1f5f9%22%2F%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2215%22%20r%3D%225%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2215%22%20r%3D%225%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2215%22%20r%3D%225%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.5%22%2F%3E%3Crect%20x%3D%2220%22%20y%3D%2250%22%20width%3D%2280%22%20height%3D%22180%22%20rx%3D%224%22%20fill%3D%22%23e2e8f0%22%2F%3E%3Crect%20x%3D%22120%22%20y%3D%2250%22%20width%3D%22260%22%20height%3D%22100%22%20rx%3D%224%22%20fill%3D%22%23f8fafc%22%20stroke%3D%22%23cbd5e1%22%20stroke-dasharray%3D%224%22%2F%3E%3Crect%20x%3D%22120%22%20y%3D%22160%22%20width%3D%22120%22%20height%3D%2270%22%20rx%3D%224%22%20fill%3D%22%23005f73%22%20opacity%3D%220.1%22%2F%3E%3Crect%20x%3D%22260%22%20y%3D%22160%22%20width%3D%22120%22%20height%3D%2270%22%20rx%3D%224%22%20fill%3D%22%23005f73%22%20opacity%3D%220.1%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22110%22%20text-anchor%3D%22middle%22%20fill%3D%22%2394a3b8%22%20font-family%3D%22Arial%22%20font-size%3D%2214%22%3ESistema%20Web%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(550%2C%2040)%22%3E%3Crect%20width%3D%22140%22%20height%3D%22280%22%20rx%3D%2220%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%224%22%20filter%3D%22url(%23dropShadow)%22%2F%3E%3Cpath%20d%3D%22M400%200h60v20a10%2010%200%200%201-10%2010H50a10%2010%200%200%201-10-10V0z%22%20fill%3D%22%23005f73%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%2250%22%20width%3D%22110%22%20height%3D%2240%22%20rx%3D%228%22%20fill%3D%22%230a9396%22%20opacity%3D%220.2%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%22100%22%20width%3D%22110%22%20height%3D%2260%22%20rx%3D%228%22%20fill%3D%22%23f1f5f9%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%22170%22%20width%3D%22110%22%20height%3D%2260%22%20rx%3D%228%22%20fill%3D%22%23f1f5f9%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22250%22%20r%3D%2220%22%20fill%3D%22%230a9396%22%2F%3E%3Ctext%20x%3D%2270%22%20y%3D%22135%22%20text-anchor%3D%22middle%22%20fill%3D%22%2394a3b8%22%20font-family%3D%22Arial%22%20font-size%3D%2210%22%3EApp%20Mobile%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(420%2C%20150)%22%3E%3Cpath%20d%3D%22M0%200l10-5%2010%2020-15%205z%22%20fill%3D%22%23fbbf24%22%20transform%3D%22translate(0%2010)%20rotate(-15)%22%2F%3E%3Cpath%20d%3D%22M20%2020l5-10%2015%205-5%2015z%22%20fill%3D%22%230a9396%22%20transform%3D%22translate(30%200)%20rotate(30)%22%2F%3E%3Cpath%20d%3D%22M10%2040l20-5%205%2020-20%205z%22%20fill%3D%22%23ef4444%22%20transform%3D%22translate(10%2020)%20rotate(10)%22%2F%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%2225%22%20fill%3D%22white%22%20filter%3D%22url(%23dropShadow)%22%2F%3E%3Cpath%20d%3D%22M30%2015l4%2010h11l-9%207%203%2011-9-6-9%206%203-11-9-7h11z%22%20fill%3D%22%23fbbf24%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%22150%22%20y%3D%22330%22%20width%3D%22500%22%20height%3D%2250%22%20rx%3D%2225%22%20fill%3D%22%23001219%22%20filter%3D%22url(%23dropShadow)%22%2F%3E%3Ctext%20x%3D%22180%22%20y%3D%22360%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%22%20font-size%3D%2214%22%20opacity%3D%220.8%22%3ECrie%20uma%20dashboard%20de%20vendas%20e%20um%20app%20para%20vendedores...%3C%2Ftext%3E%3Ccircle%20cx%3D%22620%22%20cy%3D%22355%22%20r%3D%2215%22%20fill%3D%22%230a9396%22%2F%3E%3Cpath%20d%3D%22M620%20347v16m-8-8h16%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M400%20330V310%22%20stroke%3D%22%23001219%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%224%22%20opacity%3D%220.3%22%2F%3E%3C/svg%3E', 
                        alt: 'Ilustração de prototipagem via IA mostrando sistema web e app sendo gerados a partir de texto', 
                        caption: 'Ferramentas modernas (como Lovable) permitem transformar requisitos em telas funcionais instantaneamente.' 
                    },
                    { id: "c2-1-concept-visual", type: 'concept', title: 'Elicitação Visual', content: 'Diferente da elicitação tradicional (entrevistas e documentos), a **elicitação visual** coloca algo concreto na mesa desde o primeiro dia. Isso muda a dinâmica da reunião de "O que você quer?" para "Isso aqui resolve o seu problema?". É mais fácil criticar um desenho do que uma ideia abstrata.' },
                    { id: "c2-1-3", type: 'note', title: 'Tipos de Fidelidade', content: '**Baixa Fidelidade (Rascunho):** Papel e caneta, wireframes simples. Foco no conceito e fluxo.\n**Média Fidelidade:** Estrutura mais definida, textos reais, sem design final.\n**Alta Fidelidade:** Aparência muito próxima do produto final, com cores e interações.' },
                    { id: "c2-1-4", type: 'list', content: [
                        '**Baixa Fidelidade:** Bom para brainstorming rápido e descartável.',
                        '**Média Fidelidade:** Bom para validar fluxos e arquitetura de informação.',
                        '**Alta Fidelidade:** Bom para testes de usabilidade e venda visual.'
                    ]},
                    { 
                        id: "c2-1-img-hifi", 
                        type: 'image', 
                        content: '', 
                        src: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22400%22%20viewBox%3D%220%200%20800%20400%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f8f9fa%22%20rx%3D%2215%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%2240%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%20fill%3D%22%23005f73%22%20text-anchor%3D%22middle%22%3EProt%C3%B3tipo%20de%20Alta%20Fidelidade%3C%2Ftext%3E%3Cg%20transform%3D%22translate(280%2C%2060)%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22240%22%20height%3D%22480%22%20rx%3D%2230%22%20fill%3D%22%231e293b%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2210%22%20width%3D%22220%22%20height%3D%22460%22%20rx%3D%2220%22%20fill%3D%22%23ffffff%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2230%22%20width%3D%22220%22%20height%3D%2260%22%20fill%3D%22%23ffffff%22%2F%3E%3Ccircle%20cx%3D%2235%22%20cy%3D%2260%22%20r%3D%2215%22%20fill%3D%22%23e2e8f0%22%2F%3E%3Ctext%20x%3D%2260%22%20y%3D%2265%22%20font-family%3D%22Arial%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20fill%3D%22%23334155%22%3EOl%C3%A1%2C%20Ana%3C%2Ftext%3E%3Ccircle%20cx%3D%22205%22%20cy%3D%2260%22%20r%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22%23334155%22%20stroke-width%3D%222%22%2F%3E%3Crect%20x%3D%2225%22%20y%3D%22100%22%20width%3D%22190%22%20height%3D%22120%22%20rx%3D%2210%22%20fill%3D%22%230a9396%22%2F%3E%3Ctext%20x%3D%2240%22%20y%3D%22130%22%20font-family%3D%22Arial%22%20font-weight%3D%22bold%22%20font-size%3D%2216%22%20fill%3D%22%23ffffff%22%3ENovidades%3C%2Ftext%3E%3Ctext%20x%3D%2240%22%20y%3D%22150%22%20font-family%3D%22Arial%22%20font-size%3D%2210%22%20fill%3D%22%23ffffff%22%3EConfira%20os%20novos%20recursos.%3C%2Ftext%3E%3Crect%20x%3D%2240%22%20y%3D%22170%22%20width%3D%2280%22%20height%3D%2230%22%20rx%3D%2215%22%20fill%3D%22%23ffffff%22%2F%3E%3Ctext%20x%3D%2280%22%20y%3D%22190%22%20font-family%3D%22Arial%22%20font-size%3D%2210%22%20fill%3D%22%230a9396%22%20text-anchor%3D%22middle%22%3EVer%20mais%3C%2Ftext%3E%3Ctext%20x%3D%2225%22%20y%3D%22250%22%20font-family%3D%22Arial%22%20font-weight%3D%22bold%22%20font-size%3D%2214%22%20fill%3D%22%23334155%22%3EPopulares%3C%2Ftext%3E%3Crect%20x%3D%2225%22%20y%3D%22265%22%20width%3D%22190%22%20height%3D%2260%22%20rx%3D%228%22%20fill%3D%22%23f1f5f9%22%2F%3E%3Crect%20x%3D%2235%22%20y%3D%22275%22%20width%3D%2240%22%20height%3D%2240%22%20rx%3D%225%22%20fill%3D%22%2394d2bd%22%2F%3E%3Ctext%20x%3D%2285%22%20y%3D%22290%22%20font-family%3D%22Arial%22%20font-weight%3D%22bold%22%20font-size%3D%2212%22%20fill%3D%22%23334155%22%3EProjeto%20Alpha%3C%2Ftext%3E%3Ctext%20x%3D%2285%22%20y%3D%22305%22%20font-family%3D%22Arial%22%20font-size%3D%2210%22%20fill%3D%22%2364748b%22%3EEm%20andamento%3C%2Ftext%3E%3Crect%20x%3D%2225%22%20y%3D%22335%22%20width%3D%22190%22%20height%3D%2260%22%20rx%3D%228%22%20fill%3D%22%23f1f5f9%22%2F%3E%3Crect%20x%3D%2235%22%20y%3D%22345%22%20width%3D%2240%22%20height%3D%2240%22%20rx%3D%225%22%20fill%3D%22%23e9d8a6%22%2F%3E%3Ctext%20x%3D%2285%22%20y%3D%22360%22%20font-family%3D%22Arial%22%20font-weight%3D%22bold%22%20font-size%3D%2212%22%20fill%3D%22%23334155%22%3ERelat%C3%B3rio%20Q3%3C%2Ftext%3E%3Ctext%20x%3D%2285%22%20y%3D%22375%22%20font-family%3D%22Arial%22%20font-size%3D%2210%22%20fill%3D%22%2364748b%22%3EFinalizado%3C%2Ftext%3E%3Crect%20x%3D%2210%22%20y%3D%22410%22%20width%3D%22220%22%20height%3D%2260%22%20rx%3D%220%22%20fill%3D%22%23ffffff%22%2F%3E%3Cpath%20d%3D%22M%2010%20410%20L%20230%20410%22%20stroke%3D%22%23e2e8f0%22%2F%3E%3Ccircle%20cx%3D%2265%22%20cy%3D%22440%22%20r%3D%225%22%20fill%3D%22%23005f73%22%2F%3E%3Ccircle%20cx%3D%22120%22%20cy%3D%22440%22%20r%3D%225%22%20fill%3D%22%23cbd5e1%22%2F%3E%3Ccircle%20cx%3D%22175%22%20cy%3D%22440%22%20r%3D%225%22%20fill%3D%22%23cbd5e1%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%22550%22%20y%3D%22150%22%20font-family%3D%22Arial%22%20font-size%3D%2214%22%20fill%3D%22%23005f73%22%3EIdentidade%20Visual%20Definida%3C%2Ftext%3E%3Cpath%20d%3D%22M%20540%20150%20L%20480%20150%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22550%22%20y%3D%22290%22%20font-family%3D%22Arial%22%20font-size%3D%2214%22%20fill%3D%22%23005f73%22%3EConte%C3%BAdo%20Real%3C%2Ftext%3E%3Cpath%20d%3D%22M%20540%20290%20L%20480%20290%22%20stroke%3D%22%23005f73%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E', 
                        alt: 'Exemplo de Protótipo de Alta Fidelidade', 
                        caption: 'Protótipos de alta fidelidade simulam o produto final com cores, imagens e interações reais.' 
                    },
                    {
                        id: "c2-1-5", type: 'activity', title: 'Exercício: Escolhendo a Fidelidade',
                        content: [
                            { id: 'act2-1-q1', question: 'Você está em uma reunião inicial com o cliente para definir a ideia geral de um novo app. Que tipo de protótipo você usaria e por quê?', context: 'Resposta esperada: Baixa fidelidade (papel, quadro branco). É rápido, barato e foca na ideia, não no design.' },
                            { id: 'act2-1-q2', question: 'O time de desenvolvimento precisa saber exatamente onde colocar os botões e quais textos usar, mas ainda não temos a identidade visual final. Qual fidelidade usar?', context: 'Resposta esperada: Média fidelidade (Wireframe detalhado). Foca na estrutura e conteúdo.' },
                            { id: 'act2-1-q3', question: 'Precisamos apresentar o projeto para investidores e convencê-los de que o app é moderno e bonito. Qual fidelidade usar?', context: 'Resposta esperada: Alta fidelidade. O impacto visual é importante para a venda.' }
                        ]
                    }
                ]
            },
            {
                id: "sec-2-9",
                title: "Fechamento do Módulo",
                objective: "Consolidar o aprendizado sobre o uso de protótipos na elicitação de requisitos.",
                content: [
                    { id: "c2-9-1", type: 'header', content: 'Fechamento - Protótipos como aliados' },
                    { id: "c2-9-2", type: 'checklist', title: 'Checklist de Aprendizado', content: [
                        { id: 'cl-2-9-1', text: 'Entendo que protótipo não é especificação, mas ajuda a criar uma.' },
                        { id: 'cl-2-9-2', text: 'Sei explicar as vantagens de falhar cedo com protótipo.' },
                        { id: 'cl-2-9-3', text: 'Diferencio protótipos de baixa, média e alta fidelidade.' },
                        { id: 'cl-2-9-4', text: 'Sei que o objetivo do protótipo na elicitação é descobrir requisitos, não apenas desenhar telas.' }
                    ]},
                    {
                        id: "c2-9-3", type: 'activity', title: 'Reflexão final',
                        content: [
                            { id: 'act-ref-2-q1', question: '1. Como um protótipo pode ajudar a descobrir um "requisito não dito" pelo cliente?', context: 'Ao ver a tela, o cliente pode lembrar de exceções (ex: "Ah, e se o usuário não tiver CPF?"). O visual estimula a memória.' },
                            { id: 'act-ref-2-q2', question: '2. Qual o perigo de apresentar um protótipo de alta fidelidade muito cedo no projeto?', context: 'O cliente pode focar em detalhes cosméticos (cor do botão) em vez do fluxo, ou achar que o sistema "já está quase pronto".' },
                            { id: 'act-ref-2-q3', question: '3. Se o cliente aprovar o protótipo, a documentação de requisitos ainda é necessária? Por quê?', context: 'Sim. O protótipo mostra a "casca" (interface), mas não mostra regras de negócio complexas, integrações, performance e casos de erro de backend.' }
                        ]
                    }
                ]
            }
        ]
    },
    {
      id: "module-3",
      title: "Guia Prático: User Stories Enriquecidas e Documentação Técnica",
      description: "Aprenda a transformar User Stories simples em especificações detalhadas e a documentar integrações e bancos de dados de forma clara.",
      sections: [
        {
          id: "sec-3-1",
          title: "Fundamentos da User Story",
          objective: "Compreender o que é uma User Story, sua estrutura básica e suas limitações.",
          content: [
            { id: "c3-1-1", type: 'header', content: '1. O que é uma User Story?' },
            { id: "c3-1-2", type: 'paragraph', content: 'Uma User Story é uma forma simples e objetiva de descrever uma necessidade do usuário. Ela foca no valor de negócio, não apenas na funcionalidade.' },
            { id: "c3-1-3", type: 'concept', title: 'Estrutura Padrão', content: '**Como** <tipo de usuário>\n**Quero** <ação/funcionalidade>\n**Para** <benefício/resultado esperado>' },
            { id: "c3-1-4", type: 'activity', title: 'Exercício: Decompondo a História', 
              content: [
                { id: 'act3-1-q1', question: 'Na frase "Como gerente de vendas, quero exportar o relatório em PDF para apresentar na reunião mensal", quem é o usuário?', context: 'Gerente de vendas.' },
                { id: 'act3-1-q2', question: 'Qual é a ação desejada na frase acima?', context: 'Exportar o relatório em PDF.' },
                { id: 'act3-1-q3', question: 'Qual é o valor de negócio (o "Para")?', context: 'Apresentar na reunião mensal (facilitar a comunicação de resultados).' }
              ]
            }
          ]
        },
        {
          id: "sec-3-2",
          title: "A User Story Enriquecida com Dados",
          objective: "Aprender a detalhar uma User Story com informações técnicas e funcionais essenciais.",
          content: [
            { id: "c3-2-1", type: 'header', content: '4. Enriquecendo a História' },
            { id: "c3-2-2", type: 'paragraph', content: 'Desenvolvedores precisam de detalhes. Quais campos? Qual tamanho? É obrigatório? De onde vem o dado?' },
            { id: "c3-2-3", type: 'list', content: [
                'Mapeamento de campos (Origem no Banco vs Destino na Tela).',
                'Regras de formatação (Máscaras).',
                'Obrigatoriedade e Validações.'
            ]},
            { id: "c3-2-4", type: 'activity', title: 'Exercício: Detalhando Campos', 
              content: [
                { id: 'act3-2-q1', question: 'Você está especificando um campo de "CPF". Quais detalhes técnicos um desenvolvedor precisaria saber além do nome do campo?', context: 'Tamanho (11 caracteres), Formatação (máscara ###.###.###-##), Obrigatoriedade, Validação (algoritmo de dígito verificador), Tipo de dado (numérico ou texto).' },
                { id: 'act3-2-q2', question: 'Se um campo é "Data de Nascimento", qual regra de validação de negócio seria importante especificar para um cadastro de clientes maiores de idade?', context: 'A data deve ser anterior a hoje menos 18 anos (Usuário deve ter >= 18 anos).' },
                { id: 'act3-2-q3', question: 'Por que é importante dizer se um campo é "Obrigatório" ou "Opcional" na documentação?', context: 'Para o desenvolvedor criar a validação no front-end e configurar a coluna do banco de dados como NULL ou NOT NULL.' }
              ]
            }
          ]
        },
        {
          id: "sec-3-3",
          title: "O Processo de Enriquecimento: do Banco ao JSON",
          objective: "Seguir um fluxo prático para documentar dados usando DBeaver e Swagger.",
          content: [
            { id: "c3-3-1", type: 'header', content: 'Mapeando Dados' },
            { id: "c3-3-2", type: 'paragraph', content: 'O analista técnico precisa conectar as pontas: o que está na tela, o que viaja na API (JSON) e o que está salvo no banco (SQL).' },
            { id: "c3-3-3", type: 'activity', title: 'Exercício: Conectando as Pontas', 
              content: [
                { id: 'act3-3-q1', question: 'Se no banco a coluna é `NM_CLIENTE` (VARCHAR 100) e no JSON da API o campo é `customerName`, o que você deve documentar para o front-end?', context: 'O front-end deve enviar/ler o campo `customerName`. O mapeamento (De-Para) é responsabilidade do Back-end, mas deve estar documentado.' },
                { id: 'act3-3-q2', question: 'No banco, o status é salvo como `1` ou `0`. Na tela, aparece "Ativo" ou "Inativo". Onde essa transformação deve ser documentada?', context: 'Nas Regras de Negócio ou na Tabela de Mapeamento de Campos (ex: 1 = Ativo, 0 = Inativo).' },
                { id: 'act3-3-q3', question: 'Você encontrou uma tabela `TB_PEDIDOS` no DBeaver, mas não sabe o que a coluna `CD_SIT` significa. O que você faz?', context: 'Investiga: faz um SELECT para ver os dados, procura documentação antiga, pergunta a um desenvolvedor antigo ou a um analista de negócio.' }
              ]
            }
          ]
        },
        {
          id: "sec-3-4",
          title: "Checklist e Boas Práticas",
          objective: "Garantir a qualidade da User Story enriquecida.",
          content: [
            { id: "c3-4-1", type: 'checklist', title: 'Checklist da História Rica', content: [
              { id: 'cl-3-4-1', text: 'A história tem Critérios de Aceitação?' },
              { id: 'cl-3-4-2', text: 'Os campos têm tipo, tamanho e obrigatoriedade definidos?' },
              { id: 'cl-3-4-3', text: 'As mensagens de erro estão descritas?' },
              { id: 'cl-3-4-4', text: 'O "Caminho Feliz" e os "Caminhos de Exceção" estão cobertos?' }
            ]},
            { id: "c3-4-2", type: 'activity', title: 'Exercício: Revisão de Qualidade', 
               content: [
                 { id: 'act3-4-q1', question: 'Analise este requisito: "O sistema deve ter um cadastro de clientes". O que falta para ele ser desenvolvível?', context: 'Falta tudo: Quais campos? Quem pode cadastrar? Onde salva? Tem validação? É muito vago.' },
                 { id: 'act3-4-q2', question: 'Por que devemos evitar termos como "rápido", "fácil" ou "intuitivo" sem métricas nos requisitos?', context: 'Porque são subjetivos. O que é rápido para mim pode ser lento para você. Use métricas (ex: "carregar em menos de 2s").' },
                 { id: 'act3-4-q3', question: 'O que acontece se esquecermos de documentar as mensagens de erro de uma API?', context: 'O desenvolvedor Front-end vai inventar uma mensagem genérica (ex: "Erro") ou mostrar o erro técnico do servidor (ex: "NullPointerException"), o que é ruim para o usuário.' }
               ]
            }
          ]
        },
        {
          id: "sec-3-5",
          title: "Atividades Práticas da Apostila",
          objective: "Aplicar os conceitos de documentação e análise de requisitos em cenários práticos.",
          content: [
            { id: "c3-5-1", type: 'activity', title: 'Atividade: Diagnóstico inicial',
              content: [
                { id: 'act3-5-q1', question: 'Quando você precisa documentar uma nova integração, qual costuma ser seu primeiro passo? (a) Pedir para o dev explicar, (b) Entender o problema de negócio, (c) Testar endpoints.', context: 'A resposta correta é a (b). Comece pelo negócio.' },
                { id: 'act3-5-q2', question: 'O campo `idenCredor` está presente no JSON. Onde documentá-lo? (a) Só na descrição, (b) Na tabela de mapeamento, (c) Não precisa.', context: 'Resposta (b). Tabela de mapeamento conecta JSON e Banco.' },
                { id: 'act3-5-q3', question: 'Associe: `numrNOB` (JSON) deve vir de qual coluna? (a) NUMR_NOB, (b) NOME_CLIENTE.', context: 'Resposta (a).' },
                { id: 'act3-5-q4', question: 'Erro 400 (Bad Request) geralmente indica erro de quem? (a) Cliente/Front, (b) Servidor.', context: 'Resposta (a). Dados enviados incorretamente.' },
                { id: 'act3-5-q5', question: 'Qual método HTTP cria recursos? (a) GET, (b) POST.', context: 'Resposta (b) POST.' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "module-4",
      title: "Documentando Integrações: Quiz Prático",
      description: "Teste seus conhecimentos sobre os elementos essenciais da documentação de APIs REST.",
      sections: [
        {
          id: "sec-4-1",
          title: "Quiz: Elementos Essenciais da Documentação de API",
          objective: "Validar o conhecimento sobre os componentes fundamentais de uma documentação de API REST.",
          content: [
            {
              id: "c4-1-1",
              type: 'activity',
              title: 'Quiz API REST',
              content: [
                { id: 'act4-1-q1', question: 'Método para CRIAR registro: (a) GET, (b) POST, (c) PUT.', context: 'Resposta (b) POST.' },
                { id: 'act4-1-q2', question: 'Consultar cliente ID 123: (a) GET /clients/123, (b) POST /clients.', context: 'Resposta (a) GET /clients/123.' },
                { id: 'act4-1-q3', question: 'Cliente não encontrado retorna: (a) 200, (b) 404, (c) 500.', context: 'Resposta (b) 404 Not Found.' },
                { id: 'act4-1-q4', question: 'Essencial na doc: (a) Método e URL, (b) Nome do dev.', context: 'Resposta (a).' },
                { id: 'act4-1-q5', question: 'Erro 5xx significa: (a) Erro do cliente, (b) Erro do servidor.', context: 'Resposta (b) Erro do servidor.' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "module-5",
      title: "Critérios de Aceitação e Categorização de Requisitos",
      description: "Aprenda a escrever critérios de aceitação claros e testáveis usando técnicas como SMART e Gherkin.",
      sections: [
        {
          id: "sec-5-1",
          title: "Sobre Este Módulo",
          objective: "Entender o propósito do módulo.",
          content: [
            { id: "c5-1-1", type: 'paragraph', content: 'Vamos aprender a transformar "eu quero um sistema rápido" em "o sistema deve carregar em 2 segundos".' },
            { id: "c5-1-2", type: 'activity', title: 'Reflexão Inicial',
                content: [
                    { id: 'act5-1-q1', question: 'Qual o maior problema de receber um requisito vago como "o sistema deve ser fácil de usar"?', context: 'É subjetivo. O que é fácil para um não é para outro. Não dá para testar objetivamente.' },
                    { id: 'act5-1-q2', question: 'Quem deve aprovar os critérios de aceitação?', context: 'O Product Owner (PO) ou o Cliente/Stakeholder.' },
                    { id: 'act5-1-q3', question: 'Critério de Aceitação serve apenas para o QA testar?', context: 'Não. Serve para o desenvolvedor saber o que codificar e para o analista alinhar expectativas com o negócio.' }
                ]
            }
          ]
        },
        {
          id: "sec-5-2",
          title: "Critérios de Aceitação e Categorização de Requisitos",
          objective: "Definir o que são critérios de aceitação.",
          content: [
            { id: "c5-2-1", type: 'concept', title: 'Definição', content: 'Condições que uma funcionalidade deve atender para ser aceita.' },
            { id: "c5-2-2", type: 'activity', title: 'Conceituando',
                content: [
                    { id: 'act5-2-q1', question: 'Verdadeiro ou Falso: Critério de aceitação é a mesma coisa que a descrição da User Story.', context: 'Falso. A descrição diz o que/quem/porquê. O critério diz as regras, limites e condições de sucesso.' },
                    { id: 'act5-2-q2', question: 'Um critério de aceitação pode definir o que o sistema NÃO deve fazer?', context: 'Sim. Exemplo: "O sistema não deve permitir cadastro de menores de 18 anos". (Critério negativo).' },
                    { id: 'act5-2-q3', question: 'Qual a relação entre Critérios de Aceitação e "Definição de Pronto" (DoD)?', context: 'A DoD é uma lista geral para todas as histórias (ex: "código revisado"). Os Critérios de Aceitação são específicos de CADA história (ex: "cálculo de juros deve ser 1%").' }
                ]
            }
          ]
        },
        {
          id: "sec-5-3",
          title: "Critérios SMART",
          objective: "Aprender a escrever critérios SMART.",
          content: [
            { id: "c5-3-1", type: 'concept', title: 'SMART', content: 'Specific, Measurable, Achievable, Relevant, Time-bound.' },
            {
              id: "c5-3-5", type: 'activity', title: 'Praticando SMART',
              content: [
                { id: 'act5-3-q1', question: 'Transforme em SMART: "O relatório deve ser rápido".', context: 'Ex: "O relatório deve ser gerado em menos de 5 segundos para um período de 30 dias."' },
                { id: 'act5-3-q2', question: 'Analise: "O sistema deve ser bonito". Qual letra do SMART isso viola principalmente?', context: 'S (Específico) e M (Mensurável). Beleza é subjetiva.' },
                { id: 'act5-3-q3', question: 'Transforme em SMART: "Suportar muitos usuários".', context: 'Ex: "Suportar até 1000 usuários simultâneos sem degradação de performance (tempo de resposta < 2s)."' }
              ]
            }
          ]
        },
        {
          id: "sec-5-4",
          title: "Formato Gherkin na Prática",
          objective: "Utilizar a sintaxe Dado / Quando / Então.",
          content: [
            { id: "c5-4-1", type: 'concept', title: 'Gherkin', content: 'Dado (Contexto) / Quando (Ação) / Então (Resultado).' },
            { id: "c5-4-2", type: 'activity', title: 'Escrevendo Gherkin',
                content: [
                    { id: 'act5-4-q1', question: 'Escreva o "Então" para: Dado que estou logado, Quando clico em "Sair"...', context: 'Então minha sessão deve ser encerrada e devo ser redirecionado para a tela de login.' },
                    { id: 'act5-4-q2', question: 'Identifique o erro: "Dado que eu quero cadastrar, Então o sistema salva".', context: 'Faltou o "Quando" (Ação). O correto seria: Dado que estou na tela, Quando preencho e salvo, Então o sistema salva.' },
                    { id: 'act5-4-q3', question: 'Escreva um cenário completo para "Esqueci minha senha".', context: 'Dado que estou na tela de login / Quando clico em "Esqueci senha" e informo meu email / Então devo receber um link de recuperação por email.' }
                ]
            }
          ]
        },
        {
          id: "sec-5-6",
          title: "Exercícios de Critérios de Aceitação",
          objective: "Praticar a escrita e a melhoria de critérios.",
          content: [
            {
              id: "c5-6-1", type: 'activity', title: 'Exercícios Práticos',
              content: [
                { id: 'act5-6-q1', question: 'Escreva critérios para: Busca de produtos por nome.', context: 'Retornar produtos que contêm o termo; Mensagem se não achar nada; Busca ao dar Enter.' },
                { id: 'act5-6-q2', question: 'Melhore: "Mostrar erro no login falho".', context: 'Se email/senha incorretos, mostrar "Credenciais inválidas" em vermelho.' },
                { id: 'act5-6-q3', question: 'Cenário Gherkin para email duplicado.', context: 'Dado email já cadastrado / Quando tento cadastrar / Então exibe erro "Email já em uso".' }
              ]
            }
          ]
        },
        {
          id: "sec-5-8",
          title: "Funcionais vs. Não Funcionais",
          objective: "Diferenciar requisitos funcionais de não funcionais.",
          content: [
            { id: "c5-8-1", type: 'concept', title: 'Funcional vs Não Funcional', content: 'Funcional: O que o sistema faz (verbo). Não Funcional: Como o sistema é (adjetivo/restrição).' },
             {
              id: "c5-8-2", type: 'activity', title: 'Classificação Rápida',
              content: [
                { id: 'act5-8-q1', question: '"O sistema deve calcular o imposto de renda". Funcional ou Não Funcional?', context: 'Funcional (é uma ação/função do sistema).' },
                { id: 'act5-8-q2', question: '"O sistema deve rodar em iOS e Android". Funcional ou Não Funcional?', context: 'Não Funcional (é uma restrição de ambiente/portabilidade).' },
                { id: 'act5-8-q3', question: '"A senha deve ser criptografada no banco". Funcional ou Não Funcional?', context: 'Não Funcional (requisito de segurança).' }
              ]
            }
          ]
        },
        {
          id: "sec-5-9",
          title: "Exercícios de Classificação Geral",
          objective: "Praticar a identificação de tipos de requisitos.",
          content: [
            {
              id: "c5-9-1", type: 'activity', title: 'Exercício de Classificação',
              content: [
                { id: 'act5-9-q1', question: '"Aumentar vendas em 10%". Que tipo de requisito é?', context: 'Requisito de Negócio (Objetivo da empresa).' },
                { id: 'act5-9-q2', question: '"Gerente deve aprovar férias". Que tipo é?', context: 'Requisito Funcional (Regra/Ação).' },
                { id: 'act5-9-q3', question: '"Sistema deve estar disponível 99.9% do tempo". Que tipo é?', context: 'Requisito Não Funcional (Disponibilidade).' }
              ]
            }
          ]
        },
        {
            id: "sec-5-10",
            title: "Checklist Geral do Analista",
             objective: "Revisar a qualidade dos requisitos.",
            content: [
                { id: "c5-10-1", type: 'checklist', title: 'Checklist Final', content: [
                    { id: 'cl-5-10-1', text: 'Histórias têm critérios claros?' },
                    { id: 'cl-5-10-2', text: 'Diferenciei funcionais de não funcionais?' },
                    { id: 'cl-5-10-3', text: 'RNFs têm métricas?' },
                    { id: 'cl-5-10-4', text: 'Regras de negócio estão explícitas?' }
                ]}
            ]
        }
      ]
    },
    {
      id: "module-6",
      title: "Gestão do Tempo e Produtividade para Analistas",
      description: "Estratégias práticas para organizar sua rotina e priorizar tarefas.",
      sections: [
        {
          id: "sec-6-1",
          title: "Fundamentos da Gestão do Tempo",
          objective: "Compreender eficiência versus eficácia.",
          content: [
            { id: "c6-1-1", type: 'header', content: 'Eficiência x Eficácia' },
            { id: "c6-1-2", type: 'paragraph', content: 'Eficiência é fazer rápido. Eficácia é fazer o que importa.' },
            { id: "c6-1-4", type: 'activity', title: 'Atividade: Eficiência vs Eficácia', 
              content: [
                { id: 'act6-1-q1', question: 'Você respondeu 50 e-mails em 1 hora, mas não entregou a especificação urgente. Você foi eficiente? Foi eficaz?', context: 'Eficiente sim (muitos emails em pouco tempo). Eficaz não (não fez o principal).' },
                { id: 'act6-1-q2', question: 'O que é uma tarefa "Circunstancial" na Tríade do Tempo?', context: 'Tarefas que não agregam valor, desperdício de tempo (ex: reuniões sem pauta, redes sociais).' },
                { id: 'act6-1-q3', question: 'Por que "estar ocupado" não é o mesmo que "ser produtivo"?', context: 'Estar ocupado é ter muitas tarefas. Ser produtivo é entregar resultados de valor.' }
              ]
            }
          ]
        },
        {
          id: "sec-6-2",
          title: "Estratégias de Priorização",
          objective: "Aplicar Matriz de Eisenhower e MITs.",
          content: [
            { id: "c6-2-1", type: 'header', content: 'Matriz de Eisenhower' },
            { id: "c6-2-5", type: 'activity', title: 'Classificando na Matriz', 
              content: [
                { id: 'act6-2-q1', question: 'Servidor caiu (Crise). Qual quadrante?', context: 'Q1: Urgente e Importante (Faça Agora).' },
                { id: 'act6-2-q2', question: 'Planejar a próxima sprint. Qual quadrante?', context: 'Q2: Importante, Não Urgente (Agende). É aqui que a mágica acontece.' },
                { id: 'act6-2-q3', question: 'Colega pedindo ajuda para formatar planilha (interrupção). Qual quadrante?', context: 'Q3: Urgente, Não Importante (Delegue ou faça rápido se puder, mas cuidado).' },
                { id: 'act6-2-q4', question: 'Rolar feed do Instagram. Qual quadrante?', context: 'Q4: Não Urgente, Não Importante (Elimine).' }
              ]
            }
          ]
        },
        {
          id: "sec-6-3",
          title: "Ferramentas e Dicas Digitais",
          objective: "Explorar ferramentas e higiene digital.",
          content: [
            { id: "c6-3-1", type: 'paragraph', content: 'Ferramentas ajudam, mas o comportamento é o principal.' },
            { id: "c6-3-4", type: 'checklist', title: 'Higiene Digital', content: [
              { id: 'cl-6-3-1', text: 'Notificações desativadas.' },
              { id: 'cl-6-3-2', text: 'Tarefas anotadas em local confiável.' },
              { id: 'cl-6-3-3', text: 'Agenda revisada.' }
            ]},
             { id: "c6-3-5", type: 'activity', title: 'Prática de Foco',
                content: [
                    { id: 'act6-3-q1', question: 'O que é "Time Blocking" e como ele ajuda o analista?', context: 'É bloquear horários na agenda para tarefas específicas (ex: "14h às 16h: Escrever requisitos"). Ajuda a evitar interrupções e garante tempo para trabalho focado.' },
                    { id: 'act6-3-q2', question: 'Qual a vantagem de agrupar tarefas similares (Batching)?', context: 'Reduz a troca de contexto mental, economizando energia e aumentando a velocidade.' },
                    { id: 'act6-3-q3', question: 'Cite uma ferramenta para gestão visual de tarefas (Kanban).', context: 'Trello, Jira, Planner, Notion, Asana.' }
                ]
             }
          ]
        }
      ]
    },
    {
      id: "module-7",
      title: "Estimativa de Requisitos e Critérios de Ready",
      description: "Aprenda a estimar com segurança utilizando DoR e técnicas colaborativas.",
      sections: [
        {
          id: "sec-7-1",
          title: "Por que e Quando Estimar?",
          objective: "Entender Upstream vs Downstream.",
          content: [
            { id: "c7-1-1", type: 'concept', title: 'Upstream vs Downstream', content: 'Upstream: Definição (Analista). Downstream: Construção (Dev).' },
            { id: "c7-1-2", type: 'activity', title: 'Conceitos de Estimativa',
                content: [
                    { id: 'act7-1-q1', question: 'Por que estimar no início do projeto (Upstream) é menos preciso?', context: 'Porque há mais incertezas e menos detalhes técnicos definidos (Cone da Incerteza).' },
                    { id: 'act7-1-q2', question: 'O que é um "Spike" em contexto ágil?', context: 'Uma tarefa investigativa de tempo fixo para reduzir incerteza técnica antes de estimar a história real.' },
                    { id: 'act7-1-q3', question: 'Se o requisito está vago, qual a melhor ação: (a) Chutar um prazo com margem, (b) Recusar estimar e pedir refinamento.', context: 'Resposta (b). Estimar o desconhecido gera compromissos irreais. Refine primeiro.' }
                ]
            }
          ]
        },
        {
          id: "sec-7-2",
          title: "Critérios de Ready (DoR)",
          objective: "Garantir que a história está pronta para dev.",
          content: [
            { id: "c7-2-1", type: 'checklist', title: 'DoR Checklist', content: [
                { id: 'cl-7-2-1', text: 'Objetivo Claro.' },
                { id: 'cl-7-2-2', text: 'Critérios de Aceite.' },
                { id: 'cl-7-2-3', text: 'Dependências Mapeadas.' },
                { id: 'cl-7-2-4', text: 'Viabilidade Técnica validada.' }
            ]},
            { id: "c7-2-4", type: 'activity', title: 'Análise de Prontidão', 
              content: [
                { id: 'act7-2-q1', question: 'Uma história diz: "Integrar com API de Pagamento". O dev diz que não tem a documentação da API. Está Ready?', context: 'Não. Falta dependência (documentação) e viabilidade técnica.' },
                { id: 'act7-2-q2', question: 'Uma história tem design, regras e banco definidos, mas o PO não validou. Está Ready?', context: 'Não. Falta acordo/validação de negócio (risco de retrabalho).' },
                { id: 'act7-2-q3', question: 'Qual a consequência de puxar para a Sprint um item que não está Ready?', context: 'Impedimentos durante a sprint, atrasos, entrega de baixa qualidade ou incompleta.' }
              ]
            }
          ]
        },
        {
          id: "sec-7-3",
          title: "Técnicas de Estimativa",
          objective: "Praticar Planning Poker, T-Shirt e PERT.",
          content: [
            { id: "c7-3-1", type: 'paragraph', content: 'Técnicas: Planning Poker (Consenso), T-Shirt (Alto nível), PERT (Matemática).' },
            { id: "c7-3-3", type: 'activity', title: 'Calculando e Escolhendo', 
              content: [
                { id: 'act7-3-q1', question: 'Calcule PERT: Otimista 2, Provável 5, Pessimista 12.', context: '(2 + 4*5 + 12)/6 = 34/6 = 5.6 dias.' },
                { id: 'act7-3-q2', question: 'Para um backlog inicial de 50 itens, qual técnica é melhor: Planning Poker ou T-Shirt Size?', context: 'T-Shirt Size. É mais rápida para categorizar grandes volumes em P, M, G.' },
                { id: 'act7-3-q3', question: 'No Planning Poker, se um dev vota 3 e outro vota 13, o que acontece?', context: 'Eles devem discutir para entender a divergência (quem votou 13 viu um risco que o 3 não viu, ou vice-versa) e votar novamente.' }
              ]
            }
          ]
        },
        {
            id: "sec-7-4",
            title: "Boas Práticas e Roteiro",
            objective: "Roteiro prático.",
            content: [
                 { id: "c7-4-5", type: 'activity', title: 'Cenários de Estimativa',
                  content: [
                    { id: 'act7-4-q1', question: 'Jantar para 10 pessoas. Use decomposição. Quais riscos considerar?', context: 'Falta de ingrediente, forno quebrar. Buffer de tempo.' },
                    { id: 'act7-4-q2', question: 'Pintura paramétrica: 1 quarto = 4h. Quanto tempo para 3 quartos + sala dupla?', context: '3*4 + 2*4 = 20h.' },
                    { id: 'act7-4-q3', question: 'PERT Integração: 3 (O), 7 (P), 20 (Pes). Calcule.', context: '8.5 dias.' }
                  ]
                }
            ]
        }
      ]
    },
    {
      id: "module-8",
      title: "Previsão e Prevenção de Bugs",
      description: "Fundamentos de testes, tipos de erros e estratégias como Shift-Left.",
      sections: [
        {
          id: "sec-8-1",
          title: "Fundamentos de Testes e Qualidade",
          objective: "Distinguir Erro, Defeito e Falha.",
          content: [
             {
              id: "c8-1-12", type: 'activity', title: 'Classificando Problemas',
              content: [
                { id: 'act8-1-q1', question: 'Analista esquece regra. (Erro, Defeito ou Falha?)', context: 'Erro (Humano).' },
                { id: 'act8-1-q2', question: 'Código com fórmula errada. (Erro, Defeito ou Falha?)', context: 'Defeito (Bug no artefato).' },
                { id: 'act8-1-q3', question: 'Usuário vê tela de erro. (Erro, Defeito ou Falha?)', context: 'Falha (Execução).' }
              ]
            }
          ]
        },
        {
          id: "sec-8-2",
          title: "Classificações e Técnicas de Teste",
          objective: "Tipos, níveis e Pirâmide de Testes.",
          content: [
            { id: "c8-2-1", type: 'concept', title: 'Caixa Preta vs Branca', content: 'Preta: Foco na entrada/saída (funcional). Branca: Foco no código/lógica interna.' },
             { id: "c8-2-11", type: 'activity', title: 'Técnicas de Teste',
                content: [
                    { id: 'act8-2-q1', question: 'Um teste que verifica se o cálculo de imposto no código está usando a variável correta é Caixa Preta ou Branca?', context: 'Caixa Branca (olha o código).' },
                    { id: 'act8-2-q2', question: 'Um teste que preenche o formulário de login e verifica se entrou na home é Caixa Preta ou Branca?', context: 'Caixa Preta (comportamento externo).' },
                    { id: 'act8-2-q3', question: 'Segundo a Pirâmide de Testes, qual tipo devemos ter em maior quantidade? (Unitário, Integração ou E2E)?', context: 'Testes Unitários (Base da pirâmide: rápidos e baratos).' }
                ]
             }
          ]
        },
        {
          id: "sec-8-3",
          title: "Abordagens Orientadas aos Testes (Shift-Left)",
          objective: "Shift-Left, TDD, ATDD, BDD.",
          content: [
             {
              id: "c8-3-12", type: 'activity', title: 'Classificação: TDD, ATDD ou BDD?',
              content: [
                { id: 'act8-3-class-1', question: 'Escreva teste unitário antes do código.', context: 'TDD.' },
                { id: 'act8-3-class-2', question: 'Usa Dado/Quando/Então para descrever comportamento.', context: 'BDD.' },
                { id: 'act8-3-class-3', question: 'Define testes de aceitação antes de codar.', context: 'ATDD.' },
                { id: 'act8-3-class-4', question: 'Ciclo Red-Green-Refactor.', context: 'TDD.' },
                { id: 'act8-3-class-5', question: 'Foca na linguagem ubíqua entre Negócio e Dev.', context: 'BDD.' }
              ]
            },
            {
              id: "c8-3-8", type: 'activity', title: 'Praticando BDD',
              content: [
                { id: 'act8-3-q1', question: 'Cenário BDD para Login Inválido.', context: 'Dado login, Quando senha errada, Então erro.' },
                { id: 'act8-3-q2', question: 'Diferença de foco TDD vs BDD.', context: 'TDD=Código/Unidade. BDD=Comportamento/Negócio.' }
              ]
            }
          ]
        },
        {
            id: "sec-8-4",
            title: "Organização e Prática",
            objective: "Estruturar Casos de Teste.",
            content: [
                { id: "c8-4-6", type: 'activity', title: 'Criando Casos de Teste',
                    content: [
                        { id: 'act8-4-q1', question: 'Cite 3 elementos essenciais de um Caso de Teste.', context: 'Objetivo, Passos, Resultado Esperado (também: Pré-condições, Dados de massa).' },
                        { id: 'act8-4-q2', question: 'O que é um "Teste Negativo"? Dê um exemplo para um campo de "Idade".', context: 'Testar condições de erro. Ex: Inserir idade -5 ou letras no campo idade.' },
                        { id: 'act8-4-q3', question: 'Por que devemos testar "valores de borda" (ex: se o limite é 18 anos, testar 17, 18 e 19)?', context: 'Porque a maioria dos erros de lógica (ex: > vs >=) acontece nas bordas das regras.' }
                    ]
                }
            ]
        }
      ]
    },
    {
      id: "module-9",
      title: "Pensamento Crítico e Resolução de Problemas",
      description: "Evitar vieses e aplicar técnicas estruturadas de resolução.",
      sections: [
        {
          id: "sec-9-1",
          title: "Vieses e Armadilhas Mentais",
          objective: "Identificar vieses cognitivos.",
          content: [
             {
              id: "c9-1-7", type: 'activity', title: 'Identificando Vieses',
              content: [
                { id: 'act9-1-q1', question: 'Você só entrevista usuários que gostam do produto. Qual viés?', context: 'Viés de Confirmação.' },
                { id: 'act9-1-q2', question: 'Você assume que o projeto vai demorar 1 mês porque o último demorou 1 mês (ignorando que este é mais complexo). Qual viés?', context: 'Viés de Disponibilidade ou Ancoragem.' },
                { id: 'act9-1-q3', question: 'O chefe disse que a ideia é boa, então ninguém critica. Qual fenômeno?', context: 'Groupthink (Pensamento de Grupo) ou Viés de Autoridade.' }
              ]
            }
          ]
        },
        {
            id: "sec-9-2",
            title: "Gerenciamento de Riscos e Problemas",
            objective: "Estratégias de resposta a riscos.",
            content: [
                { id: "c9-2-7", type: 'activity', title: 'Estratégia de Risco',
                    content: [
                        { id: 'act9-2-q1', question: 'Risco: Servidor pode não aguentar Black Friday. Ação: Contratar servidor extra temporário. Qual estratégia? (Mitigar, Aceitar, Transferir?)', context: 'Mitigar (reduzindo a probabilidade de queda).' },
                        { id: 'act9-2-q2', question: 'Risco: Chuva no dia do evento outdoor. Ação: Contratar um seguro chuva. Qual estratégia?', context: 'Transferir (passando o impacto financeiro para a seguradora).' },
                        { id: 'act9-2-q3', question: 'Risco: Uma funcionalidade pequena pode não ficar pronta. Ação: Se não der, lançamos sem ela. Qual estratégia?', context: 'Aceitar (estamos dispostos a lidar com a consequência sem ação prévia cara).' }
                    ]
                }
            ]
        },
        {
          id: "sec-9-3",
          title: "Técnicas de Resolução de Problemas",
          objective: "5 Porquês, Ishikawa, SCAMPER.",
          content: [
            {
              id: "c9-3-7", type: 'activity', title: 'Exercício: Técnicas de Resolução',
              content: [
                { id: 'act9-3-q1', question: '5 Porquês: Relatório lento. Aplique.', context: 'Lento > Muitos dados > Carrega tudo > Sem filtro > Requisito falho.' },
                { id: 'act9-3-q2', question: 'Ishikawa: "Servidor sem memória". Categoria?', context: 'Máquina/Infra.' },
                { id: 'act9-3-q3', question: 'SCAMPER: Eliminar campo opcional. Qual letra?', context: 'E (Eliminate).' },
                { id: 'act9-3-q4', question: 'Reiniciar servidor resolve sintoma ou causa?', context: 'Sintoma.' }
              ]
            }
          ]
        },
        {
          id: "sec-9-4",
          title: "Tomada de Decisão (Modelo RED)",
          objective: "Modelo RED.",
          content: [
            {
              id: "c9-4-4", type: 'activity', title: 'Praticando RED',
              content: [
                { id: 'act9-4-q1', question: 'O que significa o R no RED?', context: 'Recognize Assumptions (Reconhecer Suposições).' },
                { id: 'act9-4-q2', question: 'Cenário: "Temos que usar Blockchain porque é seguro". Aplique o RED.', context: 'R: Suposição de que precisamos desse nível de segurança. E: Avaliar custo vs benefício. D: Decidir se vale a pena.' },
                { id: 'act9-4-q3', question: 'Por que devemos separar "Fatos" de "Opiniões" na tomada de decisão?', context: 'Opiniões são enviesadas. Fatos são dados verificáveis. Decisões baseadas em fatos são mais robustas.' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "module-10",
      title: "Como Absorver o Conhecimento do Cliente (Metodologia Ativa)",
      description: "Técnicas práticas e colaborativas para entender profundamente o negócio do cliente: Entrevistas, Shadowing, Análise Documental e Organização do Conhecimento.",
      sections: [
        {
          id: "sec-10-1",
          title: "Abertura e Objetivos",
          objective: "Compreender a importância de absorver o conhecimento do cliente e refletir sobre práticas atuais.",
          content: [
            { id: "c10-1-1", type: 'header', content: 'Objetivos de aprendizagem da unidade' },
            { id: "c10-1-2", type: 'list', content: [
              'Aplicar diferentes técnicas de levantamento de informações (entrevistas, observação, análise de documentos, mapeamento de processos).',
              'Utilizar 5W2H, SIPOC e Jornada do Usuário para estruturar e organizar o conhecimento obtido.',
              'Conectar as técnicas de levantamento com a atuação prática do analista de requisitos no dia a dia.'
            ]},
            { id: "c10-1-3", type: 'header', content: '3.2 Abertura – Por que absorver o conhecimento do cliente?' },
            { id: "c10-1-4", type: 'paragraph', content: 'Para que o analista de sistemas possa propor soluções eficazes, é imprescindível que ele compreenda profundamente o negócio do cliente. Isso vai além de entender “o que o cliente quer”: trata-se de compreender como o cliente trabalha, por que ele faz o que faz e quais são as verdadeiras dores e oportunidades escondidas nos processos diários.\n\nEssa capacidade de absorver conhecimento é o que transforma um analista comum em um parceiro estratégico do negócio, capaz de enxergar além do pedido inicial e propor melhorias reais.' },
            {
              id: "c10-1-5", type: 'activity', title: 'ATIVIDADE – Momento de reflexão individual',
              content: [
                { id: 'act10-1-q1', question: '1. Pense em um sistema que você usa com frequência (no trabalho, estudo ou vida pessoal). O que esse sistema faz tecnicamente?', context: 'Descreva funcionalidades técnicas (ex: cadastro, login, processamento de dados).' },
                { id: 'act10-1-q2', question: '2. Qual problema de negócio/vida ele resolve de verdade?', context: 'Foque no valor e na dor resolvida (ex: economiza tempo, evita erros, organiza informações).' },
                { id: 'act10-1-q3', question: '3. Você sente que ele foi desenhado com entendimento real do seu contexto? Por quê?', context: 'Avalie a usabilidade e a adequação ao fluxo de trabalho real.' }
              ]
            },
            {
              id: "c10-1-6", type: 'activity', title: 'ATIVIDADE – Compartilhando em duplas',
              content: [
                { id: 'act10-1-q4', question: 'Após refletir individualmente, imagine que você está compartilhando suas respostas com um colega. Identifique um exemplo de sistema que parece ter sido feito sem entender bem o usuário e escreva aqui.', context: 'Procure exemplos de sistemas burocráticos, confusos ou que exigem passos desnecessários.' }
              ]
            }
          ]
        },
        {
          id: "sec-10-2",
          title: "Técnicas de Levantamento de Informações",
          objective: "Praticar técnicas de entrevista e observação (Shadowing).",
          content: [
            { id: "c10-2-1", type: 'header', content: '3.3 Técnicas de Levantamento de Informações' },
            { id: "c10-2-2", type: 'paragraph', content: 'Para absorver o conhecimento do cliente, o analista usa técnicas estruturadas. Nesta unidade, trabalharemos quatro grupos de técnicas:\n1. Entrevistas qualitativas.\n2. Observação de campo (shadowing).\n3. Análise de documentos e relatórios.\n4. Mapeamento de processos.' },
            { id: "c10-2-3", type: 'header', content: '3.3.1 Entrevistas qualitativas' },
            { id: "c10-2-4", type: 'paragraph', content: 'Entrevistas capturam o conhecimento tácito do cliente – aquilo que não está em manuais, mas é essencial para o funcionamento real do negócio.' },
            { id: "c10-2-5", type: 'list', content: [
              '**Como aplicar (roteiro básico):** Preparar roteiro com perguntas abertas; Entrevistar individualmente usuários-chave; Permitir que o entrevistado fale livremente.',
              '**Exemplos de perguntas:** "Como é um dia típico do seu trabalho?", "Quais etapas você considera mais problemáticas?", "O que mais atrasa o seu trabalho?".',
              '**Boas práticas:** Gravar as conversas (com autorização); Registrar exemplos concretos citados; Usar perguntas de aprofundamento quando a resposta estiver vaga.'
            ]},
            { id: "c10-2-5-extra", type: 'concept', title: 'A Arte de Perguntar: Exemplos Práticos', content: 'A qualidade da resposta depende da qualidade da pergunta. Evite perguntas que podem ser respondidas com apenas "Sim" ou "Não".\n\n**Em vez de:** "Você usa o relatório mensal?" (Fechada)\n**Pergunte:** "Em que situações você precisa consultar o relatório mensal e que decisão você toma com base nele?" (Aberta)\n\n**Técnica dos 5 Porquês:** Se o usuário diz "Preciso exportar para Excel", pergunte "Por quê?" sucessivamente até achar a raiz (ex: "Porque o sistema não soma o total", logo, a necessidade real é ver o total na tela, não o Excel).' },
            {
              id: "c10-2-6", type: 'activity', title: 'ATIVIDADE – Construindo um roteiro de entrevista',
              content: [
                { id: 'act10-2-q1', question: 'Escolha um contexto (clínica, secretaria de educação, loja de varejo, departamento de trânsito ou outro). Crie 3 perguntas sobre o fluxo do processo ("como funciona hoje?").', context: 'Perguntas abertas focadas no processo atual.' },
                { id: 'act10-2-q2', question: 'Crie 3 perguntas sobre dores e problemas.', context: 'Perguntas que busquem identificar gargalos, erros e frustrações.' },
                { id: 'act10-2-q3', question: 'Crie 2 perguntas sobre oportunidades de melhoria.', context: 'Perguntas que incentivem o usuário a propor soluções ou visões ideais.' }
              ]
            },
            {
              id: "c10-2-7", type: 'note', title: 'ATIVIDADE – Role-play de entrevista (Simulação)',
              content: 'Se estivesse em grupo, você faria uma simulação onde um é analista e o outro usuário. Como está estudando individualmente, imagine as respostas que um "usuário frustrado" daria às suas perguntas acima e anote os principais insights.'
            },
            { id: "c10-2-8", type: 'header', content: '3.3.2 Observação de campo (shadowing)' },
            { id: "c10-2-9", type: 'paragraph', content: 'Na observação direta, o analista vê o processo como ele acontece, não apenas como é descrito. No shadowing o analista acompanha o usuário em seu ambiente de trabalho.' },
            { id: "c10-2-10", type: 'concept', title: 'Vantagens do Shadowing', content: '- Identifica desvios do processo "ideal".\n- Revela improvisos, atalhos e perdas de tempo.\n- Permite captar emoções e frustrações dos usuários.' },
            { id: "c10-2-10-extra", type: 'list', content: [
                '**O que procurar durante o Shadowing (Cenários):**',
                '**Gambiarra (Workarounds):** O usuário anota códigos em post-it no monitor? Copia dados para o Excel para fazer contas que o sistema deveria fazer?',
                '**Interrupções:** O telefone toca? O sistema trava? O usuário precisa parar para perguntar algo ao colega?',
                '**Sentimentos:** Onde o usuário suspira, faz cara feia ou clica com força no mouse? Isso indica dor latente.'
            ]},
            {
              id: "c10-2-11", type: 'activity', title: 'ATIVIDADE – Mini-planejamento de shadowing',
              content: [
                { id: 'act10-2-q4', question: 'Escolha um processo real que você conheça. Qual você acompanharia?', context: 'Defina o processo e o local.' },
                { id: 'act10-2-q5', question: 'Em que horário/momento faria mais sentido observar? Por quê?', context: 'Justifique com base em pico de movimento, ocorrência de erros, etc.' },
                { id: 'act10-2-q6', question: 'Que tipos de situações você espera ver?', context: 'Antecipe possíveis problemas ou comportamentos.' },
                { id: 'act10-2-q7', question: 'Quais 3 perguntas faria depois da observação?', context: 'Perguntas para esclarecer o que foi observado.' }
              ]
            }
          ]
        },
        {
          id: "sec-10-3",
          title: "Análise Documental e Mapeamento",
          objective: "Entender como extrair informações de documentos e mapear processos visualmente.",
          content: [
            { id: "c10-3-1", type: 'header', content: '3.3.3 Análise de documentos e relatórios' },
            { id: "c10-3-2", type: 'paragraph', content: 'Documentos usados no dia a dia são fonte rica de informação: planilhas, manuais, relatórios, e-mails de reclamação, formulários em papel, sistemas legados etc.\n**Objetivos da análise:** Entender dados existentes e indicadores de desempenho; Identificar processos atuais e não conformidades.' },
            {
              id: "c10-3-3", type: 'activity', title: 'ATIVIDADE – Raio-X de documentos',
              content: [
                { id: 'act10-3-q1', question: 'Imagine que você foi contratado por um órgão público e recebeu: Uma planilha de controle, Um formulário em papel e Um relatório mensal. O que cada documento revela sobre o processo?', context: 'Planilha: dados reais e "gambiarras". Formulário: campos coletados. Relatório: indicadores de saída.' },
                { id: 'act10-3-q2', question: 'Que problemas podem ser percebidos só pelos documentos?', context: 'Redundância de dados, campos não preenchidos, inconsistências, falta de padronização.' },
                { id: 'act10-3-q3', question: 'Que perguntas surgem a partir dessa análise?', context: 'Por que esse campo existe? Quem preenche isso? Para onde vai esse dado?' }
              ]
            },
            { id: "c10-3-4", type: 'header', content: '3.3.4 Mapeamento de processos (modelagem)' },
            { id: "c10-3-5", type: 'paragraph', content: 'Mapear um processo é representá-lo visualmente (fluxograma ou BPMN), mostrando atividades, decisões, atores e fluxos.' },
            { id: "c10-3-6", type: 'concept', title: 'Benefícios do Mapeamento', content: '- Validar o processo com o cliente.\n- Identificar gargalos, redundâncias e riscos.\n- Servir de base para gerar requisitos funcionais.' },
            {
              id: "c10-3-7", type: 'activity', title: 'ATIVIDADE – Oficina rápida de BPMN',
              content: [
                { id: 'act10-3-q4', question: 'Escolha um cenário (ex.: agendamento de consulta, emissão de credencial, matrícula escolar). Liste de 8 a 12 etapas do processo.', context: 'Passo a passo sequencial.' },
                { id: 'act10-3-q5', question: 'Identifique quem executa cada etapa (Atores).', context: 'Defina as raias (lanes) do processo.' },
                { id: 'act10-3-q6', question: 'Descreva o fluxo (você pode desenhar em um papel e descrever aqui).', context: 'Início -> Ação -> Decisão -> Fim.' },
                { id: 'act10-3-q7', question: 'Identifique etapas de maior risco de atraso/erro.', context: 'Pontos críticos do processo.' }
              ]
            }
          ]
        },
        {
          id: "sec-10-4",
          title: "Organizando o Conhecimento",
          objective: "Estruturar o conhecimento usando 5W2H, SIPOC e Jornada do Usuário.",
          content: [
            { id: "c10-4-1", type: 'header', content: '3.4 Organizando o conhecimento: 5W2H, SIPOC e Jornada do Usuário' },
            { id: "c10-4-2", type: 'paragraph', content: 'Depois de coletar informações, é preciso organizar o conhecimento.' },
            { id: "c10-4-3", type: 'concept', title: '3.4.1 5W2H', content: 'Estrutura perguntas essenciais: What (o que), Why (por que), Where (onde), When (quando), Who (quem), How (como), How much (quanto custa/mede).' },
            {
              id: "c10-4-4", type: 'activity', title: 'ATIVIDADE – 5W2H em ação',
              content: [
                { id: 'act10-4-q1', question: 'Escolha uma atividade do processo mapeado anteriormente e aplique o 5W2H completo.', context: 'Responda as 7 perguntas para a atividade escolhida.' },
                { id: 'act10-4-q2', question: 'Surgiu alguma informação que estava implícita?', context: 'Identifique detalhes que não estavam claros antes.' },
                { id: 'act10-4-q3', question: 'Há algo sem justificativa clara (o "Why")?', context: 'Identifique passos que podem ser desnecessários.' }
              ]
            },
            { id: "c10-4-5", type: 'concept', title: '3.4.2 Diagrama SIPOC', content: 'Oferece visão macro: Suppliers (fornecedores), Inputs (entradas), Process (processo), Outputs (saídas), Customers (clientes).' },
            {
              id: "c10-4-6", type: 'activity', title: 'ATIVIDADE – Montando um SIPOC',
              content: [
                { id: 'act10-4-q4', question: 'Usando o mesmo processo mapeado, defina S, I, P, O e C.', context: 'Liste os elementos de cada categoria.' },
                { id: 'act10-4-q5', question: 'Verifique se o "P" está consistente com o fluxograma.', context: 'O Processo macro deve bater com o detalhamento.' },
                { id: 'act10-4-q6', question: 'Destaque clientes internos e externos.', context: 'Quem recebe a saída do processo?' }
              ]
            },
            { id: "c10-4-7", type: 'concept', title: '3.4.3 Jornada do Usuário', content: 'Mapeia a experiência ao longo de etapas, emoções e pontos de contato, permitindo identificar frustrações e oportunidades.' },
            {
              id: "c10-4-8", type: 'activity', title: 'ATIVIDADE – Jornada do usuário em 4 colunas',
              content: [
                { id: 'act10-4-q7', question: 'Crie uma tabela (mental ou rascunho) com 4 colunas: 1. Etapa da jornada; 2. O que o usuário faz; 3. O que o usuário sente; 4. Oportunidades de melhoria. Preencha para o seu cenário.', context: 'Descreva a jornada do ponto de vista do usuário, focando em sentimentos e melhorias.' }
              ]
            }
          ]
        },
        {
          id: "sec-10-5",
          title: "Encerramento e Autoavaliação",
          objective: "Consolidar o aprendizado do módulo.",
          content: [
            { id: "c10-5-1", type: 'header', content: '3.5 Lição aprendida e autoavaliação' },
            { id: "c10-5-2", type: 'paragraph', content: 'Conhecer o negócio do cliente exige curiosidade, empatia, método e técnica. A combinação de entrevistas, shadowing, documentos, processos, 5W2H, SIPOC e Jornada do Usuário transforma o analista em decifrador de processos reais.' },
            { id: "c10-5-3", type: 'checklist', title: 'Checklist de autoavaliação da unidade 3', content: [
              { id: 'cl-10-5-1', text: 'Consigo explicar a diferença entre "pedido" e "necessidade de negócio"?' },
              { id: 'cl-10-5-2', text: 'Sei montar um roteiro básico de entrevista?' },
              { id: 'cl-10-5-3', text: 'Sei planejar um shadowing?' },
              { id: 'cl-10-5-4', text: 'Consigo identificar documentos relevantes?' },
              { id: 'cl-10-5-5', text: 'Sei montar um fluxograma/BPMN simples?' },
              { id: 'cl-10-5-6', text: 'Sei aplicar 5W2H, SIPOC e Jornada do Usuário?' }
            ]},
            {
              id: "c10-5-4", type: 'activity', title: 'Ticket de saída (3–5 linhas)',
              content: [
                { id: 'act10-5-q1', question: '1. Qual técnica desta unidade você mais usaria na prática?', context: 'Resposta pessoal.' },
                { id: 'act10-5-q2', question: '2. O que ainda ficou pouco claro?', context: 'Dúvidas remanescentes.' },
                { id: 'act10-5-q3', question: '3. Em que processo real você gostaria de aplicar essas técnicas?', context: 'Aplicação prática.' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "module-11",
      title: "Aplicando o Conhecimento na Análise de Requisitos (Metodologia Ativa)",
      description: "Transforme o conhecimento de negócio em requisitos assertivos: Tipos de Requisitos, Qualidade, Priorização e Validação.",
      sections: [
        {
          id: "sec-11-1",
          title: "Fundamentos e Objetivos",
          objective: "Entender como traduzir conhecimento de negócio em requisitos claros e testáveis.",
          content: [
            { id: "c11-1-1", type: 'header', content: '4 – Aplicando o Conhecimento na Análise de Requisitos' },
            { id: "c11-1-2", type: 'header', content: '4.1 Objetivos de aprendizagem da unidade' },
            { id: "c11-1-3", type: 'list', content: [
              'Traduzir o entendimento do negócio em requisitos claros e testáveis.',
              'Diferenciar requisitos funcionais, não funcionais e regras de negócio.',
              'Identificar e corrigir problemas comuns em requisitos.',
              'Aplicar critérios de qualidade na redação de requisitos.',
              'Envolver o cliente na validação e priorização dos requisitos.'
            ]},
            { id: "c11-1-4", type: 'header', content: '4.2 Do conhecimento ao requisito' },
            { id: "c11-1-5", type: 'paragraph', content: 'Todo o esforço de conhecer o negócio gera valor quando se transforma em requisitos bem definidos. Requisitos mal escritos geram entregas erradas, retrabalho e desgaste com o cliente.' },
            {
              id: "c11-1-6", type: 'activity', title: 'ATIVIDADE – Momento de reflexão',
              content: [
                { id: 'act11-1-q1', question: 'Pense em uma situação real em que alguém pediu algo de forma vaga e o resultado não foi o esperado. O que foi solicitado?', context: 'Descreva o pedido vago.' },
                { id: 'act11-1-q2', question: 'O que foi entregue?', context: 'Descreva o resultado insatisfatório.' },
                { id: 'act11-1-q3', question: 'Onde houve falha de entendimento?', context: 'Identifique a lacuna de comunicação ou especificação.' }
              ]
            },
            {
              id: "c11-1-7", type: 'activity', title: 'ATIVIDADE – Compartilhando em duplas',
              content: [
                { id: 'act11-1-q4', question: 'Se houvesse um requisito bem escrito para a situação acima, como ele deveria ser?', context: 'Reescreva o pedido como um requisito claro e completo.' }
              ]
            }
          ]
        },
        {
          id: "sec-11-2",
          title: "Tipos de Requisitos e Erros Comuns",
          objective: "Classificar requisitos e identificar erros frequentes.",
          content: [
            { id: "c11-2-1", type: 'header', content: '4.3 Tipos de requisitos' },
            { id: "c11-2-2", type: 'list', content: [
              '**Requisitos funcionais (F):** Descrevem o que o sistema deve fazer.',
              '**Requisitos não funcionais (NF):** Definem atributos de qualidade (desempenho, segurança, usabilidade, disponibilidade etc.).',
              '**Regras de negócio (RN):** Leis, normas e decisões que regem o processo, independentemente da tecnologia.'
            ]},
            {
              id: "c11-2-3", type: 'activity', title: 'ATIVIDADE – Classificando informações',
              content: [
                { id: 'act11-2-q1', question: 'Classifique: "O sistema deve emitir nota fiscal". (F, NF ou RN?)', context: 'Funcional.' },
                { id: 'act11-2-q2', question: 'Classifique: "O tempo de resposta deve ser menor que 2 segundos". (F, NF ou RN?)', context: 'Não Funcional.' },
                { id: 'act11-2-q3', question: 'Classifique: "O cálculo de juros é de 1% ao mês". (F, NF ou RN?)', context: 'Regra de Negócio.' },
                { id: 'act11-2-q4', question: 'Classifique: "O sistema deve rodar em Android e iOS". (F, NF ou RN?)', context: 'Não Funcional.' }
              ]
            },
            { id: "c11-2-4", type: 'header', content: '4.4 Erros comuns em requisitos' },
            { id: "c11-2-5", type: 'list', content: [
              '**Ambiguidade:** "sistema fácil de usar", "ver todos os dados".',
              '**Foco em solução e não em necessidade:** "botão vermelho no canto superior direito...".',
              '**Generalizações perigosas:** "ver tudo", "imprimir tudo".',
              '**Muitos requisitos misturados em uma única frase.**'
            ]},
            {
              id: "c11-2-6", type: 'activity', title: 'ATIVIDADE – Oficina: caça aos problemas',
              content: [
                { id: 'act11-2-q5', question: 'Analise: "O sistema deve ser rápido". Qual o problema?', context: 'Ambiguidade/Vago. O que é rápido?' },
                { id: 'act11-2-q6', question: 'Analise: "Quero uma tela com um grid azul que exporte para Excel e mande e-mail". Qual o problema?', context: 'Foco na solução (design) e mistura de requisitos.' },
                { id: 'act11-2-q7', question: 'Analise: "O gerente deve ter acesso total". Qual o problema?', context: 'Generalização perigosa. O que é acesso total?' }
              ]
            },
            {
              id: "c11-2-7", type: 'activity', title: 'ATIVIDADE – Galeria de problemas',
              content: [
                { id: 'act11-2-q8', question: 'Escolha um dos requisitos problemáticos acima e escreva uma pergunta que você faria ao cliente para esclarecê-lo.', context: 'Ex: "O que define rápido para você? Quantos segundos?"' }
              ]
            }
          ]
        },
        {
          id: "sec-11-3",
          title: "Qualidade, Priorização e Validação",
          objective: "Melhorar, priorizar e validar requisitos.",
          content: [
            { id: "c11-3-1", type: 'header', content: '4.5 Melhorando a qualidade dos requisitos' },
            { id: "c11-3-2", type: 'paragraph', content: 'Um bom requisito é: Claro, Completo, Consistente, Viável e Testável.' },
            { id: "c11-3-3", type: 'list', content: [
              '**Perguntas para orientar a redação:**',
              '- Quem interage?',
              '- O que deve acontecer?',
              '- Em que condições?',
              '- Qual o resultado esperado?',
              '- Há limites, regras ou exceções importantes?'
            ]},
            {
              id: "c11-3-4", type: 'activity', title: 'ATIVIDADE – Oficina de reformulação',
              content: [
                { id: 'act11-3-q1', question: 'Reescreva o requisito "O sistema deve ser rápido" aplicando critérios de qualidade.', context: 'Ex: "O sistema deve carregar a página inicial em até 2 segundos em conexões 4G."' },
                { id: 'act11-3-q2', question: 'Reescreva "O gerente deve ter acesso total".', context: 'Ex: "O perfil Gerente deve poder visualizar, editar e excluir pedidos de sua filial."' }
              ]
            },
            { id: "c11-3-5", type: 'header', content: '4.6 Priorizando e validando requisitos com o cliente' },
            { id: "c11-3-6", type: 'paragraph', content: 'Nem tudo pode ser feito ao mesmo tempo. É preciso priorizar e validar junto com o cliente.' },
            { id: "c11-3-7", type: 'concept', title: 'Técnica MoSCoW', content: '- **M – Must have:** indispensável para o sistema fazer sentido.\n- **S – Should have:** muito importante, mas pode ficar para depois se necessário.\n- **C – Could have:** desejável, mas não essencial.\n- **W – Won’t have:** não será feito agora (futuras versões).' },
            {
              id: "c11-3-8", type: 'activity', title: 'ATIVIDADE – Priorização colaborativa',
              content: [
                { id: 'act11-3-q3', question: 'Imagine um sistema de E-commerce simples. Classifique "Pagamento com Cartão" (M, S, C, W).', context: 'Must have.' },
                { id: 'act11-3-q4', question: 'Classifique "Recomendação personalizada de produtos com IA".', context: 'Could have ou Won\'t have (para um MVP).' },
                { id: 'act11-3-q5', question: 'Classifique "Histórico de Pedidos".', context: 'Should have.' }
              ]
            },
            { id: "c11-3-9", type: 'header', content: 'Validação com o cliente' },
            { id: "c11-3-10", type: 'list', content: [
              '- Apresentar requisitos em linguagem acessível.',
              '- Usar exemplos, fluxos, telas ou jornadas para ilustrar.',
              '- Validar casos típicos e extremos.',
              '- Registrar decisões, dúvidas e ajustes.'
            ]},
            {
              id: "c11-3-11", type: 'activity', title: 'ATIVIDADE – Roteiro de validação',
              content: [
                { id: 'act11-3-q6', question: 'Monte um pequeno roteiro de reunião de validação para os requisitos do E-commerce. O que você mostraria primeiro?', context: 'Ordem de apresentação.' },
                { id: 'act11-3-q7', question: 'Que exemplos/cenários você usaria?', context: 'Casos de uso reais.' },
                { id: 'act11-3-q8', question: 'Quais 3 perguntas-chave faria para checar o entendimento?', context: 'Perguntas de confirmação.' }
              ]
            }
          ]
        },
        {
          id: "sec-11-4",
          title: "Integração e Encerramento",
          objective: "Integrar o processo ao requisito e avaliar o aprendizado.",
          content: [
            { id: "c11-4-1", type: 'header', content: '4.7 Integração: do processo ao requisito' },
            { id: "c11-4-2", type: 'paragraph', content: 'Resumo da lógica: Processo de negócio bem entendido -> Requisitos bem escritos -> Solução coerente -> Valor gerado para o cliente e para o usuário.' },
            {
              id: "c11-4-3", type: 'activity', title: 'ATIVIDADE INTEGRADORA',
              content: [
                { id: 'act11-4-q1', question: 'Em um cenário de sua escolha (Clínica, DTM, SME, SMLU ou outro), liste 3 requisitos funcionais relevantes.', context: 'Lista de requisitos funcionais.' },
                { id: 'act11-4-q2', question: 'Acrescente pelo menos 3 requisitos não funcionais relevantes.', context: 'Lista de RNFs.' },
                { id: 'act11-4-q3', question: 'Inclua de 3 a 5 regras de negócio.', context: 'Lista de RNs.' },
                { id: 'act11-4-q4', question: 'Aplique critérios de qualidade e priorização MoSCoW nesses requisitos.', context: 'Refinamento e priorização.' }
              ]
            },
            { id: "c11-4-4", type: 'header', content: '4.8 Lição aprendida e autoavaliação' },
            { id: "c11-4-5", type: 'paragraph', content: 'Escrever requisitos é um trabalho de análise, síntese e negociação. Quanto melhor a tradução do conhecimento de negócio em requisitos, mais fácil é desenvolver, testar e manter sistemas que façam sentido.' },
            { id: "c11-4-6", type: 'checklist', title: 'Checklist de autoavaliação da unidade 4', content: [
              { id: 'cl-11-4-1', text: 'Sei diferenciar F, NF e RN?' },
              { id: 'cl-11-4-2', text: 'Sei identificar requisitos mal formulados?' },
              { id: 'cl-11-4-3', text: 'Sei reformular requisitos em versões claras e testáveis?' },
              { id: 'cl-11-4-4', text: 'Sei aplicar uma técnica de priorização simples (MoSCoW)?' },
              { id: 'cl-11-4-5', text: 'Consigo estruturar uma reunião de validação de requisitos?' }
            ]},
            {
              id: "c11-4-7", type: 'activity', title: 'Ticket de saída (3–5 linhas)',
              content: [
                { id: 'act11-4-q5', question: '1. Qual foi seu maior insight sobre escrita de requisitos?', context: 'Aprendizado principal.' },
                { id: 'act11-4-q6', question: '2. Que hábito você pretende mudar na forma de registrar pedidos?', context: 'Mudança de comportamento.' },
                { id: 'act11-4-q7', question: '3. Em qual projeto real você gostaria de aplicar essa abordagem?', context: 'Aplicação futura.' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "module-12",
      title: "Negociação e Organização do Trabalho",
      description: "Desenvolver a capacidade de negociar requisitos, alinhar expectativas e organizar o trabalho em equipe de forma colaborativa, usando métodos estruturados de negociação e ferramentas de organização.",
      sections: [
        {
          id: "sec-12-1",
          title: "Visão Geral",
          objective: "Conhecer os objetivos e competências desenvolvidas neste módulo.",
          content: [
            { id: "c12-1-1", type: 'header', content: 'Objetivo Geral' },
            { id: "c12-1-2", type: 'paragraph', content: 'Desenvolver a capacidade de negociar requisitos, alinhar expectativas e organizar o trabalho em equipe de forma colaborativa, usando métodos estruturados de negociação e ferramentas de organização.' },
            { id: "c12-1-3", type: 'subheader', content: 'Competências Desenvolvidas' },
            { id: "c12-1-4", type: 'list', content: [
                'Conduzir negociações com foco em interesses e ganho mútuo.',
                'Aplicar modelos de negociação (Harvard, integrativa, competitiva, FBI, Dale Carnegie, baseada em interesses) a situações reais de projetos.',
                'Priorizar demandas e organizar o fluxo de trabalho do time (Kanban, Matriz de Eisenhower, MoSCoW).',
                'Trabalhar de forma colaborativa e reflexiva, aprendendo com pares.',
                'Usar técnicas de autoavaliação e reflexão para aprimorar seu estilo de negociação.'
            ]},
            { id: "c12-1-5", type: 'subheader', content: 'Metodologias Ativas Utilizadas' },
            { id: "c12-1-6", type: 'list', content: [
                'Sala de aula invertida (estudo prévio + aula prática)',
                'Aprendizagem baseada em problemas (PBL)',
                'Jigsaw (quebra-cabeça)',
                'Simulações / roleplay',
                'Estudos de caso',
                'Oficina prática',
                'Reflexão guiada e autoavaliação'
            ]}
          ]
        },
        {
            id: "sec-12-2",
            title: "Fundamentos de Negociação",
            objective: "Reconhecer situações de negociação, descrever sua importância e identificar elementos básicos de conflitos.",
            content: [
                { id: "c12-2-1", type: 'paragraph', content: 'Nesta seção, você irá conectar suas experiências reais de negociação com conceitos fundamentais do módulo. A partir de um problema típico de analista de requisitos, você refletirá sobre seu estilo atual de negociação e construirá, em grupo, um primeiro entendimento sobre o papel da negociação em projetos de software.' },
                { id: "c12-2-intro-concept", type: 'concept', title: 'O que é Negociação?', content: 'Negociação é o processo onde duas ou mais partes, com interesses comuns e conflitantes, buscam chegar a um acordo mutuamente aceitável. O objetivo é resolver conflitos ou fechar acordos de maneira benéfica para todos os envolvidos. Exemplos variam desde acordos globais (Acordo de Paris) até a compra de um aplicativo (WhatsApp pelo Facebook).' },
                { id: "c12-2-intro-list", type: 'list', content: [
                    '**Posição:** O que a pessoa diz que quer (Ex: "Quero o sistema pronto em 2 meses").',
                    '**Interesse:** Por que a pessoa quer isso (Ex: "Preciso apresentar resultados para a diretoria antes do fim do ano fiscal").',
                    '**Opções:** Soluções possíveis que satisfazem os interesses (Ex: "Entregar um MVP em 2 meses e o resto depois").'
                ]},
                { id: "c12-2-intro-note", type: 'note', title: 'Negociação no dia a dia do Analista', content: 'Como analista, você negocia o tempo todo: prazos com o time técnico, escopo com o cliente, e prioridades com a gerência. Entender a diferença entre "Posição" (o pedido) e "Interesse" (a necessidade real) é a chave para desbloquear impasses.' },
                { id: "c12-2-2", type: 'activity', title: '1. Estudo Prévio', 
                    content: [
                        { id: 'act12-2-q1', question: 'Situação 1: Pense em uma situação recente em que você precisou negociar algo. O que estava em jogo? O que você queria? Qual foi o resultado?', context: 'Reflexão pessoal sobre experiência de negociação.' },
                        { id: 'act12-2-q2', question: 'Situação 2: Descreva outra situação de negociação (trabalho, casa, amigos) onde o resultado não foi o esperado. O que você faria diferente hoje?', context: 'Reflexão crítica sobre negociação.' }
                    ]
                }
            ]
        }
      ]
    }
  ]
};
