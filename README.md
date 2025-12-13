# Ben Tran - Portfolio

A modern, responsive portfolio website built with React and Vite, featuring a nature-themed glassmorphism design with smooth animations.

## Features

- **Nature-Themed Glassmorphism Design** — Emerald/green color palette with glass-effect surfaces and dynamic gradients
- **Dark Mode Support** — Toggle between light and dark themes with persistent preference
- **Multi-language Support** — English and Vietnamese translations using i18next
- **Smooth Scrolling** — Custom smooth scroll implementation for seamless navigation
- **Command Palette** — Quick navigation with `Ctrl+K` / `⌘K` keyboard shortcut
- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Animated Sections** — Framer Motion powered animations and transitions
- **Contact Form** — Integrated with GetForm.io and reCAPTCHA protection

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Internationalization:** react-i18next
- **Icons:** React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

### `npm run dev`

Runs the app in development mode with hot module replacement.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Previews the production build locally.

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── About/       # About section with tabbed content
│   ├── CommandPalette/  # Keyboard-accessible command palette
│   ├── Contact/     # Contact form and info
│   ├── Footer/      # Footer component
│   ├── Hero/        # Hero section with avatar
│   ├── Nav_bar/     # Navigation with dark mode toggle
│   ├── Projects/    # Project cards grid
│   └── Skills/      # Skills section
├── utils/           # Utility functions
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles and Tailwind utilities
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`. The default uses the emerald/green palette:

```js
colors: {
  brand: {
    50: '#f0fdf4',
    // ... more shades
    900: '#14532d',
  },
}
```

### Translations

Language files are located in `i18n.js`. Add or modify translations for English (`en`) and Vietnamese (`vi`).

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## License

MIT License - feel free to use this project as a template for your own portfolio.

## Author

**PhucDat Tran (Ben Tran)**  
- LinkedIn: [linkedin.com/in/bentran-ph](https://www.linkedin.com/in/bentran-ph)
- Email: bentranph@gmail.com
