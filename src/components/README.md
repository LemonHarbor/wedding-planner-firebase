# LemonVows Komponenten

Dieses Verzeichnis enthält alle wiederverwendbaren UI-Komponenten für die LemonVows Hochzeitsplanungs-Webanwendung. Die Komponenten sind nach Funktionalität und Verwendungszweck organisiert.

## Struktur

- **auth/**: Authentifizierungskomponenten (Login, Registrierung, Passwort-Reset)
- **layout/**: Layout-Komponenten (Header, Footer, Navigation, Sidebar)
- **dashboard/**: Dashboard-spezifische Komponenten
- **guest/**: Komponenten für Gästemanagement
- **budget/**: Komponenten für Budgetverwaltung
- **timeline/**: Komponenten für Zeitplanung
- **vendor/**: Komponenten für Dienstleisterverwaltung
- **seating/**: Komponenten für Tischplanung
- **ui/**: Allgemeine UI-Komponenten (Buttons, Cards, Modals, etc.)
- **forms/**: Formular-Komponenten und -Validierung
- **ai/**: KI-bezogene Komponenten (Chatbot, Empfehlungen)

## Richtlinien

1. **Wiederverwendbarkeit**: Komponenten sollten so gestaltet sein, dass sie in verschiedenen Teilen der Anwendung wiederverwendet werden können.
2. **Responsive Design**: Alle Komponenten müssen auf verschiedenen Bildschirmgrößen gut funktionieren.
3. **Barrierefreiheit**: Komponenten sollten WCAG-Richtlinien folgen.
4. **Internationalisierung**: Alle Texte sollten über i18n-Schlüssel definiert werden.
5. **Theming**: Komponenten sollten das ausgewählte Theme respektieren.

## Verwendung

Importieren Sie Komponenten in Ihre Seiten oder andere Komponenten:

```jsx
import { GuestList } from '../components/guest/GuestList';
import { BudgetSummary } from '../components/budget/BudgetSummary';

const MyPage = () => {
  return (
    <div>
      <GuestList />
      <BudgetSummary />
    </div>
  );
};
```
