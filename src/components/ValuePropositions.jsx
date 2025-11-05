// Pensez à importer les icônes que nous allons utiliser
import { Rocket, Target, Shield } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"; // ✅ 1. On importe le nouveau composant
import { cn } from "@/lib/utils";

export default function ValueProposition() {
  return (
    <section
      role="region"
      aria-label="Notre philosophie de travail"
      // ✅ 2. On rend la section "relative" pour contenir le fond animé
      className="relative w-full px-4 py-24 sm:py-32 overflow-hidden" 
    >
      {/* ✅ 3. On place le fond animé ici */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      
      {/* ✅ 4. On s'assure que le contenu passe au-dessus avec `relative` et `z-10` */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Titre de la section */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-4 text-lg text-gray-100">
            Des résultats mesurables, pas des promesses marketing.
          </p>
        </div>

        {/* La grille avec nos 3 cartes de valeur (le contenu ne change pas) */}
        <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          
          {/* Carte 1: Délais */}
          <div className="flex flex-col items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 font-semibold text-white">Livraison en 3 Semaines</h3>
            <p className="mt-2 text-sm text-gray-300">
              Pas de projets qui traînent pendant 6 mois. Nous travaillons en sprints courts avec des livrables concrets chaque semaine. Vous voyez l'avancement en temps réel.
            </p>
            <div className="mt-4 inline-block rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300 border border-green-500/30">
              3x plus rapide que la moyenne
            </div>
          </div>

          {/* Carte 2: Performance */}
          <div className="flex flex-col items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 font-semibold text-white">Score Google 95+/100</h3>
            <p className="mt-2 text-sm text-gray-300">
              Tous nos sites obtiennent un score Lighthouse supérieur à 95/100. Temps de chargement {'<'} 1 seconde. Optimisé pour le SEO et la conversion dès le premier jour.
            </p>
            <div className="mt-4 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">
              Performance garantie
            </div>
          </div>

          {/* Carte 3: Autonomie */}
          <div className="flex flex-col items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 font-semibold text-white">Autonomie Totale en 2h</h3>
            <p className="mt-2 text-sm text-gray-300">
              Interface d'administration sur-mesure, sans les 50 menus WordPress. Formation de 2h incluse + 3 mois de support offert. Vous gérez votre contenu sans jamais nous rappeler.
            </p>
            <div className="mt-4 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300 border border-purple-500/30">
              Zéro dépendance technique
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}