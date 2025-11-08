'use client';

import { useState } from 'react';

/**
 * Hook personnalisé pour gérer l'ouverture/fermeture de la modal de contact
 * avec des données pré-remplies optionnelles
 *
 * @returns {Object} - { isOpen, initialData, openModal, closeModal }
 *
 * @example
 * const { isOpen, initialData, openModal, closeModal } = useContactModal();
 *
 * // Ouvrir sans données pré-remplies
 * <button onClick={() => openModal()}>Contact</button>
 *
 * // Ouvrir avec une offre pré-sélectionnée
 * <button onClick={() => openModal({ selectedOffer: 'Premium - 4500€' })}>
 *   Choisir cette offre
 * </button>
 */
export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState({});

  /**
   * Ouvre la modal avec des données optionnelles
   * @param {Object|string} data - Objet de données ou string (pour rétrocompatibilité)
   */
  const openModal = (data = {}) => {
    // Gestion rétrocompatibilité : si on passe une string, c'est pour selectedOffer
    if (typeof data === 'string') {
      setInitialData({ selectedOffer: data });
    } else if (typeof data === 'object' && data !== null) {
      setInitialData(data);
    } else {
      setInitialData({});
    }
    setIsOpen(true);
  };

  /**
   * Ferme la modal et réinitialise les données
   */
  const closeModal = () => {
    setIsOpen(false);
    // On réinitialise les données après la fermeture pour nettoyer
    setTimeout(() => setInitialData({}), 300); // Délai pour l'animation de fermeture
  };

  return {
    isOpen,
    initialData,
    openModal,
    closeModal,
  };
}
