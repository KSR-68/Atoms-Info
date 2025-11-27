# Atoms.IO - Interactive Periodic Table

[![Vite](https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 🚀 Features

- **Interactive Periodic Table** - Click any of the 118 elements to explore
- **Animated Atom Visualization** - Realistic Bohr model with orbiting electrons in all shells (K-Q)
- **Detailed Element Information** - Atomic structure, electron configuration, block, group, period, type
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Color-coded Elements** - Visual distinction by category (Alkali Metals, Noble Gases, Lanthanides, etc.)
- **Smooth Animations** - Nucleus pulse, electron orbits, popup transitions

## 🎨 Demo

Live demo: https://elements-info.netlify.app/

## 🛠 Tech Stack

- **React 18+** with TypeScript
- **Vite** (fast dev server & bundler)
- **CSS** (scoped styles with responsive design)
- **CSS Grid & Flexbox** for layout

## 📦 Quick Start

### Prerequisites
- Node.js 18+ or higher

### Installation
```bash
git clone <your-repo-url>
cd Atoms-IO
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### Network Access (Share with devices)
```bash
npm run dev -- --host
```
Access via `http://YOUR-IP:5173` (e.g., `http://192.168.1.5:5173`)

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Atoms-IO/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── PeriodicTable.tsx
│   │   ├── ElementCard.tsx
│   │   ├── AtomVisualization.tsx
│   │   └── ElementPopup.tsx
│   ├── data/               # Elements data (118 elements)
│   │   └── elements.ts
│   ├── App.tsx             # Main app
│   └── main.tsx            # Entry point
├── index.html              # HTML entry
├── package.json            # Dependencies
├── vite.config.ts          # Vite config
├── tsconfig.json           # TypeScript config
├── .gitignore              # Git ignore rules
└── README.md               # This file
```


## 📄 License

This project is [MIT](LICENSE) licensed - see [LICENSE](LICENSE) file for details.


