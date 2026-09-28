'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Composant Select personnalisé - Swiss Clean Style
 */
export default function CustomSelect({
  id,
  value,
  onChange,
  onBlur,
  options = [],
  placeholder = "-- Choisir une option --",
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        // Trigger onBlur quand on ferme
        if (onBlur) {
          onBlur({ target: { id } });
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, id, onBlur]);

  const handleSelect = (optionValue) => {
    // Simuler un événement onChange comme un input normal
    onChange({ target: { id, value: optionValue } });
    setIsOpen(false);

    // Trigger onBlur après sélection
    if (onBlur) {
      onBlur({ target: { id } });
    }
  };

  const selectedOption = options.find(opt => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      {/* Bouton qui ouvre/ferme le menu */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#2A2A2A] p-3 text-left text-[#2A2A2A] dark:text-[#FAFAFA] font-light focus:outline-none focus:border-[#0066FF] focus:bg-white dark:focus:bg-[#1A1A1A] transition-colors flex items-center justify-between"
      >
        <span className={value ? 'text-[#2A2A2A] dark:text-[#FAFAFA]' : 'text-[#666666] dark:text-[#999999]'}>
          {displayValue}
        </span>
        {isOpen ? (
          <ChevronUp className="text-[#0066FF]" size={20} />
        ) : (
          <ChevronDown className="text-[#666666] dark:text-[#999999]" size={20} />
        )}
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-px border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] shadow-lg max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full text-left p-3 font-light transition-colors border-b border-[#E5E5E5] dark:border-[#2A2A2A] last:border-b-0
                ${option.value === value
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-white dark:bg-[#1A1A1A] text-[#2A2A2A] dark:text-[#FAFAFA] hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F]'
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
