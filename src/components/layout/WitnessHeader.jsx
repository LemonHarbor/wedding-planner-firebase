import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import './WitnessHeader.css';
import { Link } from 'react-router-dom';

// Komponenten importieren
import Logo from '../ui/Logo';

const WitnessHeader = () => {
  const { themeData } = useTheme();
  const { t } = useLanguage();

  return (
    <header className="witness-header" style={{ 
      backgroundColor: themeData.colors.primary,
      color: '#ffffff'
    }}>
      <div className="witness-header-container">
        <div className="witness-header-logo">
          <Link to="/witness">
            <Logo size="medium" />
          </Link>
        </div>
        
        <div className="witness-header-title">
          <h1 style={{ fontFamily: themeData.fonts.decorative }}>
            {t('witnessPortal')}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default WitnessHeader;
