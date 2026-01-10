import Image from 'next/image';
import Link from 'next/link';

const clients = [
  { name: 'Terrasigne', logo: '/logoclients/logoterra.png', url: 'https://terrasigne.fr/' },
  { name: 'Cabinet Mérieux', logo: '/logoclients/logomerieux.jpeg', url: 'https://cabinet-merieux.com/' },
  { name: 'UniversClean77', logo: '/logoclients/logo_univers_clean.png', url: 'https://univers-clean77.fr/' },
  { name: 'bernier-palettes', logo: '/logoclients/logoBernier.png', url: 'https://bernier-palettes.fr/' },
  { name: 'lea-sgiaravello', logo: '/logoclients/logo_psy.jpg', url: 'https://lea-sgiaravello.fr/' },
  { name: 'renoveu', logo: '/logoclients/renoveu.png', url: 'https://renoveu.fr/' },
];

export function LogoCarousel() {
  return (
    <section className="relative py-32 overflow-x-hidden bg-white">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-8 border border-[#E5E5E5]">
            <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
              6 projets livrés en 2025
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#2A2A2A] mb-4 tracking-[-0.02em]">
            Ils ont choisi notre{" "}
            <span className="text-[#0066FF]">expertise</span>
          </h2>
          <p className="text-[#666666] text-lg font-light">
            Sites rapides, modernes et performants. Tous livrés dans les délais.
          </p>
        </div>

        <div
          className="mx-auto mt-12 max-w-5xl relative
                     [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        >
          <div className="infinite-scroll-track flex w-max">
            {[...clients, ...clients].map((client, index) => (
              <Link key={index} href={client.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <div className="mx-6 sm:mx-8 flex h-24 w-40 items-center justify-center p-4 border border-[#E5E5E5] hover:border-[#0066FF] bg-white transition-all duration-300 group">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
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
