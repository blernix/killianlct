"use client";

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="accueil"
      role="banner"
      aria-label="Présentation de l'activité de Killian Lecrut, développeur web freelance"
      className="w-full px-4 pt-16 pb-24 flex justify-center"
    >
      <div 
        className="relative w-full max-w-3xl flex flex-col items-center text-center p-8 md:p-12
                   rounded-3xl border shadow-2xl overflow-hidden
                   bg-gray-950/50 backdrop-blur-xl border-white/15"
      >
        {/* LA VIDÉO EST INTÉGRÉE ICI */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/video-hero.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        
        {/* Le contenu de la carte reste au-dessus de la vidéo */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100">
          Artisan du web, je crée le site sur-mesure qui développe votre activité.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-300">
          Des expériences web rapides, intuitives et uniques pour renforcer votre image de marque et atteindre vos objectifs.
        </p>

        <Link
          href="/#services"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900
                     transition duration-300 hover:bg-gray-200 hover:scale-105"
        >
          Découvrir mes services
        </Link>
      </div>
    </section>
  );
}