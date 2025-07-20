'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// Importe les icônes de Lucide React pour le menu mobile
import { Home, Sparkles, Workflow, HelpCircle, Mail, Menu, X } from "lucide-react";

// On centralise les liens pour ne pas les répéter
const navLinks = [
  { name: 'Accueil', href: '#accueil', icon: Home },
  { name: 'Processus', href: '#processus', icon: Workflow },
  { name: 'Services', href: '#services', icon: Sparkles },
  { name: 'FAQ', href: '#faq', icon: HelpCircle },
  { name: 'Me Contacter', href: '#contact', icon: Mail }, // Ajout du lien contact
];

export default function Header() {
  // --- ÉTATS (STATES) ---
  // Pour la visibilité au scroll (disparaît/réapparaît)
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // Pour l'ouverture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- EFFETS (EFFECTS) ---
  // Gère la visibilité du header au scroll et la fermeture du menu mobile
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Logique pour faire disparaître/réapparaître le header
      // Le header reste visible en haut de page (quand scrollY est faible)
      // et disparaît seulement quand on scroll vers le bas et qu'on est au-delà de 100px
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Logique pour fermer le menu mobile si on scrolle pendant qu'il est ouvert
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Effet pour bloquer/débloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Nettoyage : s'assurer que overflow-hidden est retiré si le composant est démonté
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  // --- HANDLERS ---
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Ferme le menu mobile quand un lien est cliqué
  };

  // --- RENDER ---
  return (
    <header
      // La classe bg-transparent rend le header transparent
      // Ajoutez un fond si vous voulez qu'il devienne opaque au scroll
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } py-4`} // Ajout d'un padding vertical pour la hauteur
    >
      <nav className="container mx-auto px-6 flex justify-end items-center"> {/* justify-end car pas de logo */}
        {/* Menu pour Desktop (caché sur mobile) */}
        {/* Le texte est `text-white` par défaut, adaptez si votre fond est clair */}
        <ul className="hidden lg:flex items-center space-x-8"> {/* Augmentation de l'espacement */}
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="font-medium text-white hover:text-opacity-80 transition-opacity text-lg" // Texte plus grand
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Hamburger (visible uniquement sur mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 w-10 h-10 flex flex-col justify-around relative focus:outline-none" // Plus grand et focus
            aria-label="Ouvrir le menu"
          >
            {/* Icônes de croix et hamburger animées */}
            {isMenuOpen ? (
              <X size={30} className="text-white" />
            ) : (
              <Menu size={30} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Panel du Menu Mobile */}
      {/* Utilise un fond semi-transparent et slide depuis le haut */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md pt-24 px-6 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col items-center justify-center`} // Centre le contenu verticalement
      >
        <ul className="flex flex-col items-center space-y-10"> {/* Espacement augmenté */}
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                onClick={handleLinkClick} 
                className="text-3xl font-bold text-white hover:text-opacity-80 transition-opacity flex items-center gap-3" // Taille et style pour mobile
              >
                <link.icon size={30} /> {/* Affiche l'icône */}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}