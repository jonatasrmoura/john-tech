import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, CircleDollarSign, Clock3, Cpu, Gamepad2, HardDrive, HeartHandshake, KeyRound, Laptop2, MapPin, Microscope, MonitorSmartphone, Shield, ShieldCheck, Sparkles, Wrench } from 'lucide-react';

export type Service = Readonly<{ icon: LucideIcon; title: string; description: string; whatsappMessage: string }>;
export type ProcessStep = Readonly<{ title: string; description: string }>;
export type Difference = Readonly<{ icon: LucideIcon; title: string; description: string }>;
export type Faq = Readonly<{ question: string; answer: string }>;
export type DiagnosticStep = Readonly<{ id: string; title: string; detail: string }>;

export const services: readonly Service[] = [
  { icon: Wrench, title: 'Formatação de sistema', description: 'Windows, Linux ou macOS instalados e configurados para o seu uso.', whatsappMessage: 'Olá! Gostaria de um orçamento para formatação de sistema operacional.' },
  { icon: Cpu, title: 'Manutenção preventiva', description: 'Revisão técnica para manter seu equipamento estável, silencioso e confiável.', whatsappMessage: 'Olá! Gostaria de um orçamento para manutenção preventiva.' },
  { icon: MapPin, title: 'Visita técnica & Delivery', description: 'Atendimento e reparo presencial em São José dos Campos ou serviço de retirada e entrega (Leva & Traz) com total comodidade.', whatsappMessage: 'Olá! Gostaria de agendar uma visita técnica ou solicitar o serviço Leva & Traz para meu equipamento.' },
  { icon: Sparkles, title: 'Limpeza interna', description: 'Remoção de poeira e revisão térmica para melhorar a refrigeração.', whatsappMessage: 'Olá! Gostaria de um orçamento para limpeza interna do meu computador.' },
  { icon: HardDrive, title: 'Upgrade de hardware', description: 'SSD, memória RAM e componentes certos para ganhar desempenho de verdade.', whatsappMessage: 'Olá! Gostaria de um orçamento para upgrade de hardware.' },
  { icon: HardDrive, title: 'Recuperação de arquivos', description: 'Análise cuidadosa para recuperar documentos, fotos e dados importantes.', whatsappMessage: 'Olá! Preciso de ajuda com recuperação de arquivos.' },
  { icon: ShieldCheck, title: 'Remoção de vírus', description: 'Eliminação de ameaças e reforço da proteção do seu sistema.', whatsappMessage: 'Olá! Gostaria de um orçamento para remoção de vírus.' },
  { icon: Laptop2, title: 'Notebook sob medida', description: 'Ajustes e upgrades pensados para sua rotina, trabalho ou estudos.', whatsappMessage: 'Olá! Gostaria de um orçamento para personalizar meu notebook.' },
  { icon: MonitorSmartphone, title: 'Montagem de computadores', description: 'PCs equilibrados para jogos, escritório, estudos ou criação.', whatsappMessage: 'Olá! Gostaria de um orçamento para montagem de computador.' },
  { icon: Gamepad2, title: 'PC gamer personalizado', description: 'Configuração gamer alinhada aos seus jogos, metas de desempenho e orçamento.', whatsappMessage: 'Olá! Quero montar um PC gamer de acordo com meu perfil.' },
  { icon: KeyRound, title: 'Recuperação de acesso', description: 'Ajuda para recuperar o acesso ao Windows e aos seus dados com segurança.', whatsappMessage: 'Olá! Preciso de ajuda para recuperar o acesso ao Windows.' },
  { icon: Wrench, title: 'Reparo do sistema', description: 'Correção de falhas, inicialização lenta e arquivos do sistema corrompidos.', whatsappMessage: 'Olá! Gostaria de um orçamento para reparar meu sistema operacional.' },
];

export const processSteps: readonly ProcessStep[] = [
  { title: 'Diagnóstico', description: 'Analisamos sintomas, desempenho e hardware.' }, { title: 'Orçamento', description: 'Montamos uma solução clara e transparente.' }, { title: 'Aprovação', description: 'Você confirma o plano sem surpresas.' }, { title: 'Execução', description: 'Realizamos o serviço com precisão e cuidado.' }, { title: 'Entrega', description: 'Devolvemos o equipamento pronto e testado.' },
];
export const differences: readonly Difference[] = [
  { icon: HeartHandshake, title: 'Atendimento personalizado', description: 'Cada atendimento é pensado para o seu cenário.' }, { icon: Microscope, title: 'Diagnóstico completo', description: 'Investigamos a causa raiz antes de qualquer intervenção.' }, { icon: Shield, title: 'Peças de qualidade', description: 'Trabalhamos com componentes confiáveis e duradouros.' }, { icon: CircleDollarSign, title: 'Preço justo', description: 'Soluções eficientes com orçamento claro e racional.' }, { icon: Clock3, title: 'Atendimento rápido', description: 'Tempo de resposta ágil e foco em resolver.' }, { icon: BadgeCheck, title: 'Suporte pós-serviço', description: 'Você conta com suporte após a entrega.' },
];
export const faqs: readonly Faq[] = [
  { question: 'Vocês realizam visita técnica domiciliar ou buscam o equipamento?', answer: 'Sim! Realizamos visitas técnicas com atendimento e reparo direto na casa ou escritório do cliente, disponível exclusivamente para a cidade de São José dos Campos (sujeito a taxa de locomoção do técnico). Também oferecemos o serviço "Leva & Traz": retiramos seu computador ou notebook e o entregamos de volta pronto e testado, com taxa de locomoção calculada sob medida de acordo com a distância percorrida.' }, { question: 'Quanto custa uma manutenção de notebook?', answer: 'O valor varia conforme diagnóstico, peça e prazo. Solicite um orçamento personalizado.' }, { question: 'Posso levar meu PC para revisão?', answer: 'Sim. Recebemos equipamentos e também realizamos atendimento sob demanda.' }, { question: 'Vocês fazem recuperação de arquivos?', answer: 'Sim. Trabalhamos com uma estratégia cautelosa para cada tipo de falha.' }, { question: 'É possível montar um PC gamer?', answer: 'Claro. Montamos computadores sob medida para jogos, edição e uso profissional.' },
];
export const equipmentOptions = ['Desktop', 'Notebook'] as const;
export const useOptions = ['Gamer', 'Escritório', 'Estudos', 'Edição', 'Programação'] as const;
export const budgetOptions = ['Até R$ 2 mil', 'R$ 2 mil a R$ 5 mil', 'Acima de R$ 5 mil'] as const;
export const diagnosticSteps: readonly DiagnosticStep[] = [
  { id: 'slow', title: 'Meu computador está lento', detail: 'Pode indicar excesso de arquivos, vírus ou falta de SSD e RAM.' }, { id: 'offline', title: 'Não liga', detail: 'Avaliaremos fonte, placa-mãe, bateria e conectores.' }, { id: 'overheat', title: 'Está superaquecendo', detail: 'Podemos revisar ventilação, pasta térmica e limpeza interna.' }, { id: 'noise', title: 'Faz muito barulho', detail: 'Pode indicar ventilador, disco rígido ou desgaste mecânico.' },
];
