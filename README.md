# Hochzeitsplanungs-Webanwendung - Firebase Konfiguration

Diese Datei enthält eine Übersicht über die Firebase-Konfiguration für die Hochzeitsplanungs-Webanwendung.

## Projektstruktur

Die Firebase-Konfiguration ist wie folgt strukturiert:

```
firebase_project/
├── .firebaserc                 # Firebase Projekt-Konfiguration
├── firebase.json               # Hauptkonfigurationsdatei
├── auth/
│   └── users.json              # Beispiel-Benutzerkonten für Import
├── firestore/
│   ├── schema.json             # Datenbankschema
│   ├── firestore.rules         # Sicherheitsregeln für Firestore
│   └── firestore.indexes.json  # Indizes für Firestore
└── storage/
    └── storage.rules           # Sicherheitsregeln für Storage
```

## Datenmodell

Das Datenmodell ist in `firestore/schema.json` definiert und umfasst folgende Hauptkollektionen:

- **users**: Benutzer der Anwendung (Hochzeitspaar, Trauzeugen)
- **weddings**: Hochzeitsdetails mit Unterkollektionen für:
  - sections: Sektionen der Homepage
  - guests: Gästeliste
  - guestGroups: Gästegruppen
  - budgetCategories: Budgetkategorien
  - budgetItems: Budgeteinträge
  - timelineTasks: Timeline-Aufgaben
  - vendors: Dienstleister
  - tables: Tische für Tischplan
  - seatAssignments: Sitzplatzzuweisungen
  - announcements: Ankündigungen an Gäste
  - polls: Umfragen für Gäste
  - guestPhotos: Von Gästen hochgeladene Fotos
  - thankyouTracking: Danksagungsverfolgung
- **jgaPlanning**: JGA-Planung für Trauzeugen mit Unterkollektionen für:
  - discussions: Diskussionen
  - expenses: Ausgaben
  - photos: Fotos

## Benutzerrollen

Die Anwendung unterstützt drei Hauptbenutzerrollen:

1. **Admin** (Hochzeitspaar): Vollzugriff auf alle Planungs- und Verwaltungsfunktionen
2. **Guest** (Gäste): Eingeschränkter Zugriff auf freigegebene Informationen
3. **Witness** (Trauzeugen): Zugriff auf JGA-Planung und bestimmte Hochzeitsinformationen

## Sicherheitsregeln

Die Sicherheitsregeln sind so konfiguriert, dass:

- Hochzeitspaare (Admins) vollen Zugriff auf ihre Hochzeitsdaten haben
- Gäste nur auf für sie freigegebene Informationen zugreifen können
- Trauzeugen Zugriff auf die JGA-Planung und bestimmte Hochzeitsinformationen haben
- Dateien in Storage entsprechend den Benutzerrollen geschützt sind

## Import in Firebase Studio

Um diese Konfiguration in Firebase Studio zu importieren:

1. Erstellen Sie ein neues Firebase-Projekt in der Firebase Console
2. Aktualisieren Sie die Projekt-ID in `.firebaserc`
3. Installieren Sie die Firebase CLI und melden Sie sich an
4. Führen Sie `firebase deploy` aus, um die Konfiguration hochzuladen
5. Alternativ können Sie die einzelnen Komponenten über die Firebase Console importieren:
   - Firestore-Regeln und -Indizes über die Firestore-Konsole
   - Storage-Regeln über die Storage-Konsole
   - Authentifizierungsdaten über die Auth-Konsole

## Mehrsprachigkeit

Die Anwendung unterstützt Deutsch (Standard) und Englisch. Die Übersetzungen müssen in der Frontend-Anwendung implementiert werden.

## Themes

Die Anwendung unterstützt mehrere visuelle Themes, die vom Hochzeitspaar ausgewählt werden können. Die Theme-Auswahl wird in der Firestore-Datenbank gespeichert.
