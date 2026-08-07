import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, CircleDollarSign, Clock3, Cpu, HardDrive, HeartHandshake, Laptop2, Microscope, MonitorSmartphone, Shield, ShieldCheck, Wrench } from 'lucide-react';

export type Service = { icon: LucideIcon; title: string; description: string };
export type ProcessStep = { title: string; description: string };
export type Difference = { icon: LucideIcon; title: string; description: string };
export type Faq = { question: string; answer: string };
export type DiagnosticStep = { id: string; title: string; detail: string };

export const services: Service[] = [
  { icon: Wrench, title: 'Formatação Windows', description: 'Sistema limpo, sem travamentos e pronto para trabalhar.' },
  { icon: Cpu, title: 'Upgrade SSD', description: 'Mais velocidade, boot instantâneo e resposta superior.' },
  { icon: HardDrive, title: 'Recuperação de Arquivos', description: 'Recupere dados importantes com segurança e cuidado.' },
  { icon: ShieldCheck, title: 'Remoção de Vírus', description: 'Proteção completa contra ameaças e ameaças persistentes.' },
  { icon: Laptop2, title: 'Notebook Personalizado', description: 'Performance alinhada ao seu uso diário e orçamento.' },
  { icon: MonitorSmartphone, title: 'Montagem de Computadores', description: 'PCs sob medida para gamer, escritório e estudos.' },
];

export const processSteps: ProcessStep[] = [
  { title: 'Diagnóstico', description: 'Analisamos sintomas, performance e hardware.' }, { title: 'Orçamento', description: 'Montamos uma solução clara e transparente.' }, { title: 'Aprovação', description: 'Você confirma o plano sem surpresas.' }, { title: 'Execução', description: 'Realizamos o serviço com precisão e cuidado.' }, { title: 'Entrega', description: 'Devolvemos o equipamento pronto e testado.' },
];

export const differences: Difference[] = [
  { icon: HeartHandshake, title: 'Atendimento Personalizado', description: 'Cada atendimento é pensado para o seu cenário.' }, { icon: Microscope, title: 'Diagnóstico Completo', description: 'Investigamos a causa raiz antes de qualquer intervenção.' }, { icon: Shield, title: 'Peças de Qualidade', description: 'Trabalhamos com componentes confiáveis e duradouros.' }, { icon: CircleDollarSign, title: 'Preço Justo', description: 'Soluções eficientes com orçamento claro e racional.' }, { icon: Clock3, title: 'Atendimento Rápido', description: 'Tempo de resposta ágil e foco em resolver.' }, { icon: BadgeCheck, title: 'Suporte Pós Serviço', description: 'Você conta com suporte após a entrega do serviço.' },
];

export const faqs: Faq[] = [
  { question: 'Quanto custa uma manutenção de notebook?', answer: 'O valor varia conforme diagnóstico, peça e prazo. O melhor é solicitar um orçamento personalizado.' }, { question: 'Posso levar meu PC para revisão?', answer: 'Sim. Recebemos equipamentos em loja e também realizamos atendimento sob demanda.' }, { question: 'Vocês fazem recuperação de arquivos?', answer: 'Sim. Trabalhamos com recuperação cautelosa e estratégia conforme o tipo de falha.' }, { question: 'É possível montar um PC gamer?', answer: 'Claro. Montamos computadores sob medida para jogos, edição e uso profissional.' },
];

export const equipmentOptions = ['Desktop', 'Notebook'] as const;
export const useOptions = ['Gamer', 'Escritório', 'Estudos', 'Edição', 'Programação'] as const;
export const budgetOptions = ['Até R$ 2 mil', 'R$ 2 mil a R$ 5 mil', 'Acima de R$ 5 mil'] as const;
export const diagnosticSteps: DiagnosticStep[] = [
  { id: 'slow', title: 'Meu computador está lento', detail: 'Pode indicar excesso de arquivos, vírus ou falta de SSD/ram.' }, { id: 'offline', title: 'Não liga', detail: 'Avaliaremos fonte, placa-mãe, bateria e conectores.' }, { id: 'overheat', title: 'Está superaquecendo', detail: 'Podemos revisar ventilação, pasta térmica e limpeza interna.' }, { id: 'noise', title: 'Faz muito barulho', detail: 'Pode significar ventilador, disco rígido ou desgaste mecânico.' },
];
