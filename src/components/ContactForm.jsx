'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, Send, CheckCircle2, XCircle, Check, Edit3 } from 'lucide-react';

// Configuration centrale pour chaque type de formulaire
export const formFieldsConfig = {
  'site-vitrine': {
    subject: 'Demande de devis pour un Site Vitrine',
    fields: ['name', 'email', 'company', 'message'],
  },
  'e-commerce': {
    subject: 'Demande de devis pour un Site E-commerce',
    fields: ['name', 'email', 'company', 'budget', 'message'],
  },
  'application-web': {
    subject: 'Demande de devis pour une Application Web',
    fields: ['name', 'email', 'company', 'budget', 'message'],
  },
  'seo': {
    subject: 'Demande d\'information pour un suivi SEO',
    fields: ['name', 'email', 'company', 'message'],
  },
  'automatisation': {
    subject: 'Demande d\'information sur un projet d\'Automatisation (n8n)',
    fields: ['name', 'email', 'company', 'message'],
  },
  'directus': {
    subject: 'Demande d\'information pour un back-office (Directus)',
    fields: ['name', 'email', 'company', 'message'],
  },
  'general': {
    subject: 'Demande d\'information générale',
    fields: ['name', 'email', 'message'],
  }
};

const initialFormData = { name: '', email: '', message: '', company: '', budget: 'Moins de 1500€' };

export default function ContactForm({ formType = 'general', onClose }) {
  const config = formFieldsConfig[formType];
  const [formData, setFormData] = useState(initialFormData);
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
        <div className="space-y-3 text-sm">
          {config.fields.map(field => formData[field] && (
            <div key={field} className="p-3 bg-black/10 rounded-md border border-white/10">
              <span className="font-semibold text-gray-400 capitalize">{field === 'name' ? 'Nom' : field === 'email' ? 'Email' : field === 'company' ? 'Société' : field === 'budget' ? 'Budget' : 'Message'}</span>
              <p className="text-white whitespace-pre-wrap break-words">{formData[field]}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button onClick={() => setSubmitStatus(null)} className="text-gray-300 font-semibold py-2 px-4 rounded-full hover:bg-white/10 flex items-center gap-2" disabled={isSubmitting}><Edit3 size={16}/>Modifier</button>
          <button onClick={handleFinalSend} className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full flex items-center gap-2 disabled:opacity-50" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {isSubmitting ? 'Envoi...' : 'Confirmer'}
          </button>
        </div>
      </div>
    );
  }

  // Vue de Succès
  if (submitStatus === 'success') { /* ... (code inchangé) ... */ }
  // Vue d'Erreur
  if (submitStatus === 'error') { /* ... (code inchangé) ... */ }

  // Vue du Formulaire Initial
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      {config.fields.includes('name') && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nom <span className="text-red-400">*</span></label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-black/20 border rounded-md p-3 text-white focus:ring-2 focus:ring-white/50 ${errors.name ? 'border-red-500' : 'border-white/20'}`} />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
      )}
      {config.fields.includes('email') && (
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-400">*</span></label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-black/20 border rounded-md p-3 text-white focus:ring-2 focus:ring-white/50 ${errors.email ? 'border-red-500' : 'border-white/20'}`} />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      )}
      {config.fields.includes('company') && (
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Société / Organisation <span className="text-gray-500">(Optionnel)</span></label>
          <input type="text" id="company" value={formData.company} onChange={handleChange} onBlur={handleBlur} className="w-full bg-black/20 border rounded-md p-3 text-white focus:ring-2 focus:ring-white/50" />
        </div>
      )}
      {config.fields.includes('budget') && (
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">Budget approximatif <span className="text-gray-500">(Optionnel)</span></label>
          <select id="budget" value={formData.budget} onChange={handleChange} onBlur={handleBlur} className="w-full bg-black/20 border rounded-md p-3 text-white focus:ring-2 focus:ring-white/50 [&>option]:bg-gray-900">
            <option>Moins de 1500€</option>
            <option>1500€ - 3000€</option>
            <option>3000€ - 5000€</option>
            <option>Plus de 5000€</option>
          </select>
        </div>
      )}
      {config.fields.includes('message') && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Votre message <span className="text-red-400">*</span></label>
          <textarea id="message" rows="4" value={formData.message} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-black/20 border rounded-md p-3 text-white focus:ring-2 focus:ring-white/50 ${errors.message ? 'border-red-500' : 'border-white/20'}`}></textarea>
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        </div>
      )}
      <div className='flex justify-center pt-4'>
        <button type="submit" className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center gap-2">
          Vérifier mon message
        </button>
      </div>
    </form>
  );
}
