# Simbian Security Operations Experience

Welcome to the Simbian Security Operations Experience demo! This interactive web app visually demonstrates the difference between traditional SOC (Security Operations Center) workflows and the Simbian AI-powered approach, using beautiful animations and modern UI.

### Thought Process

While building this project, my primary focus was to deliver a clean, intuitive, and visually engaging user experience. I aimed to keep the code modular and maintainable, ensuring that each component has a single responsibility. For the animation aspects, I selected a library that is both lightweight and widely adopted in the React ecosystem, enabling smooth, performant transitions without introducing unnecessary complexity.

### Animation Library Used

This project utilizes the [Framer Motion](https://www.framer.com/motion/) library for animations. Framer Motion is a powerful and flexible animation library for React, offering simple APIs for complex animations and gestures. It was chosen for its ease of integration, robust feature set, and active community support.

### Scope for Improvement

With additional time, I would consider the following enhancements:

- **Accessibility Improvements:** Ensure all animations are accessible to users with motion sensitivities by respecting `prefers-reduced-motion` settings and providing alternative experiences where appropriate.
- **Performance Optimization:** Profile and optimize animation performance, especially for lower-end devices or large data sets, possibly by leveraging React’s memoization techniques or virtualized lists.
- **Customization:** Allow users to customize animation speed, type, or toggle animations on/off via settings.
- **Testing:** Add comprehensive unit and integration tests, particularly for animation triggers and edge cases.
- **Cross-browser Support:** Conduct thorough cross-browser testing and add polyfills if needed to ensure consistent animation behavior.
- **Documentation:** Expand documentation with usage examples, prop definitions, and developer guidelines for extending or modifying animations.

## 🚀 Features

- **Side-by-Side Experience:** Toggle between "With Simbian" and "Without Simbian" to compare workflows and outcomes.
- **Animated Alert Flows:** Watch alert counts and threat lists update in real time, with smooth transitions powered by [Framer Motion](https://www.framer.com/motion/).
- **Modern UI:** Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for a crisp, responsive look.
- **Live Counters:** Animated, color-coded counters for alert statistics.
- **Staggered Card Animations:** Cards and alert lists animate in with a lively, professional feel.
- **Mobile Responsive:** Works beautifully on all screen sizes.

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
