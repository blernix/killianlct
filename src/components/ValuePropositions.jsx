// Pensez à importer les icônes que nous allons utiliser
import { Rocket, Target, Shield } from "lucide-react";

export default function ValueProposition() {
  return (
    <section
      role="region"
      aria-label="Ma philosophie de travail"
      className="w-full px-4 py-24 sm:py-32"
      
    >
      <div className="mx-auto max-w-5xl">
        {/* Titre de la section */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100">
            Une approche centrée sur l'essentiel.
          </h2>
          <p className="mt-4 text-lg text-gray-100">
            Ma philosophie : un développement sur-mesure pour des résultats concrets.
          </p>
        </div>

        {/* La grille avec nos 3 cartes de valeur */}
        <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          
          {/* Carte 1: Sur-Mesure */}
          <div className="flex flex-col items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 font-semibold text-white">Du Sur-Mesure, Rien de Superflu</h3>
            <p className="mt-2 text-sm text-gray-300">
              Pas de fonctionnalités inutiles ni de plateformes obscures. Je code uniquement ce dont vous avez besoin pour des bases solides et une gestion simplifiée.
            </p>
          </div>

          {/* Carte 2: Performance */}
          <div className="flex flex-col items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 font-semibold text-white">La Performance au Cœur</h3>
            <p className="mt-2 text-sm text-gray-300">
              Un site rapide est essentiel pour vos utilisateurs et votre référencement. Je privilégie les technologies modernes pour garantir une vitesse et une fluidité optimales.
            </p>
          </div>

          {/* Carte 3: Partenariat */}
          <div className="flex flex-col items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 font-semibold text-white">Un Partenaire Fiable</h3>
            <p className="mt-2 text-sm text-gray-300">
              Plus qu'un simple prestataire, je vous accompagne pour que vous puissiez avancer sereinement. Je construis des outils durables pour aujourd'hui et pour demain.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}