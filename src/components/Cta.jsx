import { ArrowRight } from "lucide-react";

export function ContactSection({ onOpenModal }) {
  return (
    <section
      id="contact"
      role="region"
      aria-labelledby="contact-title"
      className="relative py-32 px-4 bg-[#FAFAFA]"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      {/* Blue accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="border border-[#E5E5E5] bg-white p-16 md:p-20 text-center">

          <div className="inline-block px-4 py-1 mb-10 border border-[#E5E5E5]">
            <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
              Parlons de votre projet
            </span>
          </div>

          <h2
            id="contact-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]"
          >
            Un projet en{" "}
            <span className="text-[#0066FF]">tête</span> ?
          </h2>

          <p className="text-lg text-[#666666] max-w-xl mx-auto leading-relaxed mb-12 font-light">
            Discutons-en ensemble. Que ce soit pour une simple question ou un projet déjà bien défini, nous sommes à votre écoute pour vous aider à concrétiser votre idée.
          </p>

          <button
            type="button"
            onClick={() => onOpenModal('general')}
            className="group relative px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300 mb-10"
          >
            <span className="flex items-center gap-3">
              Discuter de mon projet
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </button>

          {/* Micro-promises */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Sans engagement",
              "Tarifs transparents",
              "Premier échange offert"
            ].map((promise, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 bg-[#0066FF]" />
                <span className="text-sm text-[#666666] font-light">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
