'use client';

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, children, title }) {
  const modalRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement;
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      previouslyFocusedElement.current?.focus();
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement?.focus();

      const handleTab = (event) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              event.preventDefault();
            }
          }
        }
      };

      const currentModalRef = modalRef.current;
      currentModalRef.addEventListener('keydown', handleTab);
      return () => {
        currentModalRef.removeEventListener('keydown', handleTab);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative flex flex-col w-full max-w-lg max-h-[90vh] border border-[#E5E5E5] bg-white"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Blue accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

        {/* En-tête de la modale */}
        <div className="relative flex items-center justify-center p-8 border-b border-[#E5E5E5]">
          <h2 id="modal-title" className="text-2xl font-light text-[#2A2A2A] text-center tracking-[-0.02em]">
            {title || 'Fenêtre de dialogue'}
          </h2>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#666666] hover:text-[#0066FF] transition-colors"
            aria-label="Fermer la fenêtre"
          >
            <X size={24} />
          </button>
        </div>

        {/* Contenu */}
        <div className="p-8 space-y-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}