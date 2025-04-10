# LemonVows Assets

Dieses Verzeichnis enthält alle statischen Assets für die LemonVows Hochzeitsplanungs-Webanwendung.

## Struktur

- **images/**: Bilder und Grafiken
  - **logo/**: LemonVows Logo in verschiedenen Formaten und Größen
  - **themes/**: Bilder für die verschiedenen Themes
  - **icons/**: Icon-Set für die Anwendung
  - **backgrounds/**: Hintergrundbilder
  - **placeholders/**: Platzhalterbilder

- **fonts/**: Schriftarten
  - **primary/**: Primäre Schriftfamilie
  - **secondary/**: Sekundäre Schriftfamilie
  - **decorative/**: Dekorative Schriften für Überschriften

- **styles/**: Globale Stylesheets
  - **themes/**: Theme-spezifische Styles
  - **variables.scss**: SCSS-Variablen
  - **mixins.scss**: SCSS-Mixins
  - **animations.scss**: CSS-Animationen

- **audio/**: Audiodateien
  - **notifications/**: Benachrichtigungstöne
  - **samples/**: Musikbeispiele für die Musikauswahl

- **videos/**: Videodateien
  - **tutorials/**: Tutorial-Videos
  - **backgrounds/**: Video-Hintergründe

## Verwendung

Assets können in Komponenten und Seiten wie folgt importiert werden:

```jsx
// Bilder importieren
import logo from '../assets/images/logo/logo.png';
import backgroundImage from '../assets/images/backgrounds/main-bg.jpg';

// In einer Komponente verwenden
const Header = () => {
  return (
    <header>
      <img src={logo} alt="LemonVows Logo" />
      <div style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Inhalt */}
      </div>
    </header>
  );
};
```

## Richtlinien

1. **Optimierung**: Alle Bilder sollten für das Web optimiert sein (komprimiert, richtige Größe).
2. **Responsive**: Bilder sollten in verschiedenen Größen für verschiedene Bildschirmgrößen verfügbar sein.
3. **Formate**: Verwenden Sie moderne Bildformate wie WebP mit Fallbacks für ältere Browser.
4. **Namenskonvention**: Verwenden Sie aussagekräftige Namen mit Bindestrichen (z.B. `header-background.jpg`).
5. **Lizenzierung**: Stellen Sie sicher, dass alle Assets die richtigen Lizenzen haben und dokumentieren Sie diese bei Bedarf.

## Themes

LemonVows bietet 5 verschiedene visuelle Themes:

1. **Classic**: Elegantes, zeitloses Design mit neutralen Farben
2. **Rustic**: Warme, erdige Töne mit rustikalen Elementen
3. **Modern**: Klares, minimalistisches Design mit kräftigen Akzenten
4. **Romantic**: Weiche Pastelltöne mit floralen Elementen
5. **Bohemian**: Lebendige Farben und verspielte Muster

Jedes Theme hat seine eigenen Bilder, Farbpaletten und Schriftarten, die in den entsprechenden Verzeichnissen organisiert sind.
