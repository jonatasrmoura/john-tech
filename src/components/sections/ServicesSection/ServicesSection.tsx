import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { services } from '../../../data/site-data';

const whatsappNumber = '5512997058973';
const serviceWhatsAppUrl = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export type ServicesSectionProps = Record<string, never>;

export const ServicesSection = memo(function ServicesSection() {
  return <section id="servicos" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Serviços</p><h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Soluções técnicas para cada etapa do seu equipamento</h2></div><a href="#contato" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">Solicitar um orçamento personalizado <ChevronRight size={16} /></a></div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => { const Icon = service.icon; return <motion.article key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="group flex min-h-72 flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"><Icon size={20} /></div><h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3><p className="mt-3 text-sm leading-7 text-zinc-400">{service.description}</p><a href={serviceWhatsAppUrl(service.whatsappMessage)} target="_blank" rel="noreferrer" aria-label={`Solicitar orçamento para ${service.title} no WhatsApp`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">Solicitar agora <ArrowRight size={15} /></a></motion.article>; })}
      </div>
    </div>
  </section>;
});
