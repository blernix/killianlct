'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, Send, CheckCircle2, XCircle, Check, Edit3 } from 'lucide-react';
import CustomSelect from '@/components/ui/CustomSelect';

// Configuration centrale pour chaque type de formulaire
export const formFieldsConfig = {
  'site-vitrine': {
    subject: 'Demande de devis pour un Site Vitrine',
    fields: ['name', 'email', 'company', 'selectedOffer', 'message'],
    modalTitle: 'Demande de devis - Site Vitrine',
  },
  'site-avocat': {
    subject: 'Demande de devis pour un Site Avocat',
    fields: ['name', 'email', 'company', 'selectedOffer', 'message'],
    modalTitle: 'Demande de devis - Site Avocat',
  },
  'site-psychologue': {
    subject: 'Demande de devis pour un Site Psychologue',
    fields: ['name', 'email', 'company', 'selectedOffer', 'message'],
    modalTitle: 'Demande de devis - Site Psychologue',
  },
  'site-osteopathe': {
    subject: 'Demande de devis pour un Site Ostéopathe',
    fields: ['name', 'email', 'company', 'selectedOffer', 'message'],
    modalTitle: 'Demande de devis - Site Ostéopathe',
  },
  'artisan': {
    subject: 'Demande de devis pour un Site Artisan',
    fields: ['name', 'email', 'company', 'selectedOffer', 'message'],
    modalTitle: 'Demande de devis - Site Artisan',
  },
  'e-commerce': {
    subject: 'Demande de devis pour un Site E-commerce',
    fields: ['name', 'email', 'company', 'selectedOffer', 'message'],
    modalTitle: 'Demande de devis - Site E-commerce',
  },
  'application-web': {
    subject: 'Demande de devis pour une Application Web',
    fields: ['name', 'email', 'company', 'selectedOffer', 'message'],
    modalTitle: 'Demande de devis - Application Web',
  },
  'seo': {
    subject: 'Demande d\'information pour un suivi SEO',
    fields: ['name', 'email', 'company', 'message'],
    modalTitle: 'Demande d\'information - SEO',
  },
  'automatisation': {
    subject: 'Demande d\'information sur un projet d\'Automatisation (n8n)',
    fields: ['name', 'email', 'company', 'selectedOffer', 'message'],
    modalTitle: 'Demande d\'information - Automatisation',
  },
  'directus': {
    subject: 'Demande d\'information pour un back-office (Directus)',
    fields: ['name', 'email', 'company', 'selectedOffer', 'message'],
    modalTitle: 'Demande d\'information - Directus CMS',
  },
  'general': {
    subject: 'Demande d\'information générale',
    fields: ['name', 'email', 'message'],
    modalTitle: 'Nous contacter',
  }
};

// Fonction helper pour obtenir le titre de la modal
export const getModalTitle = (formType = 'general') => {
  return formFieldsConfig[formType]?.modalTitle || 'Demande d\'information';
};

export default function ContactForm({ formType = 'general', onClose, initialData = {}, availableOffers = [] }) {
  const config = formFieldsConfig[formType];

  // Créer initialFormData en fonction des champs requis par le formType
  const [formData, setFormData] = useState(() => {
    const baseData = { name: '', email: '', message: '', company: '', selectedOffer: '' };
    return { ...baseData, ...initialData };
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'recap', 'editing', 'success', 'error', or null
  
  const requiredFields = ['name', 'email', 'message']; // Définir les champs toujours requis

  const validate = (data = formData) => {
    const newErrors = {};
    if (requiredFields.includes('name') && !data.name.trim()) newErrors.name = 'Le nom est requis.';
    if (requiredFields.includes('email')) {
      if (!data.email.trim()) newErrors.email = "L'email est requis.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "Le format de l'email est invalide.";
    }
    if (requiredFields.includes('message') && !data.message.trim()) newErrors.message = 'Le message est requis.';
    return newErrors;
  };

  useEffect(() => {
    if(submitStatus) return; // Ne pas re-valider après l'envoi
    const validationErrors = validate();
    const touchedErrors = {};
    Object.keys(touched).forEach((key) => {
      if (validationErrors[key]) touchedErrors[key] = validationErrors[key];
    });
    setErrors(touchedErrors);
  }, [formData, touched, submitStatus]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.id]: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched(config.fields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    if (Object.keys(validationErrors).length === 0) {
      setSubmitStatus('recap'); // On passe à l'étape de récapitulatif
    }
  };

  const handleFinalSend = () => {
    setIsSubmitting(true);
    const templateParams = {
      name: formData.name, email: formData.email, subject: config.subject, message: formData.message,
      company: formData.company || 'Non spécifié', budget: formData.budget || 'Non spécifié',
      selectedOffer: formData.selectedOffer || 'Non spécifié',
    };
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
       setSubmitStatus('success');
    }, () => {
       setSubmitStatus('error');
    }).finally(() => {
       setIsSubmitting(false);
    });
  };

  // --- RENDU CONDITIONNEL DANS LA MODALE ---

  // Vue de Récapitulatif
  if (submitStatus === 'recap') {
    return (
      <div>
        <div className="space-y-px bg-[#E5E5E5]">
          {config.fields.map(field => formData[field] && (
            <div key={field} className="p-4 bg-[#FAFAFA] border border-[#E5E5E5]">
              <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em] block mb-2">
                {field === 'name' ? 'Nom' :
                 field === 'email' ? 'Email' :
                 field === 'company' ? 'Société' :
                 field === 'selectedOffer' ? 'Offre sélectionnée' :
                 'Message'}
              </span>
              <p className="text-[#2A2A2A] font-light whitespace-pre-wrap break-words">{formData[field]}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end gap-px bg-[#E5E5E5]">
          <button onClick={() => setSubmitStatus(null)} className="text-[#666666] hover:text-[#0066FF] font-light py-3 px-6 bg-white hover:bg-[#FAFAFA] flex items-center gap-2 transition-colors" disabled={isSubmitting}><Edit3 size={16}/>Modifier</button>
          <button onClick={handleFinalSend} className="bg-[#0066FF] hover:bg-white text-white hover:text-[#0066FF] border border-[#0066FF] font-medium py-3 px-6 flex items-center gap-2 disabled:opacity-50 transition-all" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {isSubmitting ? 'Envoi...' : 'Confirmer'}
          </button>
        </div>
      </div>
    );
  }

  // Vue de Succès
  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 border-2 border-[#0066FF] flex items-center justify-center">
            <CheckCircle2 className="text-[#0066FF]" size={48} />
          </div>
        </div>
        <h3 className="text-2xl font-light text-[#2A2A2A] mb-4 tracking-[-0.02em]">Message envoyé avec succès !</h3>
        <p className="text-[#666666] font-light mb-8">
          Merci pour votre demande. Nous vous répondrons dans les plus brefs délais, généralement sous 24h.
        </p>
        <button
          onClick={onClose}
          className="bg-[#0066FF] hover:bg-white text-white hover:text-[#0066FF] border border-[#0066FF] font-medium py-3 px-8 transition-all duration-300"
        >
          Fermer
        </button>
      </div>
    );
  }

  // Vue d'Erreur
  if (submitStatus === 'error') {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 border-2 border-[#E5E5E5] flex items-center justify-center">
            <XCircle className="text-[#666666]" size={48} />
          </div>
        </div>
        <h3 className="text-2xl font-light text-[#2A2A2A] mb-4 tracking-[-0.02em]">Erreur d'envoi</h3>
        <p className="text-[#666666] font-light mb-8">
          Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou nous contacter directement par email.
        </p>
        <div className="flex gap-px bg-[#E5E5E5] justify-center">
          <button
            onClick={() => setSubmitStatus(null)}
            className="bg-white hover:bg-[#FAFAFA] text-[#2A2A2A] font-light py-3 px-6 border border-[#E5E5E5] transition-colors duration-300"
          >
            Réessayer
          </button>
          <button
            onClick={onClose}
            className="bg-[#0066FF] hover:bg-white text-white hover:text-[#0066FF] border border-[#0066FF] font-medium py-3 px-6 transition-all duration-300"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  // Vue du Formulaire Initial
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
      {config.fields.includes('name') && (
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-2">Nom <span className="text-[#0066FF]">*</span></label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-[#FAFAFA] border p-3 text-[#2A2A2A] font-light focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors ${errors.name ? 'border-[#0066FF]' : 'border-[#E5E5E5]'}`} />
          {errors.name && <p className="text-[#0066FF] text-xs mt-2 font-light">{errors.name}</p>}
        </div>
      )}
      {config.fields.includes('email') && (
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-2">Email <span className="text-[#0066FF]">*</span></label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-[#FAFAFA] border p-3 text-[#2A2A2A] font-light focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors ${errors.email ? 'border-[#0066FF]' : 'border-[#E5E5E5]'}`} />
          {errors.email && <p className="text-[#0066FF] text-xs mt-2 font-light">{errors.email}</p>}
        </div>
      )}
      {config.fields.includes('company') && (
        <div>
          <label htmlFor="company" className="block text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-2">Société / Organisation <span className="text-[#666666] font-light normal-case">(Optionnel)</span></label>
          <input type="text" id="company" value={formData.company} onChange={handleChange} onBlur={handleBlur} className="w-full bg-[#FAFAFA] border border-[#E5E5E5] p-3 text-[#2A2A2A] font-light focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors" />
        </div>
      )}
      {config.fields.includes('selectedOffer') && (
        <div>
          <label htmlFor="selectedOffer" className="block text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-2">
            Offre sélectionnée <span className="text-[#666666] font-light normal-case">(Optionnel)</span>
          </label>
          {availableOffers.length > 0 ? (
            <CustomSelect
              id="selectedOffer"
              value={formData.selectedOffer}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="-- Choisir une offre --"
              options={availableOffers.map(offer => ({
                value: offer,
                label: offer
              }))}
            />
          ) : (
            <input
              type="text"
              id="selectedOffer"
              value={formData.selectedOffer}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full bg-[#FAFAFA] border border-[#E5E5E5] p-3 text-[#2A2A2A] font-light focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors"
              placeholder="Ex: Site Professionnel Complet - 4 500€"
            />
          )}
          <p className="text-xs text-[#666666] font-light mt-2">
            {availableOffers.length > 0
              ? 'Sélectionnez l\'offre qui vous intéresse'
              : 'Indiquez l\'offre qui vous intéresse ou laissez vide pour en discuter'
            }
          </p>
        </div>
      )}
      {config.fields.includes('message') && (
        <div>
          <label htmlFor="message" className="block text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-2">Votre message <span className="text-[#0066FF]">*</span></label>
          <textarea id="message" rows="4" value={formData.message} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-[#FAFAFA] border p-3 text-[#2A2A2A] font-light focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors ${errors.message ? 'border-[#0066FF]' : 'border-[#E5E5E5]'}`}></textarea>
          {errors.message && <p className="text-[#0066FF] text-xs mt-2 font-light">{errors.message}</p>}
        </div>
      )}
      <div className='flex justify-center pt-4'>
        <button type="submit" className="bg-[#0066FF] hover:bg-white text-white hover:text-[#0066FF] border border-[#0066FF] font-medium py-3 px-8 transition-all duration-300 flex items-center gap-2">
          Vérifier mon message
        </button>
      </div>
    </form>
  );
}
