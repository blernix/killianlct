import { Rocket, Target, Shield } from "lucide-react";

export default function ValueProposition() {
  return (
    <section
      role="region"
      aria-label="Notre philosophie de travail"
      className="relative w-full px-4 py-32 bg-white"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-24">
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
            <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
              Pourquoi nous choisir ?
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] leading-[1.1] max-w-4xl">
            Des résultats mesurables,<br />
            <span className="text-[#0066FF]">pas des promesses</span>
          </h2>
        </div>

        {/* Cards grid - Perfect alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5]">
          {/* Card 1 */}
          <div className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300">
            <div className="w-12 h-12 flex items-center justify-center border border-[#0066FF] mb-8">
              <Rocket className="h-6 w-6 text-[#0066FF]" />
            </div>
            <h3 className="text-2xl font-light text-[#2A2A2A] mb-4">
              Livraison en<br />3 Semaines
            </h3>
            <p className="text-[#666666] leading-relaxed mb-6 font-light">
              Pas de projets qui traînent pendant 6 mois. Nous travaillons en sprints courts avec des livrables concrets chaque semaine.
            </p>
            <div className="inline-block px-3 py-1 border border-[#0066FF]">
              <span className="text-xs font-medium text-[#0066FF] uppercase tracking-wide">
                3× plus rapide
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300">
            <div className="w-12 h-12 flex items-center justify-center border border-[#0066FF] mb-8">
              <Target className="h-6 w-6 text-[#0066FF]" />
            </div>
            <h3 className="text-2xl font-light text-[#2A2A2A] mb-4">
              Score Google<br />95+/100
            </h3>
            <p className="text-[#666666] leading-relaxed mb-6 font-light">
              Tous nos sites obtiennent un score Lighthouse supérieur à 95/100. Temps de chargement {'<'} 1 seconde.
            </p>
            <div className="inline-block px-3 py-1 border border-[#0066FF]">
              <span className="text-xs font-medium text-[#0066FF] uppercase tracking-wide">
                Performance garantie
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-12 hover:bg-[#FAFAFA] transition-colors duration-300">
            <div className="w-12 h-12 flex items-center justify-center border border-[#0066FF] mb-8">
              <Shield className="h-6 w-6 text-[#0066FF]" />
            </div>
            <h3 className="text-2xl font-light text-[#2A2A2A] mb-4">
              Autonomie Totale<br />en 2h
            </h3>
            <p className="text-[#666666] leading-relaxed mb-6 font-light">
              Interface d'administration sur-mesure. Formation 2h incluse + 3 mois de support offert.
            </p>
            <div className="inline-block px-3 py-1 border border-[#0066FF]">
              <span className="text-xs font-medium text-[#0066FF] uppercase tracking-wide">
                Zéro dépendance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
