# LemonVows Seiten

Dieses Verzeichnis enthält alle Hauptseiten der LemonVows Hochzeitsplanungs-Webanwendung. Jede Seite repräsentiert einen wichtigen Bereich der Anwendung und nutzt die wiederverwendbaren Komponenten aus dem `components`-Verzeichnis.

## Struktur

- **admin/**: Admin-Bereich für das Hochzeitspaar
  - **Dashboard.jsx**: Übersichtsseite mit wichtigen Informationen
  - **Settings.jsx**: Einstellungen für die Hochzeitswebseite
  - **ContentEditor.jsx**: Editor für die Inhalte der Hochzeitswebseite
  - **GuestManagement.jsx**: Verwaltung der Gästeliste
  - **BudgetPlanner.jsx**: Budgetplanung und -verfolgung
  - **Timeline.jsx**: Zeitplanung und Aufgabenverwaltung
  - **VendorManagement.jsx**: Verwaltung der Dienstleister
  - **SeatingPlanner.jsx**: Tischplan-Designer
  - **Announcements.jsx**: Ankündigungen an Gäste
  - **Polls.jsx**: Umfragen für Gäste
  - **PhotoGallery.jsx**: Fotogalerie-Verwaltung
  - **ThankYouTracker.jsx**: Danksagungsverfolgung

- **guest/**: Gäste-Bereich
  - **Home.jsx**: Startseite für Gäste
  - **RSVP.jsx**: RSVP-Formular
  - **Info.jsx**: Informationsseite
  - **Schedule.jsx**: Ablaufplan
  - **Location.jsx**: Standortinformationen
  - **Accommodation.jsx**: Unterkunftsinformationen
  - **Music.jsx**: Musikwünsche und Abstimmung
  - **Photos.jsx**: Fotogalerie und Upload
  - **Gifts.jsx**: Geschenkliste
  - **Travel.jsx**: Reiseinformationen

- **witness/**: Trauzeugen-Bereich
  - **Dashboard.jsx**: Übersichtsseite für Trauzeugen
  - **JGAPlanning.jsx**: Planung des Junggesellen-/Junggesellinnenabschieds
  - **Discussion.jsx**: Diskussionsbereich
  - **Expenses.jsx**: Ausgabenverfolgung
  - **Photos.jsx**: JGA-Fotogalerie

- **auth/**: Authentifizierungsseiten
  - **Login.jsx**: Login-Seite
  - **Register.jsx**: Registrierungsseite
  - **ForgotPassword.jsx**: Passwort-Reset-Seite
  - **GuestAuth.jsx**: Gäste-Authentifizierung

- **common/**: Allgemeine Seiten
  - **Landing.jsx**: Landing-Page
  - **NotFound.jsx**: 404-Seite
  - **PrivacyPolicy.jsx**: Datenschutzerklärung
  - **TermsOfService.jsx**: Nutzungsbedingungen

## Routing

Die Navigation zwischen den Seiten wird über React Router implementiert. Die Routenkonfiguration befindet sich in der `App.jsx`-Datei im Hauptverzeichnis.

## Berechtigungen

Der Zugriff auf die verschiedenen Bereiche wird durch die Benutzerrolle gesteuert:
- **Admin**: Zugriff auf den Admin-Bereich
- **Guest**: Zugriff auf den Gäste-Bereich
- **Witness**: Zugriff auf den Trauzeugen-Bereich

## Beispiel

```jsx
import React from 'react';
import { GuestList } from '../../components/guest/GuestList';
import { GuestStats } from '../../components/guest/GuestStats';
import { GuestImport } from '../../components/guest/GuestImport';

const GuestManagement = () => {
  return (
    <div className="guest-management-page">
      <h1>Gästeverwaltung</h1>
      <GuestStats />
      <GuestImport />
      <GuestList />
    </div>
  );
};

export default GuestManagement;
```
