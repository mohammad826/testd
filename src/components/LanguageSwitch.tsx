import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-5 w-5 text-gray-600" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'fa')}
        className="bg-transparent text-sm font-medium text-gray-600 focus:outline-none cursor-pointer"
        style={{ fontFamily: 'var(--font-' + language + ')' }}
      >
        <option value="en" style={{ fontFamily: 'var(--font-en)' }}>English</option>
        <option value="es" style={{ fontFamily: 'var(--font-es)' }}>Español</option>
        <option value="fa" style={{ fontFamily: 'var(--font-fa)' }}>فارسی</option>
      </select>
    </div>
  );
}