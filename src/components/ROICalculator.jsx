'use client';

import { useState } from 'react';
import { TrendingUp, ChevronUp, ChevronDown } from 'lucide-react';

// Configuration des 4 thèmes
const getThemeConfig = (themeName) => {
  const configs = {
    swiss: {
      // Container styles
      container: 'border border-[#E5E5E5] bg-white p-8 md:p-12',

      // Inputs section
      inputsGrid: (hasPackage, inputsLength) => `grid ${hasPackage ? 'md:grid-cols-4' : `md:grid-cols-${Math.min(inputsLength, 3)}`} gap-px bg-[#E5E5E5] mb-8`,
      inputCard: 'bg-white p-6',
      inputLabel: 'block text-xs font-medium text-[#666666] uppercase tracking-[0.2em] mb-4',
      input: 'w-full px-4 py-3 pr-10 bg-[#FAFAFA] border border-[#E5E5E5] text-[#2A2A2A] font-light placeholder-[#666666] focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
      chevronUp: 'p-1 text-[#666666] hover:text-[#0066FF] transition-colors',
      chevronDown: 'p-1 text-[#666666] hover:text-[#0066FF] transition-colors',
      select: 'w-full px-4 py-3 bg-[#FAFAFA] border border-[#E5E5E5] text-[#2A2A2A] font-light focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors [&>option]:bg-white',

      // Results section
      resultsContainer: 'border border-[#E5E5E5] bg-[#FAFAFA] p-8',
      resultsDescription: 'text-[#666666] text-center mb-8 font-light',
      metricsGrid: (length) => `grid md:grid-cols-${length} gap-px bg-[#E5E5E5]`,
      metricCard: 'bg-white p-6 text-center',
      metricLabel: 'text-xs text-[#666666] mb-3 uppercase tracking-[0.2em]',
      metricValue: (highlight) => `text-3xl font-light ${highlight ? 'text-[#0066FF]' : 'text-[#2A2A2A]'}`,

      // CTA
      ctaWrapper: 'mt-8 text-center',
      ctaButton: 'group inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300'
    },

    premium: {
      container: 'relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#F8F7F3] to-[#FAF9F6]',
      decorations: () => (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C5A572]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[150px]" />
        </>
      ),
      innerWrapper: 'relative z-10 max-w-5xl mx-auto',

      inputsGrid: (hasPackage, inputsLength) => `grid ${hasPackage ? 'md:grid-cols-4' : `md:grid-cols-${Math.min(inputsLength, 3)}`} gap-6 mb-8`,
      inputCard: '',
      inputLabel: 'block text-sm font-medium text-[#2F3640] mb-2',
      input: 'w-full px-4 py-3 pr-10 bg-white border border-[#E5E2DD] rounded-xl text-[#0A1628] placeholder-[#2F3640]/50 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
      chevronUp: 'p-1 rounded hover:bg-[#C5A572]/10 text-[#2F3640] hover:text-[#C5A572] transition-all',
      chevronDown: 'p-1 rounded hover:bg-[#C5A572]/10 text-[#2F3640] hover:text-[#C5A572] transition-all',
      select: 'w-full px-4 py-3 bg-white border border-[#E5E2DD] rounded-xl text-[#0A1628] focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] transition-all [&>option]:bg-white',

      resultsContainer: 'bg-gradient-to-br from-[#C5A572]/10 to-[#D4AF37]/10 rounded-2xl p-8 border-2 border-[#C5A572]/30',
      resultsDescription: 'text-[#2F3640] text-center mb-6',
      metricsGrid: (length) => `grid md:grid-cols-${length} gap-6`,
      metricCard: 'text-center',
      metricLabel: 'text-sm text-[#2F3640]/70 mb-2',
      metricValue: (highlight) => `text-3xl font-bold ${highlight ? 'text-[#C5A572]' : 'text-[#0A1628]'}`,

      ctaWrapper: 'mt-10 text-center',
      ctaButton: 'group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C5A572] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C5A572] text-[#0A1628] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(197,165,114,0.6)]'
    },

    artisan: {
      container: 'relative py-24 px-4 overflow-hidden bg-[#2A2A2A]',
      decorations: () => (
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[#B85C3D]/20 to-transparent" />
      ),
      innerWrapper: 'relative z-10 max-w-5xl mx-auto',

      inputsGrid: (hasPackage, inputsLength) => `grid ${hasPackage ? 'md:grid-cols-4' : `md:grid-cols-${Math.min(inputsLength, 3)}`} gap-6 mb-8`,
      inputCard: '',
      inputLabel: 'block text-sm font-bold text-[#D4724E] uppercase tracking-wider mb-2',
      input: 'w-full px-4 py-3 pr-10 bg-[#3A3A3A] border-l-4 border-[#B85C3D] text-white placeholder-gray-500 focus:outline-none focus:border-l-[#D4724E] transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
      chevronUp: 'p-1 text-gray-400 hover:text-[#D4724E] transition-colors',
      chevronDown: 'p-1 text-gray-400 hover:text-[#D4724E] transition-colors',
      select: 'w-full px-4 py-3 bg-[#3A3A3A] border-l-4 border-[#B85C3D] text-white focus:outline-none focus:border-l-[#D4724E] transition-all [&>option]:bg-[#3A3A3A]',

      resultsContainer: 'bg-gradient-to-br from-[#B85C3D]/20 to-[#D4724E]/10 p-8 border-l-4 border-[#D4724E]',
      resultsDescription: 'text-gray-300 text-center mb-6',
      metricsGrid: (length) => `grid md:grid-cols-${length} gap-6`,
      metricCard: 'text-center',
      metricLabel: 'text-sm text-[#D4724E] uppercase tracking-wider mb-2 font-bold',
      metricValue: (highlight) => `text-3xl font-bold ${highlight ? 'text-[#D4724E]' : 'text-white'}`,

      ctaWrapper: 'mt-10 text-center',
      ctaButton: 'group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#B85C3D] to-[#D4724E] text-white font-bold text-lg uppercase tracking-wide hover:shadow-[0_8px_16px_rgba(184,92,61,0.4)] transition-all duration-300 hover:scale-105'
    },

    wellness: {
      container: 'relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#F5F3EF] to-[#E8F4F0]',
      decorations: () => (
        <>
          <div className="absolute top-20 right-[5%] w-[400px] h-[400px] bg-gradient-to-br from-[#7A9F8F]/20 to-[#8FB8A4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-[8%] w-[350px] h-[350px] bg-gradient-to-br from-[#A8D5E2]/15 to-[#B4D4E1]/10 rounded-full blur-3xl" />
        </>
      ),
      innerWrapper: 'relative z-10 max-w-5xl mx-auto',

      inputsGrid: (hasPackage, inputsLength) => `grid ${hasPackage ? 'md:grid-cols-4' : `md:grid-cols-${Math.min(inputsLength, 3)}`} gap-6 mb-8`,
      inputCard: '',
      inputLabel: 'block text-sm font-medium text-[#5C6F68] mb-2',
      input: 'w-full px-4 py-3 pr-10 bg-white/80 backdrop-blur-sm border border-[#7A9F8F]/20 rounded-full text-[#2D3E3A] placeholder-[#5C6F68] focus:outline-none focus:border-[#7A9F8F]/50 focus:bg-white transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
      chevronUp: 'p-1 text-[#5C6F68] hover:text-[#7A9F8F] transition-colors',
      chevronDown: 'p-1 text-[#5C6F68] hover:text-[#7A9F8F] transition-colors',
      select: 'w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-[#7A9F8F]/20 rounded-full text-[#2D3E3A] focus:outline-none focus:border-[#7A9F8F]/50 focus:bg-white transition-all [&>option]:bg-white',

      resultsContainer: 'bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#7A9F8F]/20 shadow-lg',
      resultsDescription: 'text-[#5C6F68] text-center mb-6',
      metricsGrid: (length) => `grid md:grid-cols-${length} gap-6`,
      metricCard: 'text-center',
      metricLabel: 'text-sm text-[#5C6F68] mb-2',
      metricValue: (highlight) => `text-3xl font-bold ${highlight ? 'text-[#7A9F8F]' : 'text-[#2D3E3A]'}`,

      ctaWrapper: 'mt-10 text-center',
      ctaButton: 'group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7A9F8F] to-[#8FB8A4] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(122,159,143,0.3)]'
    }
  };

  return configs[themeName] || configs.swiss;
};

/**
 * Composant réutilisable de calculateur ROI - Multi-Thèmes
 *
 * @param {Object} props
 * @param {string} props.title - Titre du calculateur (peut contenir du JSX pour premium/wellness)
 * @param {string} props.subtitle - Sous-titre explicatif
 * @param {Array} props.inputs - Configuration des champs d'entrée
 * @param {Function} props.calculate - Fonction qui calcule les résultats
 * @param {Object} props.packageOptions - Options pour le sélecteur de package (optionnel)
 * @param {string} props.theme - Thème: 'swiss', 'premium', 'artisan', 'wellness' (défaut: 'swiss')
 * @param {string} props.color - Ignoré (gardé pour compatibilité)
 * @param {Function} props.onPackageChange - Callback quand le package change (optionnel)
 */
export default function ROICalculator({
  title,
  subtitle,
  inputs,
  calculate,
  packageOptions = null,
  theme = 'swiss',
  color = 'cyan',
  onPackageChange
}) {
  const t = getThemeConfig(theme);

  // États pour les valeurs des inputs
  const [values, setValues] = useState(() => {
    const initialValues = {};
    inputs.forEach(input => {
      initialValues[input.name] = input.defaultValue;
    });
    if (packageOptions) {
      initialValues.selectedPackage = packageOptions.defaultValue;
    }
    return initialValues;
  });

  // Gestion du changement de valeur
  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: Number(value) }));
  };

  // Gestion du changement de package
  const handlePackageChange = (value) => {
    setValues(prev => ({ ...prev, selectedPackage: Number(value) }));
    if (onPackageChange) {
      onPackageChange(Number(value));
    }
  };

  // Incrémenter/décrémenter avec les boutons
  const handleIncrement = (name, step = 1) => {
    const input = inputs.find(i => i.name === name);
    const newValue = Math.min((values[name] || 0) + step, input.max || Infinity);
    handleChange(name, newValue);
  };

  const handleDecrement = (name, step = 1) => {
    const input = inputs.find(i => i.name === name);
    const newValue = Math.max((values[name] || 0) - step, input.min || 0);
    handleChange(name, newValue);
  };

  // Calculer les résultats
  const results = calculate(values);

  // Wrapper avec ou sans innerWrapper selon le thème
  const ContentWrapper = ({ children }) => {
    if (t.innerWrapper) {
      return <div className={t.innerWrapper}>{children}</div>;
    }
    return <>{children}</>;
  };

  return (
    <div className={t.container}>
      {t.decorations && t.decorations()}

      <ContentWrapper>
        {/* Inputs */}
        <div className={t.inputsGrid(!!packageOptions, inputs.length)}>
          {inputs.map((input) => (
            <div key={input.name} className={t.inputCard}>
              <label className={t.inputLabel}>
                {input.label}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={values[input.name]}
                  onChange={(e) => handleChange(input.name, e.target.value)}
                  min={input.min}
                  max={input.max}
                  step={input.step || 1}
                  className={t.input}
                  placeholder={input.placeholder}
                />
                {/* Custom arrows */}
                <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                  <button
                    type="button"
                    onClick={() => handleIncrement(input.name, input.step || 1)}
                    className={t.chevronUp}
                    aria-label="Augmenter"
                  >
                    <ChevronUp size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDecrement(input.name, input.step || 1)}
                    className={t.chevronDown}
                    aria-label="Diminuer"
                  >
                    <ChevronDown size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Package selector si fourni */}
          {packageOptions && (
            <div className={t.inputCard}>
              <label className={t.inputLabel}>
                {packageOptions.label}
              </label>
              <select
                value={values.selectedPackage}
                onChange={(e) => handlePackageChange(e.target.value)}
                className={t.select}
              >
                {packageOptions.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Résultats */}
        <div className={t.resultsContainer}>
          {results.description && (
            <p className={t.resultsDescription} dangerouslySetInnerHTML={{ __html: results.description }} />
          )}

          <div className={t.metricsGrid(results.metrics.length)}>
            {results.metrics.map((metric, index) => (
              <div key={index} className={t.metricCard}>
                <p className={t.metricLabel}>{metric.label}</p>
                <p className={`${t.metricValue(metric.highlight)} ${metric.icon ? 'flex items-center justify-center gap-2' : ''}`}>
                  {metric.icon && <metric.icon size={28} />}
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA optionnel */}
        {results.cta && (
          <div className={t.ctaWrapper}>
            <button
              onClick={results.cta.onClick}
              className={t.ctaButton}
            >
              {results.cta.label}
              {results.cta.icon && <results.cta.icon size={20} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}
