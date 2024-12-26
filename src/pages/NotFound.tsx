import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-blue-600/10 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
              404
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t('notFound.title')}
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {t('notFound.description')}
        </p>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder={t('notFound.searchPlaceholder')}
              className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${dir === 'rtl' ? 'pr-12' : 'pl-12'}`}
            />
            <Search className={`absolute ${dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5`} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
          >
            <Home className={`h-5 w-5 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
            {t('notFound.backHome')}
          </Link>
          <Link
            to="/courses"
            className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
          >
            <ArrowLeft className={`h-5 w-5 ${dir === 'rtl' ? 'ml-2 rtl-flip' : 'mr-2'}`} />
            {t('notFound.browseCourses')}
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <Link to="/courses" className="text-gray-600 hover:text-blue-600">
            {t('notFound.helpfulLinks.popularCourses')}
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">
            {t('notFound.helpfulLinks.contactSupport')}
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600">
            {t('notFound.helpfulLinks.howItWorks')}
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-blue-600">
            {t('notFound.helpfulLinks.signUp')}
          </Link>
        </div>
      </div>
    </div>
  );
}