import { memo } from 'react';
import { motion } from 'framer-motion';
import { differences } from '../../../data/site-data';

export type AboutSectionProps = Record<string, never>;

export const AboutSection = memo(function AboutSection({  }: AboutSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Quem somos</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">JohnTech, cuidado técnico e estética premium</h2>
              <p className="mt-5 text-zinc-400 leading-8">Jonatas, técnico em Tecnologia da Informação formado no SENAC São José dos Campos em 2019, cria soluções com foco em performance, organização e confiança. Cada atendimento é tratado como um projeto de alto padrão.</p>
              <div className="mt-8 rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-zinc-300">
                <p className="font-semibold text-cyan-200">São José dos Campos - SP</p>
                <p className="mt-2">Atendimento especializado para pessoas físicas, empresas, escritórios, gamers e pequenos negócios.</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {differences.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
    </section>
  );
});
