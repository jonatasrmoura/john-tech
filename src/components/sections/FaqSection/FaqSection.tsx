import { memo } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../../data/site-data';

export interface FaqSectionProps {
  openFaq: number;
  setOpenFaq: (value: number) => void
}

export const FaqSection = memo(function FaqSection({ openFaq, setOpenFaq }: FaqSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Perguntas frequentes sobre serviços e orçamento</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="rounded-[1.25rem] border border-white/10 bg-black/30">
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between px-5 py-4 text-left text-white">
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown className={`transition ${openFaq === index ? 'rotate-180' : ''}`} size={18} />
                  </button>
                  {openFaq === index && <p className="px-5 pb-5 text-sm leading-8 text-zinc-400">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
    </section>
  );
});
