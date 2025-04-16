# Simbian Security Operations Experience

Welcome to the Simbian Security Operations Experience demo! This interactive web app visually demonstrates the difference between traditional SOC (Security Operations Center) workflows and the Simbian AI-powered approach, using beautiful animations and modern UI.

## 🚀 Features

- **Side-by-Side Experience:** Toggle between "With Simbian" and "Without Simbian" to compare workflows and outcomes.
- **Animated Alert Flows:** Watch alert counts and threat lists update in real time, with smooth transitions powered by [Framer Motion](https://www.framer.com/motion/).
- **Modern UI:** Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for a crisp, responsive look.
- **Live Counters:** Animated, color-coded counters for alert statistics.
- **Staggered Card Animations:** Cards and alert lists animate in with a lively, professional feel.
- **Mobile Responsive:** Works beautifully on all screen sizes.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** React Icons
- **Type Safety:** TypeScript

## ▶️ Getting Started

1. **Install dependencies:**
   ```bash
    npm install
    # or
    yarn install
   ```
2. **Start the development server:**
   ```bash
    npm run dev
    # or
    yarn dev
   ```
3. **Open your browser:**
   Go to [http://localhost:3000](http://localhost:3000) to view the app.

## ✨ Interactivity & Animations

- **Page Transitions:** Sections slide and fade in for a delightful user experience.
- **Alert Cards:** Alert lists update with smooth, staggered animations.
- **Counters:** Numbers count up dynamically to highlight key metrics.

## 🧩 Customization

- **Alert Types & Data:**
  - Edit `app/data/alertItemData.ts` and `app/data/alertCardData.ts` to change alert types, severities, or card content.
- **Styling:**
  - Modify Tailwind classes in component files for custom colors and layouts.
- **Animations:**
  - Tweak Framer Motion props in the page and component files for different effects.

## 📦 Deployment

Deployed on [Vercel](https://vercel.com/)

For more details, see: [simbian-FED-task](https://simbian-task.vercel.app/).
