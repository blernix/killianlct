'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { trackROIInteraction } from '@/lib/tracking';

const gridColsMap = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

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

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: Number(value) }));
  };

  const handlePackageChange = (value) => {
    setValues(prev => ({ ...prev, selectedPackage: Number(value) }));
    if (onPackageChange) {
      onPackageChange(Number(value));
    }
  };

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

  const results = calculate(values);

  const hasPackage = !!packageOptions;
  const inputsGridCols = hasPackage ? 4 : Math.min(inputs.length, 3);

  return (
    <div className="border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-8 md:p-12">
      {/* Inputs */}
      <div className={`grid ${gridColsMap[inputsGridCols]} gap-px bg-[#E5E5E5] mb-8`}>
        {inputs.map((input) => (
          <div key={input.name} className="bg-white dark:bg-[#1A1A1A] p-6">
            <label className="block text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em] mb-4">
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
                className="w-full px-4 py-3 pr-10 bg-[#FAFAFA] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#2A2A2A] text-[#2A2A2A] dark:text-[#FAFAFA] font-light placeholder-[#666666] dark:placeholder-[#999999] focus:outline-none focus:border-[#0066FF] focus:bg-white dark:focus:bg-[#1A1A1A] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder={input.placeholder}
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                <button
                  type="button"
                  onClick={() => { trackROIInteraction('increment', input.name, { value: values[input.name] }); handleIncrement(input.name, input.step || 1); }}
                  className="p-1 text-[#666666] dark:text-[#999999] hover:text-[#0066FF] transition-colors"
                  aria-label="Augmenter"
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => { trackROIInteraction('decrement', input.name, { value: values[input.name] }); handleDecrement(input.name, input.step || 1); }}
                  className="p-1 text-[#666666] dark:text-[#999999] hover:text-[#0066FF] transition-colors"
                  aria-label="Diminuer"
                >
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {packageOptions && (
          <div className="bg-white dark:bg-[#1A1A1A] p-6">
            <label className="block text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em] mb-4">
              {packageOptions.label}
            </label>
            <select
              value={values.selectedPackage}
              onChange={(e) => handlePackageChange(e.target.value)}
              className="w-full px-4 py-3 bg-[#FAFAFA] dark:bg-[#0A0A0A] border border-[#E5E5E5] dark:border-[#2A2A2A] text-[#2A2A2A] dark:text-[#FAFAFA] font-light focus:outline-none focus:border-[#0066FF] focus:bg-white dark:focus:bg-[#1A1A1A] transition-colors [&>option]:bg-white dark:[&>option]:bg-[#1A1A1A]"
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

      {/* Results */}
      <div className="border border-[#E5E5E5] dark:border-[#2A2A2A] bg-[#FAFAFA] dark:bg-[#0A0A0A] p-8">
        {results.description && (
          <p className="text-[#666666] dark:text-[#999999] text-center mb-8 font-light" dangerouslySetInnerHTML={{ __html: results.description }} />
        )}

        <div className={`grid ${gridColsMap[results.metrics.length] || 'md:grid-cols-2'} gap-px bg-[#E5E5E5]`}>
          {results.metrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-[#1A1A1A] p-6 text-center">
              <p className="text-xs text-[#666666] dark:text-[#999999] mb-3 uppercase tracking-[0.2em]">{metric.label}</p>
              <p className={`text-3xl font-light ${metric.highlight ? 'text-[#0066FF]' : 'text-[#2A2A2A] dark:text-[#FAFAFA]'} ${metric.icon ? 'flex items-center justify-center gap-2' : ''}`}>
                {metric.icon && <metric.icon size={28} />}
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      {results.cta && (
        <div className="mt-8 text-center">
          <button
            onClick={() => { trackROIInteraction('cta', 'calculator', values); results.cta.onClick(); }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
          >
            {results.cta.label}
            {results.cta.icon && <results.cta.icon size={20} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </div>
      )}
    </div>
  );
}
