# Education Component

The Education component showcases academic background and educational achievements.

## Features

- Timeline-based presentation of educational history
- Institution details with logos
- Degree and certification information
- Graduation dates
- Scroll-triggered animations
- Responsive design for all screen sizes

## Usage

```jsx
import Education from "./components/sections/Education";

function App() {
  return (
    <section id="education">
      <Education />
    </section>
  );
}
```

## Props

This component does not accept any props. Education data is defined internally.

## Timeline Structure

Each education entry contains:

- Institution name and logo
- Degree or certification name
- Field of study
- Graduation date
- GPA or achievements (optional)
- Description or highlights

## Animation

The component uses Framer Motion for:

- Timeline reveal animations on scroll
- Staggered entry animations
- Hover effects for interactive elements
