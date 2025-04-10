import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import './GuestHeader.css';
import { Link } from 'react-router-dom';

// Komponenten importieren
import Logo from '../ui/Logo';

const GuestHeader = () => {
  const { themeData } = useTheme();
  const { t } = useLanguage();

  return (
    <header className="guest-header" style={{ 
      backgroundColor: themeData.colors.primary,
      color: '#ffffff'
    }}>
      <div className="guest-header-container">
        <div className="guest-header-logo">
          <Link to="/guest">
            <Logo size="medium" />
          </Link>
        </div>
        
        <div className="guest-header-title">
          <h1 style={{ fontFamily: themeData.fonts.decorative }}>
            {t('weddingInvitation')}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;
