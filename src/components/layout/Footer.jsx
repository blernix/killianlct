import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    // MODIFICATION : On rend le footer "collant" et on le place en arrière-plan
    <footer className=" bottom-0 -z-10 bg-background text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Grille principale du footer */}
        <div className="grid grid-cols-1 gap-12 text-center md:text-left md:grid-cols-3">
          
          {/* Colonne 1: Identité */}
          <div>
            <h3 className="text-lg font-semibold text-white">Killian Lecrut</h3>
            <p className="mt-2 text-sm">
              Artisan du web, développeur de solutions sur-mesure pour donner vie à vos projets.
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h3 className="text-base font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link href="/services/site-vitrine" className="hover:text-white transition">Sites Vitrines</Link></li>
              <li><Link href="/services/e-commerce" className="hover:text-white transition">E-commerce</Link></li>
              <li><Link href="/expertises/n8n-automatisation" className="hover:text-white transition">Automatisation</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Réseaux */}
          <div>
            <h3 className="text-base font-semibold text-white">Me suivre</h3>
            <div className="mt-4 flex gap-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/killian-lecrut-a80336176/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn" className="hover:text-white transition">
                <Linkedin />
              </a>
              {/* Ajoutez votre lien GitHub si vous le souhaitez */}
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
