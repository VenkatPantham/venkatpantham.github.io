# Projects Component

The Projects component displays a filterable grid of portfolio projects.

## Features

- Category filtering system
- Animated project cards with hover effects
- Responsive grid layout
- Technology tags for each project
- GitHub and live demo links
- Motion effects using Framer Motion

## Usage

```jsx
import Projects from "./components/sections/Projects";

function App() {
  return (
    <section id="projects">
      <Projects />
    </section>
  );
}
```

## Props

This component does not accept any props. Project data is defined internally.

## Project Structure

Each project in the array contains:

- `id`: Unique identifier
- `title`: Project name
- `description`: Brief project overview
- `technologies`: Array of technologies used
- `category`: Project category for filtering
- `github`: Link to GitHub repository
- `demo`: Link to live demo (optional)
