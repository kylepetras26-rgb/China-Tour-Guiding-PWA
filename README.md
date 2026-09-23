# China-Tour-Guiding-PWA
A Progressive Web App for practicing the China category of a Tour Guiding Competition.
# 🇨🇳 China Tour Guiding — Competition Training Simulator

A Progressive Web App (PWA) designed to help tour guiding students practice the **China category** of a Tour Guiding Competition.

The simulator provides randomized attraction combinations, timed preparation and presentation practice, progress tracking, and multiple training modes. It is designed to work on both desktop and Android devices.

## ✨ Features

- 🎯 10 official China attractions
- 🔀 120 possible 3-attraction combinations
- ⏱️ 2-minute preparation timer
- 🎤 5-minute presentation timer
- 🏆 Official Competition mode
- 🔥 Pressure Visual mode
- 💬 Impromptu mode
- 👁️ Visual Recall mode
- 🎲 Pure Random mode
- 📊 Combination coverage tracking
- 📖 Practice history
- ⭐ Self-evaluation and ratings
- 📝 Reflection notes
- ⚙️ Settings
- 📤 Export and import of practice progress
- 📱 Installable as an Android PWA
- 📴 Offline support after the app has been loaded
- 🔒 Progress is stored locally in the browser

## 📱 Progressive Web App

The application is packaged as a Progressive Web App.

It includes:

- `manifest.json` for installation and app metadata
- `service-worker.js` for caching and offline functionality
- 192×192 and 512×512 application icons
- Responsive mobile interface
- Mobile navigation
- Screen wake lock during practice
- Optional vibration cues

## 🚀 How to Run

### Option 1: GitHub Pages

1. Upload the project to a public GitHub repository.
2. Open the repository's **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Save the settings.
6. GitHub will provide a public website URL.

### Option 2: Local Testing

The application can also be opened directly by opening:

`index.html`

For full PWA and service-worker functionality, run the project through a local web server.

Example:

```bash
python3 -m http.server 8000
