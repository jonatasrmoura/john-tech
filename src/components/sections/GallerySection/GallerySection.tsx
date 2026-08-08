import { memo } from 'react';
import { motion } from 'framer-motion';
import limpezaTecnica from '../../../assets/images/limpeza-tecnica.png';
import notebookRenovado from '../../../assets/images/notebook-renovado.png';
import organizacaoInterna from '../../../assets/images/organizacao-interna.png';
import setupGamer from '../../../assets/images/setup-gamer.png';
import upgradeSsd from '../../../assets/images/upgrade-ssd.png';

export interface GallerySectionProps { whatsappUrl: string }

const galleryItems = [
  { title: 'Limpeza técnica', image: limpezaTecnica, span: 'sm:row-span-2', position: 'object-center' },
  { title: 'Setup gamer', image: setupGamer, span: '', position: 'object-center' },
  { title: 'Organização interna', image: organizacaoInterna, span: '', position: 'object-center' },
  { title: 'Upgrade de SSD', image: upgradeSsd, span: 'sm:col-span-2', position: 'object-center' },
  { title: 'Notebook renovado', image: notebookRenovado, span: '', position: 'object-center' },
] as const;

export const GallerySection = memo(function GallerySection({ whatsappUrl }: GallerySectionProps) {
  return <section id="galeria" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Galeria</p><h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Cuidado que aparece em cada detalhe</h2></div>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">Quero transformar meu computador →</a>
      </div>
      <div className="grid gap-4 sm:auto-rows-[180px] sm:grid-cols-2 lg:auto-rows-[200px] lg:grid-cols-4">
        {galleryItems.map(({ title, image, span, position }, index) => <motion.article key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className={`group relative min-h-60 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 sm:min-h-0 ${span}`}>
          <img src={image} alt={title} loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${position} transition duration-700 ease-out group-hover:scale-105`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
          <div className="absolute inset-x-5 bottom-5"><p className="text-sm text-zinc-300">Projeto JohnTech</p><h3 className="text-lg font-semibold text-white">{title}</h3></div>
        </motion.article>)}
      </div>
    </div>
  </section>;
});
