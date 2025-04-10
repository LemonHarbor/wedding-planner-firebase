import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import './AuthLayout.css';

// Komponenten importieren
import Logo from '../ui/Logo';

const AuthLayout = ({ children }) => {
  const { themeData } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="auth-layout" style={{ 
      fontFamily: themeData.fonts.secondary,
      backgroundColor: themeData.colors.background,
      color: themeData.colors.text
    }}>
      <div className="auth-container">
        <div className="auth-logo">
          <Logo size="large" />
        </div>
        <div className="auth-content">
          {children}
        </div>
        <div className="auth-footer">
          <p>&copy; {new Date().getFullYear()} LemonVows. {t('allRightsReserved')}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
