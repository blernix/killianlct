"use client";

import { CheckCircle, Clock, Shield, FileText, Phone, Award } from "lucide-react";

/**
 * Composant MicroPromises - Affiche des petites garanties rassurantes sous les CTA
 *
 * @param {Array} promises - Tableau de promesses à afficher
 * Format: ["Réponse sous 24h", "Sans engagement", ...]
 * OU
 * Format détaillé: [{ icon: <Clock />, text: "Réponse sous 24h" }, ...]
 *
 * @param {string} variant - "inline" (horizontal) ou "stacked" (vertical)
 */
export function MicroPromises({ promises = [], variant = "inline", className = "" }) {
  // Mapping des icônes par défaut selon le texte
  const getDefaultIcon = (text) => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes("24h") || lowerText.includes("rapide") || lowerText.includes("réponse")) {
      return <Clock className="text-violet-400 flex-shrink-0" size={16} />;
    }
    if (lowerText.includes("engagement") || lowerText.includes("gratuit") || lowerText.includes("sans surprise")) {
      return <Shield className="text-violet-400 flex-shrink-0" size={16} />;
    }
    if (lowerText.includes("devis") || lowerText.includes("tarif") || lowerText.includes("transparent")) {
      return <FileText className="text-violet-400 flex-shrink-0" size={16} />;
    }
    if (lowerText.includes("téléphone") || lowerText.includes("appel") || lowerText.includes("disponible")) {
      return <Phone className="text-violet-400 flex-shrink-0" size={16} />;
    }
    if (lowerText.includes("garantie") || lowerText.includes("satisfaction") || lowerText.includes("qualité")) {
      return <Award className="text-violet-400 flex-shrink-0" size={16} />;
    }

    // Par défaut, une checkmark
    return <CheckCircle className="text-violet-400 flex-shrink-0" size={16} />;
  };

  const containerClasses = variant === "inline"
    ? "flex flex-wrap justify-center gap-4 sm:gap-6"
    : "flex flex-col items-center gap-2";

  return (
    <div className={`${containerClasses} text-sm text-gray-400 font-bold ${className}`}>
      {promises.map((promise, index) => {
        // Si c'est un objet avec icon et text
        if (typeof promise === "object" && promise.text) {
          return (
            <span key={index} className="flex items-center gap-2">
              {promise.icon || getDefaultIcon(promise.text)}
              <span>{promise.text}</span>
            </span>
          );
        }

        // Si c'est juste une string
        return (
          <span key={index} className="flex items-center gap-2">
            {getDefaultIcon(promise)}
            <span>{promise}</span>
          </span>
        );
      })}
    </div>
  );
}
