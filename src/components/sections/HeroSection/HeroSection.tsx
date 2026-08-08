import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge, MessageCircleMore, Sparkles, Zap, MapPin } from 'lucide-react';
import heroVisual from '../../../assets/hero.png';

export interface HeroSectionProps { whatsappUrl: string }

const specialties = ['Formatação de sistema', 'Upgrade de hardware', 'Limpeza interna', 'Visita técnica (SJC)', 'PC gamer sob medida'];
const performanceStats = [{ label: 'Inicialização', value: 'Mais rápida' }, { label: 'Armazenamento', value: 'SSD NVMe' }, { label: 'Temperatura', value: 'Controlada' }, { label: 'Proteção', value: 'Em dia' }];

export const HeroSection = memo(function HeroSection({ whatsappUrl }: HeroSectionProps) {
  return <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-20">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
        <div className="mb-6 flex flex-wrap gap-2.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-200"><Sparkles size={14} /> Tecnologia, cuidado e transparência</div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300"><MapPin size={14} /> Visita técnica e Leva & Traz em SJC</div>
        </div>
        <h1 className="text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-7xl">JohnTech<span className="mt-3 block text-2xl font-medium text-zinc-300 sm:text-3xl lg:text-4xl">Assistência técnica para computadores e notebooks</span></h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-400 sm:text-xl">Diagnóstico preciso e soluções que deixam seu equipamento mais rápido, seguro e pronto para sua rotina.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#orcamento" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-300">Solicitar orçamento <ArrowRight size={18} /></a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:border-cyan-400/50 hover:bg-cyan-400/10"><MessageCircleMore size={18} /> Chamar no WhatsApp</a></div>
        <div className="mt-8 flex flex-wrap gap-2 text-sm text-zinc-400">{specialties.map((specialty) => <span key={specialty} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{specialty}</span>)}</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative"><div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-3xl" /><img src={heroVisual} alt="Ilustração tecnológica da JohnTech" className="pointer-events-none absolute -right-6 -top-20 w-56 opacity-65 mix-blend-screen sm:w-72" /><div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_0_80px_rgba(0,191,255,0.16)] backdrop-blur-2xl"><div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.03))] p-6"><div className="mb-6 flex items-center justify-between"><div><p className="text-sm text-zinc-400">Seu equipamento, melhor cuidado</p><p className="text-xl font-semibold text-white">Performance otimizada</p></div><div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300"><Gauge size={22} /></div></div><div className="grid gap-4 sm:grid-cols-2">{performanceStats.map((item) => <div key={item.label} className="rounded-2xl border border-white/10 bg-black/30 p-4"><p className="text-sm text-zinc-400">{item.label}</p><p className="mt-2 text-2xl font-semibold text-white">{item.value}</p></div>)}</div><div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-zinc-200"><div className="flex items-center gap-2 font-semibold text-cyan-200"><Zap size={16} /> Diagnóstico técnico</div><p className="mt-2">Entendemos a causa do problema antes de recomendar qualquer serviço.</p></div></div></div></motion.div>
    </div>
  </section>;
});
