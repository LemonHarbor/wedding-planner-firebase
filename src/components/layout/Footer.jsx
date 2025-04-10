import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import './Footer.css';

// Komponenten importieren
import Logo from '../ui/Logo';

const Footer = () => {
  const { themeData } = useTheme();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ 
      backgroundColor: themeData.colors.primary,
      color: '#ffffff'
    }}>
      <div className="footer-container">
        <div className="footer-logo">
          <Logo size="small" />
        </div>
        
        <div className="footer-links">
          <a href="/privacy-policy">{t('privacyPolicy')}</a>
          <a href="/terms-of-service">{t('termsOfService')}</a>
          <a href="mailto:support@lemonvows.com">{t('contact')}</a>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {currentYear} LemonVows. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
