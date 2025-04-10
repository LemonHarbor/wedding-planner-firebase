import React from 'react';
import { useTheme } from '../../utils/context/ThemeContext';
import { useLanguage } from '../../utils/context/LanguageContext';
import './AdminLayout.css';

// Komponenten importieren
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const AdminLayout = ({ children }) => {
  const { themeData } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="admin-layout" style={{ 
      fontFamily: themeData.fonts.secondary,
      backgroundColor: themeData.colors.background,
      color: themeData.colors.text
    }}>
      <Header />
      <div className="admin-layout-container">
        <Sidebar />
        <main className="admin-layout-content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
