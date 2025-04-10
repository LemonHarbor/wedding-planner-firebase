# LemonVows Utilities

Dieses Verzeichnis enthält Hilfsfunktionen und Dienstprogramme, die in der gesamten LemonVows Anwendung verwendet werden.

## Struktur

- **firebase/**: Firebase-bezogene Utilities
  - **config.js**: Firebase-Konfiguration
  - **auth.js**: Authentifizierungsfunktionen
  - **firestore.js**: Firestore-Datenbankfunktionen
  - **storage.js**: Firebase Storage-Funktionen

- **i18n/**: Internationalisierungsfunktionen
  - **i18n.js**: i18n-Konfiguration
  - **de.js**: Deutsche Übersetzungen
  - **en.js**: Englische Übersetzungen

- **ai/**: KI-bezogene Utilities
  - **chatbot.js**: Chatbot-Funktionalität
  - **recommendations.js**: Empfehlungsalgorithmen
  - **sentiment.js**: Stimmungsanalyse

- **helpers/**: Allgemeine Hilfsfunktionen
  - **date.js**: Datums- und Zeitfunktionen
  - **validation.js**: Validierungsfunktionen
  - **formatting.js**: Formatierungsfunktionen
  - **export.js**: Export-Funktionen

- **hooks/**: React Hooks
  - **useAuth.js**: Authentifizierungs-Hook
  - **useFirestore.js**: Firestore-Hook
  - **useStorage.js**: Storage-Hook
  - **useResponsive.js**: Responsive Design-Hook

- **context/**: React Context Provider
  - **AuthContext.js**: Authentifizierungskontext
  - **ThemeContext.js**: Theme-Kontext
  - **WeddingContext.js**: Hochzeitskontext
  - **LanguageContext.js**: Sprachkontext

## Beispiele

### Firebase-Konfiguration (config.js)

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

### Authentifizierungs-Hook (useAuth.js)

```javascript
import { useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const register = async (email, password) => {
    try {
      setError(null);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return { user, loading, error, login, register, logout };
};
```

### Datumsfunktionen (date.js)

```javascript
export const formatDate = (date, locale = 'de-DE') => {
  return new Date(date).toLocaleDateString(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

export const formatTime = (date, locale = 'de-DE') => {
  return new Date(date).toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const calculateDaysUntil = (targetDate) => {
  const now = new Date();
  const target = new Date(targetDate);
  const diffTime = Math.abs(target - now);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
```
