'use client';

import { useState } from 'react';
import { TrendingUp, ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Composant réutilisable de calculateur ROI
 *
 * @param {Object} props
 * @param {string} props.title - Titre du calculateur
 * @param {string} props.subtitle - Sous-titre explicatif
 * @param {Array} props.inputs - Configuration des champs d'entrée
 * @param {Function} props.calculate - Fonction qui calcule les résultats
 * @param {Object} props.packageOptions - Options pour le sélecteur de package (optionnel)
 * @param {string} props.color - Couleur principale (cyan, violet, green, orange)
 * @param {Function} props.onPackageChange - Callback quand le package change (optionnel)
 */
export default function ROICalculator({
  title,
  subtitle,
  inputs,
  calculate,
  packageOptions = null,
  color = 'cyan',
  onPackageChange
}) {
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

  // Couleurs par thème
  const colorClasses = {
    cyan: {
      gradient: 'from-cyan-600 to-blue-600',
      border: 'border-cyan-500/30',
      focus: 'focus:border-cyan-500 focus:ring-cyan-500/20',
      bg: 'bg-cyan-500/10',
      borderAccent: 'border-cyan-500/30',
      text: 'text-cyan-400',
      button: 'hover:bg-cyan-500/10',
      glow: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]'
    },
    violet: {
      gradient: 'from-violet-600 to-purple-600',
      border: 'border-violet-500/30',
      focus: 'focus:border-violet-500 focus:ring-violet-500/20',
      bg: 'bg-violet-500/10',
      borderAccent: 'border-violet-500/30',
      text: 'text-violet-400',
      button: 'hover:bg-violet-500/10',
      glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]'
    },
    green: {
      gradient: 'from-green-600 to-emerald-600',
      border: 'border-green-500/30',
      focus: 'focus:border-green-500 focus:ring-green-500/20',
      bg: 'bg-green-500/10',
      borderAccent: 'border-green-500/30',
      text: 'text-green-400',
      button: 'hover:bg-green-500/10',
      glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]'
    },
    orange: {
      gradient: 'from-orange-600 to-red-600',
      border: 'border-orange-500/30',
      focus: 'focus:border-orange-500 focus:ring-orange-500/20',
      bg: 'bg-orange-500/10',
      borderAccent: 'border-orange-500/30',
      text: 'text-orange-400',
      button: 'hover:bg-orange-500/10',
      glow: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]'
    }
  };

  const theme = colorClasses[color];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-black">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[150px]" />
      <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-${color}-600/10 rounded-full blur-[150px]`} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${theme.bg} border ${theme.borderAccent} rounded-full text-sm ${theme.text} mb-6`}>
            <TrendingUp size={16} />
            <span className="font-semibold">Simulation Personnalisée</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Inputs */}
          <div className={`grid ${packageOptions ? 'md:grid-cols-4' : `md:grid-cols-${Math.min(inputs.length, 3)}`} gap-6 mb-8`}>
            {inputs.map((input) => (
              <div key={input.name}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
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
                    className={`w-full px-4 py-3 pr-10 bg-black/40 border ${theme.border} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${theme.focus} transition-all
                      /* Hide default arrows */
                      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                    `}
                    placeholder={input.placeholder}
                  />
                  {/* Custom arrows */}
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                    <button
                      type="button"
                      onClick={() => handleIncrement(input.name, input.step || 1)}
                      className={`p-1 rounded ${theme.button} text-gray-400 hover:text-white transition-all`}
                      aria-label="Augmenter"
                    >
                      <ChevronUp size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDecrement(input.name, input.step || 1)}
                      className={`p-1 rounded ${theme.button} text-gray-400 hover:text-white transition-all`}
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
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {packageOptions.label}
                </label>
                <select
                  value={values.selectedPackage}
                  onChange={(e) => handlePackageChange(e.target.value)}
                  className={`w-full px-4 py-3 bg-black/40 border ${theme.border} rounded-xl text-white focus:outline-none focus:ring-2 ${theme.focus} transition-all [&>option]:bg-gray-900`}
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
          <div className={`bg-gradient-to-br ${theme.bg} rounded-2xl p-8 border ${theme.borderAccent}`}>
            {results.description && (
              <p className="text-gray-300 text-center mb-6" dangerouslySetInnerHTML={{ __html: results.description }} />
            )}

            <div className={`grid md:grid-cols-${results.metrics.length} gap-6`}>
              {results.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-gray-400 mb-2">{metric.label}</p>
                  <p className={`text-3xl font-bold ${metric.highlight ? theme.text : 'text-white'} ${metric.icon ? 'flex items-center justify-center gap-2' : ''}`}>
                    {metric.icon && <metric.icon size={28} />}
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA optionnel */}
          {results.cta && (
            <div className="mt-10 text-center">
              <button
                onClick={results.cta.onClick}
                className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${theme.gradient} hover:from-${color}-500 hover:to-${color === 'cyan' ? 'blue' : color === 'violet' ? 'purple' : color === 'orange' ? 'red' : 'emerald'}-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 ${theme.glow}`}
              >
                {results.cta.label}
                {results.cta.icon && <results.cta.icon size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
