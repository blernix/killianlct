import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="mx-auto max-w-max px-4 py-16">
        {/* Grille principale du footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          
          {/* Colonne 1: Identité */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Killian Lecrut</h3>
            <p className="mt-2 text-sm">
              Artisan du web, développeur de solutions sur-mesure pour donner vie à vos projets.
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h3 className="text-base font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#accueil" className="hover:text-white transition">Accueil</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="#processus" className="hover:text-white transition">Processus</Link></li>
              <li><Link href="#faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Réseaux */}
          <div>
            <h3 className="text-base font-semibold text-white">Me suivre</h3>
            <div className="mt-4 flex gap-4">
            
              <a href="https://www.linkedin.com/in/killian-lecrut-a80336176/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn" className="hover:text-white transition">
                <Linkedin />
              </a>
              {/* Ajoutez d'autres réseaux si vous le souhaitez (Malt, etc.) */}
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Killian Lecrut. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}