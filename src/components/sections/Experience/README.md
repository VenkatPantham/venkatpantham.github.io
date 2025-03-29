# Experience Component

The Experience component showcases professional work history in a timeline format.

## Features

- Vertical timeline with position markers
- Expandable job details
- Company badges with logos
- Date range indicators
- Animation effects on scroll
- Responsive design

## Usage

```jsx
import Experience from "./components/sections/Experience";

function App() {
  return (
    <section id="experience">
      <Experience />
    </section>
  );
}
```

## Props

This component does not accept any props. Work experience data is defined internally.

## Timeline Structure

Each experience entry contains:

- Company name and logo
- Job title
- Date range (start and end dates)
- Location information
- Expandable list of responsibilities
- Key achievements

## Animation

The component uses Framer Motion for reveal animations as users scroll down the page.
