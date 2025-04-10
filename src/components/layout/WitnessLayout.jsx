import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import './WitnessLayout.css';

// Komponenten importieren
import WitnessHeader from './WitnessHeader';
import WitnessNavigation from './WitnessNavigation';
import WitnessFooter from './WitnessFooter';

const WitnessLayout = ({ children }) => {
  const { themeData } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="witness-layout" style={{ 
      fontFamily: themeData.fonts.secondary,
      backgroundColor: themeData.colors.background,
      color: themeData.colors.text
    }}>
      <WitnessHeader />
      <WitnessNavigation />
      <main className="witness-layout-content">
        {children}
      </main>
      <WitnessFooter />
    </div>
  );
};

export default WitnessLayout;
