import { memo } from 'react';
import { MessageCircleMore, Mail, MapPin, Phone } from 'lucide-react';

export interface ContactSectionProps {
  whatsappUrl: string
}

export const ContactSection = memo(function ContactSection({ whatsappUrl }: ContactSectionProps) {
  return (
    <section id="contato" className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,_rgba(0,191,255,0.16),_rgba(124,58,237,0.12))] p-8 shadow-[0_0_80px_rgba(0,191,255,0.12)] backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Contato</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Seu computador merece atenção de verdade</h2>
                <p className="mt-5 max-w-xl text-zinc-300 leading-8">Solicite um orçamento agora e descubra as melhores soluções para deixar seu equipamento mais rápido, seguro e preparado para o seu dia a dia.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]">
                    Falar no WhatsApp <MessageCircleMore size={18} />
                  </a>
                  <a href="mailto:jonatas.rmoura@outlook.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-white/10">
                    <Mail size={18} /> Enviar mensagem
                  </a>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
                <div className="flex items-center gap-3 text-cyan-200">
                  <MapPin size={18} />
                  <p className="text-sm font-semibold uppercase tracking-[0.3em]">Localização</p>
                </div>
                <p className="mt-4 text-xl font-semibold text-white">São José dos Campos - SP</p>
                <div className="mt-8 space-y-4 text-zinc-300">
                  <div className="flex items-center gap-3"><Phone size={18} className="text-cyan-300" /> (12) 99705-8973</div>
                  <div className="flex items-center gap-3"><Mail size={18} className="text-cyan-300" /> jonatas.rmoura@outlook.com</div>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
});
