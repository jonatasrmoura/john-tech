import { memo } from 'react';

export interface BeforeAfterSectionProps {
  comparison: number;
  setComparison: (value: number) => void
}

export const BeforeAfterSection = memo(function BeforeAfterSection({ comparison, setComparison }: BeforeAfterSectionProps) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-10">
            <div className="mb-8 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Antes e depois</p><h2 className="mt-3 text-3xl font-semibold text-white">Sinta a diferença na rotina</h2></div>
            <div className="relative h-64 overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 sm:h-80">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(0,229,255,.35),transparent_28%),linear-gradient(130deg,#0d2430,#080b10_60%)]" />
              <div className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-cyan-300" style={{ width: `${comparison}%` }}><div className="h-full w-[100vw] bg-[radial-gradient(circle_at_25%_55%,rgba(124,58,237,.4),transparent_20%),linear-gradient(130deg,#25151e,#10090c_60%)]" /><span className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white">ANTES</span></div>
              <span className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-black">DEPOIS</span>
              <div className="absolute inset-x-5 bottom-5 text-sm text-zinc-300">Deslize para comparar o equipamento antes e depois do cuidado JohnTech.</div>
              <input aria-label="Comparar antes e depois" type="range" min="0" max="100" value={comparison} onChange={(event) => setComparison(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
            </div>
          </div>
    </section>
  );
});
