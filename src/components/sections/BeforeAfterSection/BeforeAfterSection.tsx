import { memo } from 'react';
import pcGamerAntes from '../../../assets/images/pcgamer-antes.png';
import pcGamerDepois from '../../../assets/images/pcgamer-depois.png';

export interface BeforeAfterSectionProps { comparison: number; setComparison: (value: number) => void }

export const BeforeAfterSection = memo(function BeforeAfterSection({ comparison, setComparison }: BeforeAfterSectionProps) {
  const beforeImageWidth = `${10000 / Math.max(comparison, 1)}%`;
  return <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-10">
      <div className="mb-7 max-w-2xl sm:mb-8"><p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Antes e depois</p><h2 className="mt-3 text-3xl font-semibold text-white">Sinta a diferença na rotina</h2></div>
      <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 sm:h-80 lg:h-[420px]">
        <img src={pcGamerDepois} alt="PC gamer depois da organização e limpeza técnica" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-cyan-300" style={{ width: `${comparison}%` }}><img src={pcGamerAntes} alt="PC gamer antes da organização e limpeza técnica" className="h-full max-w-none object-cover object-center" style={{ width: beforeImageWidth }} /></div>
        <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs font-bold tracking-wide text-white">ANTES</span><span className="absolute right-4 top-4 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold tracking-wide text-black">DEPOIS</span>
        <span aria-hidden="true" className="absolute top-1/2 z-10 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-black/70 text-lg text-white shadow-[0_0_20px_rgba(0,229,255,.55)]" style={{ left: `${comparison}%` }}>↔</span>
        <input 
          aria-label="Comparar antes e depois do PC gamer" 
          type="range" 
          min="0" 
          max="100" 
          value={comparison} 
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={comparison}
          aria-valuetext={`Progresso da comparação: ${comparison}% do estado Depois visível`}
          onChange={(event) => setComparison(Number(event.target.value))} 
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0" 
        />
        <p className="absolute inset-x-4 bottom-4 rounded-lg bg-black/50 px-3 py-2 text-xs leading-5 text-zinc-200 backdrop-blur-sm sm:inset-x-5 sm:text-sm">Arraste para comparar o PC gamer antes e depois do cuidado JohnTech.</p>
      </div>
    </div>
  </section>;
});
