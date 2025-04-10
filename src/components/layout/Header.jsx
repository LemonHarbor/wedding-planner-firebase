import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import { useAuth } from '../../utils/context/AuthContext';
import { useWedding } from '../../utils/context/WeddingContext';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

// Komponenten importieren
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import Dropdown from '../ui/Dropdown';

const Header = () => {
  const { themeData } = useTheme();
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const { currentUser, userRole, logout } = useAuth();
  const { weddingData } = useWedding();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const userMenuItems = [
    { label: t('profile'), onClick: () => navigate('/admin/settings') },
    { label: t('logout'), onClick: handleLogout }
  ];

  const languageItems = [
    { label: 'Deutsch', onClick: () => changeLanguage('de') },
    { label: 'English', onClick: () => changeLanguage('en') }
  ];

  return (
    <header className="header" style={{ 
      backgroundColor: themeData.colors.primary,
      color: '#ffffff'
    }}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/admin">
            <Logo size="medium" />
          </Link>
        </div>
        
        <div className="header-title">
          <h1 style={{ fontFamily: themeData.fonts.decorative }}>
            {weddingData?.coupleName || 'LemonVows'}
          </h1>
        </div>
        
        <div className="header-actions">
          <Dropdown 
            trigger={<Button variant="text" color="light">{currentLanguage === 'de' ? 'DE' : 'EN'}</Button>}
            items={languageItems}
          />
          
          <Dropdown
            trigger={<Avatar name={currentUser?.displayName || 'User'} />}
            items={userMenuItems}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
