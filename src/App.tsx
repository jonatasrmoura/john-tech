import { useMemo, useState } from "react";
import { CpuIcon, Mail, MapPin, MessageCircleMore } from "lucide-react";
import {
  AboutSection,
  BeforeAfterSection,
  BudgetSection,
  ContactSection,
  DiagnosticsSection,
  FaqSection,
  GallerySection,
  HeroSection,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
} from "./components/sections";
import { diagnosticSteps } from "./data/site-data";

export function App() {
  const [selectedEquipment, setSelectedEquipment] = useState("Desktop");
  const [selectedUse, setSelectedUse] = useState("Gamer");
  const [selectedBudget, setSelectedBudget] = useState("Até R$ 2 mil");
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedDiagnostic, setSelectedDiagnostic] = useState(
    diagnosticSteps[0].id,
  );
  const [comparison, setComparison] = useState(52);
  const recommendation = useMemo(() => {
    if (selectedEquipment === "Notebook") {
      if (selectedUse === "Gamer")
        return "Notebook gamer com melhor resfriamento, SSD e upgrade de RAM.";
      if (selectedUse === "Edição")
        return "Notebook com processador mais forte e armazenamento rápido.";
      return "Notebook confiável com foco em conforto, bateria e performance estável.";
    }
    if (selectedUse === "Gamer")
      return "Montagem gamer com placa dedicada, SSD NVMe e refrigeração de alto nível.";
    if (selectedUse === "Programação")
      return "Desktop com excelente multitarefa, SSD rápido e memória generosa.";
    if (selectedUse === "Edição")
      return "Desktop potente, ideal para edição e renderização.";
    return "Desktop equilibrado, robusto e com ótimo custo-benefício.";
  }, [selectedEquipment, selectedUse]);
  const diagnosticSuggestion = diagnosticSteps.find(
    (step) => step.id === selectedDiagnostic,
  );
  const whatsappUrl = `https://wa.me/5512997058973?text=${encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para ${selectedEquipment.toLowerCase()} para ${selectedUse.toLowerCase()} na faixa ${selectedBudget}.`)}`;
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,191,255,0.15),_transparent_35%),_linear-gradient(135deg,_#050505,_#0a0a0a_60%,_#111111)] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300">
              <CpuIcon size={17} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold uppercase tracking-[.24em] text-zinc-200">
                JohnTech
              </span>
              <span className="hidden text-[10px] text-zinc-500 sm:block">
                Assistência Técnica Premium
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            <a href="#servicos" className="transition hover:text-cyan-300">
              Serviços
            </a>
            <a href="#como-funciona" className="transition hover:text-cyan-300">
              Como funciona
            </a>
            <a href="#orcamento" className="transition hover:text-cyan-300">
              Orçamento
            </a>
            <a href="#contato" className="transition hover:text-cyan-300">
              Contato
            </a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:scale-[1.03] hover:bg-cyan-400/20 sm:px-4 sm:text-sm"
          >
            <MessageCircleMore size={16} />
            WhatsApp
          </a>
        </div>
      </header>
      <main id="inicio">
        <HeroSection whatsappUrl={whatsappUrl} />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <BudgetSection
          selectedEquipment={selectedEquipment}
          setSelectedEquipment={setSelectedEquipment}
          selectedUse={selectedUse}
          setSelectedUse={setSelectedUse}
          selectedBudget={selectedBudget}
          setSelectedBudget={setSelectedBudget}
          recommendation={recommendation}
          whatsappUrl={whatsappUrl}
        />
        <DiagnosticsSection
          selectedDiagnostic={selectedDiagnostic}
          setSelectedDiagnostic={setSelectedDiagnostic}
          diagnosticSuggestion={diagnosticSuggestion}
        />
        <GallerySection whatsappUrl={whatsappUrl} />
        <BeforeAfterSection
          comparison={comparison}
          setComparison={setComparison}
        />
        <TestimonialsSection />
        <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <ContactSection whatsappUrl={whatsappUrl} />
      </main>
      <footer className="border-t border-white/10 bg-black/30 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm sm:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.9fr]">
          <div>
            <p className="text-base font-semibold uppercase tracking-[.22em] text-white">
              JohnTech
            </p>
            <p className="mt-3 max-w-sm leading-6 text-zinc-400">
              Assistência técnica especializada para computadores e notebooks em
              São José dos Campos.
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-200">Navegação</p>
            <div className="mt-3 grid gap-2 text-zinc-400">
              <a href="#servicos" className="hover:text-cyan-300">
                Serviços
              </a>
              <a href="#orcamento" className="hover:text-cyan-300">
                Orçamento inteligente
              </a>
              <a href="#contato" className="hover:text-cyan-300">
                Contato
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-zinc-200">Fale conosco</p>
            <div className="mt-3 grid gap-2 text-zinc-400">
              <a
                className="inline-flex items-center gap-2 hover:text-cyan-300"
                href={whatsappUrl}
              >
                <MessageCircleMore size={15} />
                (12) 99705-8973
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-cyan-300"
                href="mailto:jonatas.rmoura@outlook.com"
              >
                <Mail size={15} />
                Enviar e-mail
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} />
                São José dos Campos – SP
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-zinc-600">
          © 2026 JohnTech. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
