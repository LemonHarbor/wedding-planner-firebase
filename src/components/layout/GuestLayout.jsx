import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import './GuestLayout.css';

// Komponenten importieren
import GuestHeader from './GuestHeader';
import GuestFooter from './GuestFooter';
import GuestNavigation from './GuestNavigation';

const GuestLayout = ({ children }) => {
  const { themeData } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="guest-layout" style={{ 
      fontFamily: themeData.fonts.secondary,
      backgroundColor: themeData.colors.background,
      color: themeData.colors.text
    }}>
      <GuestHeader />
      <GuestNavigation />
      <main className="guest-layout-content">
        {children}
      </main>
      <GuestFooter />
    </div>
  );
};

export default GuestLayout;
