'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Rocket, BrainCircuit, Rss, Mail, Menu, X, ChevronDown, Briefcase } from "lucide-react";

// Nouvelle structure de données pour gérer les sous-menus
const navLinks = [
  { name: 'Accueil', href: '/', icon: Home },
  { 
    name: 'Services', 
    icon: Rocket,
    submenu: [
      { name: 'Site Vitrine', href: '/services/site-vitrine' },
      { name: 'E-commerce', href: '/services/e-commerce' },
      { name: 'Application Web', href: '/services/application-web' },
      { name: 'Optimisation SEO', href: '/services/optimisation-seo' },
    ]
  },
  {
    name: 'Expertises',
    icon: BrainCircuit,
    submenu: [
      { name: 'Automatisation (n8n)', href: '/expertises/n8n-automatisation' },
      { name: 'Gestion de Contenu (Directus)', href: '/expertises/directus-cms' },
    ]
  },
  {
    name: 'Secteurs',
    icon: Briefcase,
    submenu: [
      { name: 'Avocats', href: '/secteurs/professions-liberales/avocat' },
      { name: 'Psychologues', href: '/secteurs/professions-liberales/psychologue' },
      { name: 'Artisans', href: '/secteurs/artisans' },
    ]
  },
  // { name: 'Blog', href: '/blog', icon: Rss }, // Vous pourrez décommenter ça plus tard
  { name: 'Me Contacter', href: '#', icon: Mail, isModal: true }, 
];

// Le composant accepte la prop "onOpenModal"
export default function Header({ onOpenModal }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  // Cette fonction ferme le menu mobile et l'accordéon
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } py-4`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0 z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image
            src="/logoKback.png"
            alt="Logo Killian Lecrut"
            width={150}
            height={50}
            className="h-14 w-auto"
          />
        </Link>
        
        {/* Menu pour Desktop */}
        <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              {link.submenu ? (
                <span className="flex items-center gap-1 cursor-default font-medium text-white hover:text-opacity-80 transition-opacity text-lg">
                  {link.name}
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </span>
              ) : link.isModal ? (
                <button 
                  onClick={() => onOpenModal('general')}
                  className="font-medium text-white hover:text-opacity-80 transition-opacity text-lg"
                >
                  {link.name}
                </button>
              ) : (
                <Link 
                  href={link.href} 
                  className="font-medium text-white hover:text-opacity-80 transition-opacity text-lg"
                >
                  {link.name}
                </Link>
              )}

              {/* Le sous-menu déroulant pour Desktop */}
              {link.submenu && (
               <ul className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 origin-top
                               bg-gray-950/80 backdrop-blur-md border border-white/10 rounded-lg shadow-xl
                               opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                               transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                  {link.submenu.map((subLink) => (
                    <li key={subLink.name}>
                      <Link href={subLink.href} className="block px-4 py-3 text-white hover:bg-white/5 transition-colors text-base">
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Bouton Hamburger (visible uniquement sur mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 w-10 h-10 flex items-center justify-center relative focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? (
              <X size={30} className="text-white" />
            ) : (
              <Menu size={30} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Panel du Menu Mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md pt-24 px-6 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col items-center`}
      >
        <ul className="flex flex-col items-center w-full">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center border-b border-white/10 last:border-b-0">
              {link.submenu ? (
                <div>
                  <button
                    onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.name ? null : link.name)}
                    className="w-full py-6 text-2xl font-bold text-white flex items-center justify-center gap-3"
                  >
                    <link.icon size={24} />
                    {link.name}
                    <ChevronDown size={20} className={`transition-transform ${openMobileSubmenu === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileSubmenu === link.name && (
                    <ul className="bg-white/5 pb-4">
                      {link.submenu.map((subLink) => (
                        <li key={subLink.name}>
                          <Link href={subLink.href} onClick={handleLinkClick} className="block py-3 text-lg text-gray-300 hover:text-white">
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : link.isModal ? (
                <button
                  onClick={() => {
                    handleLinkClick();
                    onOpenModal('general');
                  }}
                  className="w-full py-6 text-2xl font-bold text-white flex items-center justify-center gap-3"
                >
                  <link.icon size={24} />
                  {link.name}
                </button>
              ) : (
                <Link 
                  href={link.href} 
                  onClick={handleLinkClick} 
                  className="w-full block py-6 text-2xl font-bold text-white flex items-center justify-center gap-3"
                >
                  <link.icon size={24} />
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}