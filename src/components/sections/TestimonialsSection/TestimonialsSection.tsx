import { memo } from 'react';
import { Star } from 'lucide-react';

export type TestimonialsSectionProps = Record<string, never>;

export const TestimonialsSection = memo(function TestimonialsSection({  }: TestimonialsSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Depoimentos</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Clientes que valorizaram a experiência e a entrega</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: 'Marina', role: 'Escritório', text: 'Notebook voltou a funcionar com velocidade de novo. Atendimento impecável.' },
                { name: 'Rafael', role: 'Gamer', text: 'Montagem do PC foi perfeita, com uma indicação excelente de peças.' },
                { name: 'Ana', role: 'Home Office', text: 'Recuperação de arquivos e limpeza fizeram diferença enorme no dia a dia.' },
              ].map((testimonial) => (
                <div key={testimonial.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-1 text-cyan-300">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
                  </div>
                  <p className="mt-5 text-zinc-300 leading-8">“{testimonial.text}”</p>
                  <div className="mt-6">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </section>
  );
});
