import Image from 'next/image';
import Link from 'next/link';

const clients = [
  { name: 'Terrasigne', logo: '/logoclients/logoterra.png', url: 'https://terrasigne.fr/' },
  { name: 'Cabinet Mérieux', logo: '/logoclients/logomerieux.jpeg', url: 'https://cabinet-merieux.com/' },
  { name: 'UniversClean77', logo: '/logoclients/logo_univers_clean.png', url: 'https://univers-clean77.fr/' },
  { name: 'bernier-palettes', logo: '/logoclients/logoBernier.png', url: 'https://bernier-palettes.fr/' },
  { name: 'lea-sgiaravello', logo: '/logoclients/logo_psy.jpg', url: 'https://lea_sgiaravello.fr/' },
  { name: 'renoveu', logo: '/logoclients/renoveu.png', url: 'https://renoveu.fr/' },

  // Ajoutez d'autres clients ici, l'animation s'adaptera
];

export function LogoCarousel() {
  return (
    <section className="py-16 sm:py-24 overflow-x-hidden bg-gradient-to-b from-transparent via-gray-950/30 to-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block rounded-full bg-green-500/20 px-4 py-1.5 text-sm font-medium text-green-300 border border-green-500/30 mb-4">
            6 projets livrés en 2025
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">
            Ils ont choisi notre expertise
          </h2>
          <p className="mt-2 text-gray-400">
            Sites rapides, modernes et performants. Tous livrés dans les délais.
          </p>
        </div>
        
        <div
          className="mx-auto mt-10 max-w-4xl relative
                     [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        >
          <div className="infinite-scroll-track flex w-max">
            {/* On duplique la liste pour la boucle infinie CSS */}
            {[...clients, ...clients].map((client, index) => (
              <Link key={index} href={client.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <div className="mx-4 flex h-20 w-32 items-center justify-center sm:mx-8 sm:w-40">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain grayscale transition hover:grayscale-0"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}