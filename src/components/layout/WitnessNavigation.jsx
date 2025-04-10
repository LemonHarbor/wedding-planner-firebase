import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import './WitnessNavigation.css';
import { NavLink } from 'react-router-dom';

// Komponenten importieren
import Icon from '../ui/Icon';

const WitnessNavigation = () => {
  const { themeData } = useTheme();
  const { t } = useLanguage();

  const navItems = [
    { label: t('dashboard'), icon: 'dashboard', path: '/witness' },
    { label: t('jga'), icon: 'celebration', path: '/witness/jga' },
    { label: t('discussion'), icon: 'forum', path: '/witness/discussion' },
    { label: t('expenses'), icon: 'account_balance_wallet', path: '/witness/expenses' },
    { label: t('photos'), icon: 'photo_library', path: '/witness/photos' }
  ];

  return (
    <nav className="witness-navigation" style={{ 
      backgroundColor: themeData.colors.secondary,
      color: themeData.colors.text
    }}>
      <ul className="witness-nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="witness-nav-item">
            <NavLink 
              to={item.path}
              className={({ isActive }) => isActive ? 'witness-nav-link active' : 'witness-nav-link'}
              style={({ isActive }) => isActive ? { 
                backgroundColor: themeData.colors.accent,
                color: '#ffffff'
              } : {}}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default WitnessNavigation;
