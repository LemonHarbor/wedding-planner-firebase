import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

const translations = {
  de: {
    // Allgemein
    appName: 'LemonVows',
    save: 'Speichern',
    cancel: 'Abbrechen',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    loading: 'Wird geladen...',
    success: 'Erfolgreich!',
    error: 'Fehler!',
    
    // Authentifizierung
    login: 'Anmelden',
    register: 'Registrieren',
    email: 'E-Mail',
    password: 'Passwort',
    forgotPassword: 'Passwort vergessen?',
    resetPassword: 'Passwort zurücksetzen',
    noAccount: 'Noch kein Konto?',
    hasAccount: 'Bereits ein Konto?',
    guestAccess: 'Gast-Zugang',
    
    // Navigation
    dashboard: 'Dashboard',
    settings: 'Einstellungen',
    content: 'Inhalte',
    guests: 'Gäste',
    budget: 'Budget',
    timeline: 'Zeitplan',
    vendors: 'Dienstleister',
    seating: 'Sitzplan',
    announcements: 'Ankündigungen',
    polls: 'Umfragen',
    photos: 'Fotos',
    thankYou: 'Danksagungen',
    
    // Gäste-Bereich
    home: 'Startseite',
    rsvp: 'Zusagen/Absagen',
    info: 'Informationen',
    schedule: 'Ablauf',
    location: 'Location',
    accommodation: 'Unterkunft',
    music: 'Musik',
    gifts: 'Geschenke',
    travel: 'Anreise',
    
    // Trauzeugen-Bereich
    jga: 'JGA-Planung',
    discussion: 'Diskussion',
    expenses: 'Ausgaben',
    
    // Gästemanagement
    guestList: 'Gästeliste',
    addGuest: 'Gast hinzufügen',
    editGuest: 'Gast bearbeiten',
    firstName: 'Vorname',
    lastName: 'Nachname',
    phone: 'Telefon',
    attending: 'Teilnahme',
    notAttending: 'Keine Teilnahme',
    pending: 'Ausstehend',
    mealChoice: 'Menüauswahl',
    plusOne: 'Begleitung',
    
    // Budget
    totalBudget: 'Gesamtbudget',
    spent: 'Ausgegeben',
    remaining: 'Verbleibend',
    category: 'Kategorie',
    amount: 'Betrag',
    date: 'Datum',
    addExpense: 'Ausgabe hinzufügen',
    
    // Zeitplan
    addTask: 'Aufgabe hinzufügen',
    dueDate: 'Fälligkeitsdatum',
    completed: 'Abgeschlossen',
    overdue: 'Überfällig',
    upcoming: 'Anstehend',
    
    // Dienstleister
    addVendor: 'Dienstleister hinzufügen',
    vendorName: 'Name',
    vendorType: 'Typ',
    contact: 'Kontakt',
    website: 'Website',
    notes: 'Notizen',
    
    // Sitzplan
    table: 'Tisch',
    addTable: 'Tisch hinzufügen',
    tableType: 'Tischform',
    capacity: 'Kapazität',
    assignGuests: 'Gäste zuweisen',
    
    // Einstellungen
    profile: 'Profil',
    weddingDetails: 'Hochzeitsdetails',
    weddingDate: 'Hochzeitsdatum',
    brideInfo: 'Braut-Informationen',
    groomInfo: 'Bräutigam-Informationen',
    theme: 'Theme',
    language: 'Sprache',
    privacy: 'Datenschutz',
    
    // Fehlermeldungen
    requiredField: 'Dieses Feld ist erforderlich',
    invalidEmail: 'Ungültige E-Mail-Adresse',
    passwordTooShort: 'Passwort muss mindestens 6 Zeichen lang sein',
    loginFailed: 'Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldedaten.',
    networkError: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.'
  },
  en: {
    // General
    appName: 'LemonVows',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    loading: 'Loading...',
    success: 'Success!',
    error: 'Error!',
    
    // Authentication
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot password?',
    resetPassword: 'Reset Password',
    noAccount: 'Don\'t have an account?',
    hasAccount: 'Already have an account?',
    guestAccess: 'Guest Access',
    
    // Navigation
    dashboard: 'Dashboard',
    settings: 'Settings',
    content: 'Content',
    guests: 'Guests',
    budget: 'Budget',
    timeline: 'Timeline',
    vendors: 'Vendors',
    seating: 'Seating',
    announcements: 'Announcements',
    polls: 'Polls',
    photos: 'Photos',
    thankYou: 'Thank You',
    
    // Guest Area
    home: 'Home',
    rsvp: 'RSVP',
    info: 'Information',
    schedule: 'Schedule',
    location: 'Location',
    accommodation: 'Accommodation',
    music: 'Music',
    gifts: 'Gifts',
    travel: 'Travel',
    
    // Witness Area
    jga: 'Bachelor/ette Party',
    discussion: 'Discussion',
    expenses: 'Expenses',
    
    // Guest Management
    guestList: 'Guest List',
    addGuest: 'Add Guest',
    editGuest: 'Edit Guest',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone',
    attending: 'Attending',
    notAttending: 'Not Attending',
    pending: 'Pending',
    mealChoice: 'Meal Choice',
    plusOne: 'Plus One',
    
    // Budget
    totalBudget: 'Total Budget',
    spent: 'Spent',
    remaining: 'Remaining',
    category: 'Category',
    amount: 'Amount',
    date: 'Date',
    addExpense: 'Add Expense',
    
    // Timeline
    addTask: 'Add Task',
    dueDate: 'Due Date',
    completed: 'Completed',
    overdue: 'Overdue',
    upcoming: 'Upcoming',
    
    // Vendors
    addVendor: 'Add Vendor',
    vendorName: 'Name',
    vendorType: 'Type',
    contact: 'Contact',
    website: 'Website',
    notes: 'Notes',
    
    // Seating
    table: 'Table',
    addTable: 'Add Table',
    tableType: 'Table Type',
    capacity: 'Capacity',
    assignGuests: 'Assign Guests',
    
    // Settings
    profile: 'Profile',
    weddingDetails: 'Wedding Details',
    weddingDate: 'Wedding Date',
    brideInfo: 'Bride Information',
    groomInfo: 'Groom Information',
    theme: 'Theme',
    language: 'Language',
    privacy: 'Privacy',
    
    // Error Messages
    requiredField: 'This field is required',
    invalidEmail: 'Invalid email address',
    passwordTooShort: 'Password must be at least 6 characters long',
    loginFailed: 'Login failed. Please check your credentials.',
    networkError: 'Network error. Please check your internet connection.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('de');
  const [translations, setTranslations] = useState(translations.de);

  // Lade gespeicherte Sprache aus dem localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('lemonvows-language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
      setTranslations(translations[savedLanguage]);
    }
  }, []);

  // Sprache wechseln
  const changeLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
      setTranslations(translations[language]);
      localStorage.setItem('lemonvows-language', language);
    }
  };

  // Text übersetzen
  const t = (key) => {
    return translations[key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: [
      { id: 'de', name: 'Deutsch' },
      { id: 'en', name: 'English' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
