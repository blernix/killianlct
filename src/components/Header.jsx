'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// 1. On importe le composant Image de Next.js
import Image from 'next/image';
import { Home, Sparkles, Workflow, HelpCircle, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { name: 'Accueil', href: '#accueil', icon: Home },
  { name: 'Processus', href: '#processus', icon: Workflow },
  { name: 'Services', href: '#services', icon: Sparkles },
  { name: 'FAQ', href: '#faq', icon: HelpCircle },
  { name: 'Me Contacter', href: '#contact', icon: Mail },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } py-4`}
    >
      {/* 2. On change justify-end en justify-between */}
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* 3. On ajoute le logo ici */}
        <Link href="#accueil" className="flex-shrink-0">
          <Image
            src="/logoKback.png"
            alt="Logo Killian Lecrut"
            width={150} // Largeur de l'image originale
            height={50} // Hauteur de l'image originale
            className="h-24 w-auto" // On contrôle la hauteur ici, la largeur s'ajuste
          />
        </Link>
        
        {/* Menu pour Desktop (caché sur mobile) */}
        <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="font-medium text-white hover:text-opacity-80 transition-opacity text-lg"
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
            className="z-50 w-10 h-10 flex flex-col justify-around relative focus:outline-none"
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
        } flex flex-col items-center justify-center`}
      >
        <ul className="flex flex-col items-center space-y-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                onClick={handleLinkClick} 
                className="text-3xl font-bold text-white hover:text-opacity-80 transition-opacity flex items-center gap-3"
              >
                <link.icon size={30} />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}