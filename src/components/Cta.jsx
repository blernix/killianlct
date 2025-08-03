import Link from "next/link";

export function ContactSection() {
  return (
    // On ajoute l'id "contact" pour pouvoir faire des liens d'ancrage
    <section 
      id="contact"
      role="region"
      aria-labelledby="contact-title"
      className="py-24 sm:py-32 px-4"
    >
      {/* On réutilise notre design de carte principale, comme pour le Hero */}
      <div 
        className="mx-auto max-w-4xl flex flex-col items-center text-center p-8 md:p-16
                   rounded-3xl border shadow-2xl
                   bg-gray-950/50 backdrop-blur-xl border-white/20"
      >
        <h2 
          id="contact-title" 
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100"
        >
          Un projet en tête ?
        </h2>

        <p className="mt-4 text-lg max-w-xl text-gray-300">
          Discutons-en ensemble. Que ce soit pour une simple question ou un projet déjà bien défini, je suis à votre écoute pour vous aider à concrétiser votre idée.
        </p>

        {/* On utilise notre style de bouton principal (blanc) pour une cohérence maximale */}
        <Link
          href="mailto:killian.lecrut@gmail.com" // Pensez à mettre votre véritable email ici !
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900
                     transition duration-300 hover:bg-gray-200 hover:scale-105"
        >
          Me contacter par e-mail 🚀
        </Link>
      </div>
    </section>
  );
}