# Contact Component

The Contact component provides a form for visitors to send messages and connect with the portfolio owner.

## Features

- Interactive contact form with validation
- Social media links
- Animated form submission feedback
- Responsive design
- Form field validation

## Usage

```jsx
import Contact from "./components/sections/Contact";

function App() {
  return (
    <section id="contact">
      <Contact />
    </section>
  );
}
```

## Props

This component does not accept any props.

## Form Structure

The contact form includes:

- Name field (required)
- Email field (required with validation)
- Subject field
- Message textarea (required)
- Submit button with loading state

## Implementation

The component includes:

- Form validation logic
- Success/error state management
- Animation effects for form submission
- Optional integration with backend services for message handling
