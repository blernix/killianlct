import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#FAFAFA] border-t border-[#E5E5E5]">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

       <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
         {/* Grille principale du footer */}
         <div className="grid grid-cols-1 gap-12 text-center md:text-left md:grid-cols-4">

           {/* Colonne 1: Identité */}
           <div className="md:col-span-2">
             <h3 className="text-lg font-light text-[#2A2A2A] mb-4">Killian Lecrut</h3>
             <p className="text-sm text-[#666666] font-light leading-relaxed max-w-md">
               Agence web spécialisée dans la création de sites internet sur-mesure pour professions libérales et artisans à Melun (77). Expertise en conformité réglementaire, SEO local et développement performant.
             </p>
           </div>

           {/* Colonne 2: Services */}
           <div>
             <h3 className="text-base font-light text-[#2A2A2A] mb-4">Services</h3>
             <ul className="space-y-3 text-sm">
               <li>
                 <Link href="/services/site-vitrine" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   Site Vitrine
                 </Link>
               </li>
               <li>
                 <Link href="/services/e-commerce" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   E-commerce
                 </Link>
               </li>
               <li>
                 <Link href="/services/application-web" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   Application Web
                 </Link>
               </li>
               <li>
                 <Link href="/services/optimisation-seo" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   Optimisation SEO
                 </Link>
               </li>
             </ul>
           </div>

           {/* Colonne 3: Secteurs */}
           <div>
             <h3 className="text-base font-light text-[#2A2A2A] mb-4">Secteurs</h3>
             <ul className="space-y-3 text-sm">
               <li>
                 <Link href="/secteurs/professions-liberales/avocat" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   Avocats
                 </Link>
               </li>
               <li>
                 <Link href="/secteurs/professions-liberales/psychologue" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   Psychologues
                 </Link>
               </li>
               <li>
                 <Link href="/secteurs/professions-liberales/osteopathe" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   Ostéopathes
                 </Link>
               </li>
               <li>
                 <Link href="/secteurs/artisans" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   Artisans
                 </Link>
               </li>
             </ul>
           </div>

           {/* Colonne 4: Contact & Réseaux */}
           <div>
             <h3 className="text-base font-light text-[#2A2A2A] mb-4">Contact</h3>
             <ul className="space-y-3 text-sm mb-6">
               <li>
                 <Link href="/contact" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   Page de contact
                 </Link>
               </li>
               <li>
                 <a href="tel:+33641970383" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   +33 6 41 97 03 83
                 </a>
               </li>
               <li>
                 <a href="mailto:killian.lecrut@gmail.com" className="text-[#666666] font-light hover:text-[#0066FF] transition-colors">
                   killian.lecrut@gmail.com
                 </a>
               </li>
             </ul>
             <h3 className="text-base font-light text-[#2A2A2A] mb-4">Réseaux</h3>
             <div className="flex gap-4 justify-center md:justify-start">
               <a
                 href="https://www.linkedin.com/in/killian-lecrut-a80336176/"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Profil LinkedIn"
                 className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center text-[#666666] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
               >
                 <Linkedin size={20} />
               </a>
               <a
                 href="https://github.com/killianlecrut"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Profil GitHub"
                 className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center text-[#666666] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
               >
                 <Github size={20} />
               </a>
             </div>
           </div>
         </div>

        {/* Ligne de séparation et copyright */}
        <div className="mt-12 pt-8 border-t border-[#E5E5E5] text-center text-sm">
          <p className="mb-3 text-[#666666] font-light">
            &copy; {new Date().getFullYear()} Killian Lecrut. Tous droits réservés.
          </p>
          <p>
            <Link
              href="/mentions-legales"
              className="text-[#666666] font-light hover:text-[#0066FF] transition-colors"
            >
              Mentions Légales & Politique de Confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
