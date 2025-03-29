# Hero Component

The Hero component serves as the main landing section of the portfolio website.

## Features

- Animated introduction with staggered text appearance
- Profile information with dynamic typography
- Call-to-action buttons with hover effects
- Responsive design for all device sizes
- Background gradient effects

## Usage

```jsx
import Hero from "./components/sections/Hero";

function App() {
  return (
    <section id="home">
      <Hero />
    </section>
  );
}
```

## Props

This component does not accept any props as it has static content built-in.

## Animation

The component uses Framer Motion for animations with the following effects:

- Staggered children animation for text elements
- Fade-in and slide-up animations
- Custom easing functions for natural movement
