// Pensez à importer les nouvelles icônes
import { MonitorSmartphone, AppWindow, ShoppingCart, Bot, LayoutDashboard, Server } from "lucide-react";

export function Services() {
  // J'ai séparé les services en deux listes pour plus de clarté
  const mainServices = [
    {
      icon: <MonitorSmartphone className="h-8 w-8 text-white" />,
      title: "Sites vitrines professionnels",
      description: "Présentez votre activité avec un site rapide, responsive et à votre image. Parfait pour indépendants, PME, et artisans.",
    },
    {
      icon: <AppWindow className="h-8 w-8 text-white" />,
      title: "Applications web sur mesure",
      description: "Besoin d’un outil spécifique ? Je développe des applications métier : espace client, outil de gestion, plateforme interne…",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      title: "E-commerce & solutions de vente",
      description: "Vendez en ligne facilement. Je configure une boutique optimisée (paniers, paiements, abonnements) et simple à gérer.",
    },
  ];

 
  

  return (
    <section
      role="region"
      aria-labelledby="services-title"
      className="py-24 sm:py-32 px-4"
      id="services"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête de section */}
        <div className="text-center">
          <h2 id="services-title" className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100">
            Des solutions pour chaque projet
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-100">
            Que vous partiez de zéro ou cherchiez à améliorer l'existant, je propose des prestations adaptées à vos ambitions.
          </p>
        </div>

        {/* PRESTATIONS PRINCIPALES */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {mainServices.map((service, index) => (
            <div key={index} className="flex flex-col text-center items-center p-8 rounded-3xl border shadow-xl bg-gray-950/40 backdrop-blur-lg border-white/20">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

       
    

      </div>
    </section>
  );
}