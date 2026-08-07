import { memo } from 'react';
import { motion } from 'framer-motion';

export interface GallerySectionProps {
  whatsappUrl: string
}

export const GallerySection = memo(function GallerySection({ whatsappUrl }: GallerySectionProps) {
  return (
    <section id="galeria" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Galeria</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Cuidado que aparece em cada detalhe</h2>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-cyan-200">Quero transformar meu computador ?</a>
            </div>
            <div className="grid auto-rows-[160px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Limpeza técnica', 'from-cyan-400/30 via-slate-800 to-black', 'lg:row-span-2'],
                ['Setup gamer', 'from-violet-500/35 via-zinc-800 to-black', ''],
                ['Organização interna', 'from-sky-500/30 via-zinc-800 to-black', ''],
                ['Upgrade de SSD', 'from-indigo-500/35 via-zinc-800 to-black', 'lg:col-span-2'],
                ['Notebook renovado', 'from-cyan-500/25 via-zinc-900 to-black', ''],
              ].map(([title, gradient, span], index) => (
                <motion.article key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} ${span}`}>
                  <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/20 bg-white/5 blur-sm transition duration-500 group-hover:scale-150" />
                  <div className="absolute inset-x-5 bottom-5"><p className="text-sm text-zinc-300">Projeto JohnTech</p><h3 className="text-lg font-semibold text-white">{title}</h3></div>
                </motion.article>
              ))}
            </div>
          </div>
    </section>
  );
});
