# Webentwicklungs-Projekt: Benutzerauthentifizierung

## Aufgabenstellung
Entwickel eine Webanwendung zur Benutzerauthentifizierung mit einem sicheren Login- und Registrierungssystem. Die Anwendung soll nach dem Prinzip der getrennten Verantwortlichkeiten (Separation of Concerns) aufgebaut sein.

### Frontend-Anforderungen
- Bitte erstellt ein VITE Projekt
- Tailwind (optional)
- Erstelle eine responsive Webseite mit reinem HTML, CSS und JavaScript
- Die Webseite soll zwei Hauptbereiche enthalten:
  1. Registrierungsformular mit:
     - Eingabefeld für Benutzername
     - Eingabefeld für Passwort
     - Submit-Button
  2. Login-Formular mit:
     - Eingabefeld für Benutzername
     - Eingabefeld für Passwort
     - Submit-Button
- Bei erfolgreichem Login soll eine **Alert**-Meldung **"Login erfolgreich"** erscheinen
- Implementiere eine geeignete Fehlerbehandlung und Validierung der Eingabefelder (Zusatzaufgabe)
- Die Kommunikation mit dem Backend erfolgt über API-Aufrufe

### Backend-Anforderungen
- Entwickel eine Node.js API mit express mit folgenden Endpunkten:
  1. /register - POST-Request zur Benutzerregistrierung
  2. /login - POST-Request zur Benutzerauthentifizierung (Rückgabe: true/false)
- Implementiere eine sichere Passwort-Hashing-Strategie (z.B. bcrypt von gestern)
- Erstelle eine geeignete Fehlerbehandlung (zusätzlich)

### Datenbank-Anforderungen
Wähle eine der folgenden Optionen:
SQLite:
   - Erstelle ein geeignetes Datenbankschema
   - Speicher Benutzername und gehashtes Passwort

### Zusätzliche Anforderungen (Zusatzaufgabe)
- Dokumentiere den Code
- routen auslagern in eine routes-directory (wie heute Vormittag)
- Implementiere eine geeignete Error-Handling-Strategie

### Abgabeformat
- Vollständiger Quellcode
- README-Datei mit:
  - Installationsanleitung
  - Dokumentation der API-Endpunkte (welche Endpunkte gibt es)


Viel Erfolg bei der Umsetzung!