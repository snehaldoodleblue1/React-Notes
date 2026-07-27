# React Components

## What are Components?

Components are the building blocks of a React application.

A component is a reusable piece of UI that contains its own structure, logic, and styling. Instead of writing the same HTML multiple times, you create a component once and reuse it wherever needed.

For example:
- Navbar
- Footer
- Employee Card
- Product Card
- Login Form

Each of these can be created as a separate component.

---

# Definition

> A React Component is a reusable JavaScript function or class that returns JSX to display a part of the user interface.

---

# Why Do We Use Components?

Imagine an application with 100 employee cards.

Without components:
- You would write the same HTML 100 times.

With components:
- Create one EmployeeCard component.
- Reuse it 100 times.

This saves time and makes code easier to maintain.

---

# Types of Components

## 1. Functional Component

A functional component is a JavaScript function that returns JSX.

Example

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

This is the most commonly used component in modern React.

---

## 2. Class Component

A class component is created using JavaScript classes.

Example

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Welcome</h1>;
  }
}
```

Today, functional components are preferred because they are simpler and support Hooks.

---

# Naming Rules

✔ Component names must begin with a capital letter.

Correct

```jsx
function EmployeeCard() {}
```

Incorrect

```jsx
function employeeCard() {}
```

---

# How Components Work

```
App
│
├── Navbar
├── EmployeeCard
├── EmployeeCard
├── EmployeeCard
└── Footer
```

The App component combines smaller components to build the complete UI.

---

# Advantages of Components

- Reusable
- Easy to maintain
- Cleaner code
- Better readability
- Easy debugging
- Scalable applications

---

# Real-World Example

An Employee Management System may contain:

- Header Component
- Sidebar Component
- Employee Card Component
- Footer Component

Each component has a specific responsibility.

---

# Best Practices

- Keep components small.
- Use meaningful names.
- Make components reusable.
- Write one component for one responsibility.

---

# Interview Questions

### What is a React Component?

A reusable piece of UI written in JavaScript that returns JSX.

---

### What are the types of components?

- Functional Components
- Class Components

---

### Which component type is preferred today?

Functional Components because they are simpler and support React Hooks.

---

### Why do we use components?

To make code reusable, readable, and easier to maintain.

---

# Summary

- Components are the building blocks of React.
- Components return JSX.
- Functional components are most commonly used.
- Components make applications reusable and maintainable.