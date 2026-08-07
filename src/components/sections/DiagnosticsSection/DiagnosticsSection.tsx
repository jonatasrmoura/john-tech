import { memo } from 'react';
import * as Icons from 'lucide-react';
import { diagnosticSteps } from '../../../data/site-data';

export interface DiagnosticsSectionProps {
  selectedDiagnostic: string;
  setSelectedDiagnostic: (value: string) => void;
  diagnosticSuggestion: { title: string;
  detail: string } | undefined
}

export const DiagnosticsSection = memo(function DiagnosticsSection({ selectedDiagnostic, setSelectedDiagnostic, diagnosticSuggestion }: DiagnosticsSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-black/30 p-8 backdrop-blur-2xl sm:p-10 lg:p-14">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Assistente de diagnóstico</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Encontre a causa provável do problema no seu equipamento</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-3">
                {diagnosticSteps.map((step) => (
                  <button key={step.id} onClick={() => setSelectedDiagnostic(step.id)} className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${selectedDiagnostic === step.id ? 'border-cyan-400/40 bg-cyan-400/10 text-white' : 'border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10'}`}>
                    <span className="font-semibold">{step.title}</span>
                    <Icons.ChevronRight size={16} />
                  </button>
                ))}
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 text-cyan-200">
                  <Icons.ScanSearch size={18} />
                  <p className="text-sm font-semibold uppercase tracking-[0.3em]">Possível causa</p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{diagnosticSuggestion?.title}</h3>
                <p className="mt-4 text-zinc-400 leading-8">{diagnosticSuggestion?.detail}</p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                  <Icons.ShieldCheck size={16} /> Recomendação técnica especializada
                </div>
              </div>
            </div>
          </div>
    </section>
  );
});
