import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const WeddingContext = createContext();

export const useWedding = () => {
  return useContext(WeddingContext);
};

export const WeddingProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Hochzeitsdaten
  const [weddingData, setWeddingData] = useState({
    id: null,
    coupleName: '',
    weddingDate: null,
    location: {
      name: '',
      address: '',
      coordinates: null
    },
    brideInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    groomInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    events: [],
    settings: {
      theme: 'classic',
      language: 'de',
      privacySettings: {
        isPublic: false,
        requirePassword: false,
        password: ''
      }
    },
    createdAt: null,
    updatedAt: null
  });

  // Hochzeitsdaten aus Firestore laden
  useEffect(() => {
    const fetchWeddingData = async () => {
      if (!currentUser) {
        setLoading(false);
        return;
      }

      try {
        setError(null);
        const weddingDoc = await getDoc(doc(db, 'weddings', currentUser.uid));
        
        if (weddingDoc.exists()) {
          setWeddingData({
            id: weddingDoc.id,
            ...weddingDoc.data()
          });
        } else {
          // Erstelle ein neues Hochzeitsdokument, wenn keines existiert
          const newWeddingData = {
            ...weddingData,
            id: currentUser.uid,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          
          await setDoc(doc(db, 'weddings', currentUser.uid), newWeddingData);
          setWeddingData(newWeddingData);
        }
      } catch (err) {
        console.error('Error fetching wedding data:', err);
        setError('Failed to load wedding data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeddingData();
  }, [currentUser]);

  // Hochzeitsdaten aktualisieren
  const updateWedding = async (newData) => {
    if (!currentUser || !weddingData.id) {
      throw new Error('No wedding data to update');
    }

    try {
      setError(null);
      const updatedData = {
        ...weddingData,
        ...newData,
        updatedAt: new Date().toISOString()
      };
      
      await updateDoc(doc(db, 'weddings', weddingData.id), updatedData);
      setWeddingData(updatedData);
      
      return updatedData;
    } catch (err) {
      console.error('Error updating wedding data:', err);
      setError('Failed to update wedding data');
      throw err;
    }
  };

  // Event hinzufügen
  const addEvent = async (event) => {
    if (!currentUser || !weddingData.id) {
      throw new Error('No wedding data to update');
    }

    try {
      setError(null);
      const newEvent = {
        id: Date.now().toString(),
        ...event,
        createdAt: new Date().toISOString()
      };
      
      const updatedEvents = [...weddingData.events, newEvent];
      const updatedData = {
        ...weddingData,
        events: updatedEvents,
        updatedAt: new Date().toISOString()
      };
      
      await updateDoc(doc(db, 'weddings', weddingData.id), {
        events: updatedEvents,
        updatedAt: new Date().toISOString()
      });
      
      setWeddingData(updatedData);
      return newEvent;
    } catch (err) {
      console.error('Error adding event:', err);
      setError('Failed to add event');
      throw err;
    }
  };

  // Event aktualisieren
  const updateEvent = async (eventId, eventData) => {
    if (!currentUser || !weddingData.id) {
      throw new Error('No wedding data to update');
    }

    try {
      setError(null);
      const eventIndex = weddingData.events.findIndex(e => e.id === eventId);
      
      if (eventIndex === -1) {
        throw new Error('Event not found');
      }
      
      const updatedEvents = [...weddingData.events];
      updatedEvents[eventIndex] = {
        ...updatedEvents[eventIndex],
        ...eventData,
        updatedAt: new Date().toISOString()
      };
      
      const updatedData = {
        ...weddingData,
        events: updatedEvents,
        updatedAt: new Date().toISOString()
      };
      
      await updateDoc(doc(db, 'weddings', weddingData.id), {
        events: updatedEvents,
        updatedAt: new Date().toISOString()
      });
      
      setWeddingData(updatedData);
      return updatedEvents[eventIndex];
    } catch (err) {
      console.error('Error updating event:', err);
      setError('Failed to update event');
      throw err;
    }
  };

  // Event löschen
  const deleteEvent = async (eventId) => {
    if (!currentUser || !weddingData.id) {
      throw new Error('No wedding data to update');
    }

    try {
      setError(null);
      const updatedEvents = weddingData.events.filter(e => e.id !== eventId);
      
      const updatedData = {
        ...weddingData,
        events: updatedEvents,
        updatedAt: new Date().toISOString()
      };
      
      await updateDoc(doc(db, 'weddings', weddingData.id), {
        events: updatedEvents,
        updatedAt: new Date().toISOString()
      });
      
      setWeddingData(updatedData);
      return true;
    } catch (err) {
      console.error('Error deleting event:', err);
      setError('Failed to delete event');
      throw err;
    }
  };

  // Einstellungen aktualisieren
  const updateSettings = async (newSettings) => {
    if (!currentUser || !weddingData.id) {
      throw new Error('No wedding data to update');
    }

    try {
      setError(null);
      const updatedSettings = {
        ...weddingData.settings,
        ...newSettings
      };
      
      const updatedData = {
        ...weddingData,
        settings: updatedSettings,
        updatedAt: new Date().toISOString()
      };
      
      await updateDoc(doc(db, 'weddings', weddingData.id), {
        settings: updatedSettings,
        updatedAt: new Date().toISOString()
      });
      
      setWeddingData(updatedData);
      return updatedSettings;
    } catch (err) {
      console.error('Error updating settings:', err);
      setError('Failed to update settings');
      throw err;
    }
  };

  const value = {
    weddingData,
    loading,
    error,
    updateWedding,
    addEvent,
    updateEvent,
    deleteEvent,
    updateSettings
  };

  return (
    <WeddingContext.Provider value={value}>
      {children}
    </WeddingContext.Provider>
  );
};

export default WeddingContext;
