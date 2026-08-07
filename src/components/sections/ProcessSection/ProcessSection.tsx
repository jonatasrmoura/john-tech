import { memo } from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../../../data/site-data';

export type ProcessSectionProps = Record<string, never>;

export const ProcessSection = memo(function ProcessSection({  }: ProcessSectionProps) {
  return (
    <section id="como-funciona" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-black/30 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-10 lg:p-14">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Como funciona</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Processo simples, transparente e pensado para gerar confiança</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.07 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-lg font-semibold text-cyan-200">0{index + 1}</div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
    </section>
  );
});
