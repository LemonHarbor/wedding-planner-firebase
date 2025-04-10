import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const themes = {
  classic: {
    name: 'Classic',
    colors: {
      primary: '#4A5568',
      secondary: '#CBD5E0',
      accent: '#B794F4',
      background: '#FFFFFF',
      text: '#2D3748',
      error: '#E53E3E',
      success: '#38A169',
      warning: '#ECC94B'
    },
    fonts: {
      primary: '"Playfair Display", serif',
      secondary: '"Montserrat", sans-serif',
      decorative: '"Great Vibes", cursive'
    }
  },
  rustic: {
    name: 'Rustic',
    colors: {
      primary: '#795548',
      secondary: '#D7CCC8',
      accent: '#FFAB91',
      background: '#EFEBE9',
      text: '#3E2723',
      error: '#C62828',
      success: '#2E7D32',
      warning: '#F9A825'
    },
    fonts: {
      primary: '"Amatic SC", cursive',
      secondary: '"Roboto Slab", serif',
      decorative: '"Satisfy", cursive'
    }
  },
  modern: {
    name: 'Modern',
    colors: {
      primary: '#2B6CB0',
      secondary: '#A0AEC0',
      accent: '#F56565',
      background: '#F7FAFC',
      text: '#1A202C',
      error: '#C53030',
      success: '#2F855A',
      warning: '#D69E2E'
    },
    fonts: {
      primary: '"Raleway", sans-serif',
      secondary: '"Open Sans", sans-serif',
      decorative: '"Parisienne", cursive'
    }
  },
  romantic: {
    name: 'Romantic',
    colors: {
      primary: '#B83280',
      secondary: '#FBB6CE',
      accent: '#D53F8C',
      background: '#FFF5F7',
      text: '#702459',
      error: '#C53030',
      success: '#2F855A',
      warning: '#D69E2E'
    },
    fonts: {
      primary: '"Cormorant Garamond", serif',
      secondary: '"Lato", sans-serif',
      decorative: '"Dancing Script", cursive'
    }
  },
  bohemian: {
    name: 'Bohemian',
    colors: {
      primary: '#805AD5',
      secondary: '#D6BCFA',
      accent: '#F6AD55',
      background: '#FAF5FF',
      text: '#44337A',
      error: '#C53030',
      success: '#2F855A',
      warning: '#D69E2E'
    },
    fonts: {
      primary: '"Josefin Sans", sans-serif',
      secondary: '"Poppins", sans-serif',
      decorative: '"Kaushan Script", cursive'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('classic');
  const [themeData, setThemeData] = useState(themes.classic);

  // Lade gespeichertes Theme aus dem localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('lemonvows-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      setThemeData(themes[savedTheme]);
    }
  }, []);

  // Theme wechseln
  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      setThemeData(themes[themeName]);
      localStorage.setItem('lemonvows-theme', themeName);
    }
  };

  // CSS-Variablen im :root setzen
  useEffect(() => {
    const root = document.documentElement;
    
    // Farben setzen
    Object.entries(themeData.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // Schriftarten setzen
    Object.entries(themeData.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
  }, [themeData]);

  const value = {
    currentTheme,
    themeData,
    changeTheme,
    availableThemes: Object.keys(themes).map(key => ({
      id: key,
      name: themes[key].name
    }))
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
