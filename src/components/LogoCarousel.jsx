"use client"; // Indispensable car on utilise des hooks

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const clients = [
  { name: 'Terrasigne', logo: '/logoclients/logoterra.png', url: 'https://terrasigne.fr/' },
  { name: 'Cabinet Mérieux', logo: '/logoclients/logomerieux.jpeg', url: 'https://cabinet-merieux.com/' },
  { name: 'UniversClean77', logo: '/logoclients/logo_univers_clean.png', url: 'https://univers-clean77.fr/' },
  { name: 'bernier-palettes', logo: '/logoclients/logoBernier.png', url: 'https://bernier-palettes.fr/' },
  // Ajoutez vos 4ème et 5ème clients ici sans problème
  // { name: 'Client 4', logo: '/logos/logo4.svg', url: 'https://client4.com' },
  // { name: 'Client 5', logo: '/logos/logo5.svg', url: 'https://client5.com' },
];

export function LogoCarousel() {
  // On initialise Embla avec les options : boucle infinie et autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-400">
          Ils m'ont fait confiance pour leur projet digital
        </h2>
        
        {/* Le "viewport" d'Embla. C'est notre conteneur qui masque le dépassement. */}
        <div className="embla mx-auto mt-10 max-w-3xl" ref={emblaRef}>
          {/* Le conteneur des slides */}
          <div className="embla__container flex">
            {clients.map((client, index) => (
              // Chaque slide
              <div key={index} className="embla__slide flex-[0_0_50%] sm:flex-[0_0_33.33%]">
                <Link href={client.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <div className="mx-8 flex h-20 items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={158}
                      height={48}
                      className="max-h-12 w-full object-contain grayscale transition hover:grayscale-0"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}