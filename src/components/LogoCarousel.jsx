import Image from 'next/image';
import Link from 'next/link';

const clients = [
  { name: 'Terrasigne', logo: '/logoclients/logoterra.png', url: 'https://terrasigne.fr/' },
  { name: 'Cabinet Mérieux', logo: '/logoclients/logomerieux.jpeg', url: 'https://cabinet-merieux.com/' },
  { name: 'UniversClean77', logo: '/logoclients/logo_univers_clean.png', url: 'https://univers-clean77.fr/' },
  { name: 'bernier-palettes', logo: '/logoclients/logoBernier.png', url: 'https://bernier-palettes.fr/' },
  // Ajoutez d'autres clients ici, l'animation s'adaptera
];

export function LogoCarousel() {
  return (
    <section className="py-16 sm:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-400">
          Ils m'ont fait confiance pour leur projet digital
        </h2>
        
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