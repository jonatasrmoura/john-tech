import { memo } from 'react';
import * as Icons from 'lucide-react';
import { budgetOptions,equipmentOptions,useOptions } from '../../../data/site-data';

export interface BudgetSectionProps {
  selectedEquipment: string;
  setSelectedEquipment: (value: string) => void;
  selectedUse: string;
  setSelectedUse: (value: string) => void;
  selectedBudget: string;
  setSelectedBudget: (value: string) => void;
  recommendation: string;
  whatsappUrl: string
}

export const BudgetSection = memo(function BudgetSection({ selectedEquipment, setSelectedEquipment, selectedUse, setSelectedUse, selectedBudget, setSelectedBudget, recommendation, whatsappUrl }: BudgetSectionProps) {
  return (
    <section id="orcamento" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Orçamento inteligente</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Descubra a melhor solução para o seu equipamento</h2>
              <p className="mt-5 text-zinc-400 leading-8">Escolha o tipo de equipamento, o uso principal e a faixa de orçamento. A recomendação abaixo já te direciona para a solução ideal.</p>

              <div className="mt-8 space-y-6">
                <div>
                  <label className="mb-3 block text-sm font-semibold text-zinc-300">Tipo de equipamento</label>
                  <div className="flex flex-wrap gap-3">
                    {equipmentOptions.map((option) => (
                      <button key={option} onClick={() => setSelectedEquipment(option)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedEquipment === option ? 'bg-cyan-400 text-black' : 'bg-white/5 text-zinc-300 hover:bg-white/10'}`}>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-3 block text-sm font-semibold text-zinc-300">Uso principal</label>
                  <div className="flex flex-wrap gap-3">
                    {useOptions.map((option) => (
                      <button key={option} onClick={() => setSelectedUse(option)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedUse === option ? 'bg-cyan-400 text-black' : 'bg-white/5 text-zinc-300 hover:bg-white/10'}`}>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-3 block text-sm font-semibold text-zinc-300">Faixa de orçamento</label>
                  <div className="flex flex-wrap gap-3">
                    {budgetOptions.map((option) => (
                      <button key={option} onClick={() => setSelectedBudget(option)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedBudget === option ? 'bg-cyan-400 text-black' : 'bg-white/5 text-zinc-300 hover:bg-white/10'}`}>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,_rgba(0,191,255,0.12),_rgba(124,58,237,0.12))] p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-cyan-200">
                <Icons.CircleDollarSign size={20} />
                <p className="text-sm font-semibold uppercase tracking-[0.3em]">Recomendação personalizada</p>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{recommendation}</h3>
              <p className="mt-4 text-zinc-300 leading-8">Nossa sugestão considera performance, estabilidade e custo-benefício para o seu cenário.</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]">
                Solicitar este orçamento no WhatsApp <Icons.ArrowRight size={18} />
              </a>
            </div>
          </div>
    </section>
  );
});
