"use client";

export default function Hero() {
  return (
    // Le conteneur <section> sert maintenant à centrer la "carte" verticalement et horizontalement.
    <section
      role="banner"
      aria-label="Présentation de l'activité de Killian Lecrut"
      className="w-full min-h-[90vh] px-4 py-24 flex items-center justify-center"
    >
      {/* C'est ce <div> qui est notre panneau en verre. */}
      <div 
        className="w-full max-w-3xl flex flex-col items-center text-center p-8 md:p-12
                   rounded-3xl border shadow-2xl
                   bg-gray-950/50 backdrop-blur-xl border-white/10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100">
          Artisan de votre succès en ligne, je conçois des sites web sur-mesure qui développent votre activité.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-300">
          Je crée des sites web et des applications ultra-rapides et intuitives. Mon objectif : offrir une expérience parfaite à vos utilisateurs pour renforcer votre image de marque et atteindre vos objectifs.
        </p>

        <a
          href="#services" // J'ai changé le lien pour pointer vers une future section services
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900
                     transition duration-300 hover:bg-gray-200 hover:scale-105"
        >
          Découvrir mes services
        </a>
      </div>
    </section>
  );
}