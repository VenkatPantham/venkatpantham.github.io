# Skills Component

The Skills component presents a categorized showcase of technical skills and competencies.

## Features

- Categorized skill cards (Frontend, Backend, Tools, etc.)
- Progress bar indicators for proficiency levels
- Animated reveal effects
- Responsive grid layout
- Card hover effects

## Usage

```jsx
import Skills from "./components/sections/Skills";

function App() {
  return (
    <section id="skills">
      <Skills />
    </section>
  );
}
```

## Props

This component does not accept any props. Skills data is defined internally.

## Skills Structure

Skills are organized into categories, each containing:

- Category name (e.g., Frontend, Backend)
- Icon or visual indicator
- List of skills with proficiency levels
- Optional description or context

## Animation

The component uses Framer Motion for:

- Staggered reveal animations
- Progress bar fill animations
- Hover state transitions
