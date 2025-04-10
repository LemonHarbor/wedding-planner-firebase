import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import './GuestNavigation.css';
import { NavLink } from 'react-router-dom';

// Komponenten importieren
import Icon from '../ui/Icon';

const GuestNavigation = () => {
  const { themeData } = useTheme();
  const { t } = useLanguage();

  const navItems = [
    { label: t('home'), icon: 'home', path: '/guest' },
    { label: t('rsvp'), icon: 'check_circle', path: '/guest/rsvp' },
    { label: t('info'), icon: 'info', path: '/guest/info' },
    { label: t('schedule'), icon: 'schedule', path: '/guest/schedule' },
    { label: t('location'), icon: 'place', path: '/guest/location' },
    { label: t('accommodation'), icon: 'hotel', path: '/guest/accommodation' },
    { label: t('music'), icon: 'music_note', path: '/guest/music' },
    { label: t('photos'), icon: 'photo_library', path: '/guest/photos' },
    { label: t('gifts'), icon: 'card_giftcard', path: '/guest/gifts' },
    { label: t('travel'), icon: 'directions_car', path: '/guest/travel' }
  ];

  return (
    <nav className="guest-navigation" style={{ 
      backgroundColor: themeData.colors.secondary,
      color: themeData.colors.text
    }}>
      <ul className="guest-nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="guest-nav-item">
            <NavLink 
              to={item.path}
              className={({ isActive }) => isActive ? 'guest-nav-link active' : 'guest-nav-link'}
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

export default GuestNavigation;
