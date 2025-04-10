import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

// Komponenten importieren
import Icon from '../ui/Icon';

const Sidebar = () => {
  const { themeData } = useTheme();
  const { t } = useLanguage();

  const navItems = [
    { label: t('dashboard'), icon: 'dashboard', path: '/admin' },
    { label: t('content'), icon: 'edit', path: '/admin/content' },
    { label: t('guests'), icon: 'people', path: '/admin/guests' },
    { label: t('budget'), icon: 'money', path: '/admin/budget' },
    { label: t('timeline'), icon: 'calendar', path: '/admin/timeline' },
    { label: t('vendors'), icon: 'store', path: '/admin/vendors' },
    { label: t('seating'), icon: 'chair', path: '/admin/seating' },
    { label: t('announcements'), icon: 'announcement', path: '/admin/announcements' },
    { label: t('polls'), icon: 'poll', path: '/admin/polls' },
    { label: t('photos'), icon: 'photo', path: '/admin/photos' },
    { label: t('thankYou'), icon: 'favorite', path: '/admin/thank-you' },
    { label: t('settings'), icon: 'settings', path: '/admin/settings' }
  ];

  return (
    <aside className="sidebar" style={{ 
      backgroundColor: themeData.colors.secondary,
      color: themeData.colors.text
    }}>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => isActive ? 'sidebar-nav-item active' : 'sidebar-nav-item'}
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
    </aside>
  );
};

export default Sidebar;
