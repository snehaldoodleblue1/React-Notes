# React State Hook (useState)

## What is the State Hook?

The **State Hook** (`useState`) is a built-in React Hook that allows functional components to store and manage data that can change over time.

Whenever the state changes, React automatically re-renders the component and updates the UI.

Examples:

- Counter
- Login Status
- Theme Switcher
- Shopping Cart
- Form Inputs

---

# Definition

> `useState` is a React Hook that allows functional components to create and manage state.

---

# Why Do We Use useState?

Without state, React components display only static data.

State allows applications to:

- Update the UI dynamically
- Store user input
- Handle button clicks
- Manage form values
- Track application data

---

# Syntax

```jsx
import { useState } from "react";

const [state, setState] = useState(initialValue);
```

Example

```jsx
const [count, setCount] = useState(0);
```

Here,

- `count` → Current state value
- `setCount` → Function used to update the state
- `0` → Initial value

---

# How useState Works

Step 1

Create a state.

```jsx
const [count, setCount] = useState(0);
```

Step 2

Display the state.

```jsx
<h2>{count}</h2>
```

Step 3

Update the state.

```jsx
setCount(count + 1);
```

React automatically updates the UI.

---

# Updating State

Increase

```jsx
setCount(count + 1);
```

Decrease

```jsx
setCount(count - 1);
```

Reset

```jsx
setCount(0);
```

---

# State with Strings

```jsx
const [name, setName] = useState("Snehal");
```

Update

```jsx
setName("Rahul");
```

---

# State with Boolean

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

Update

```jsx
setIsLoggedIn(true);
```

---

# State with Arrays

```jsx
const [skills, setSkills] = useState([
  "HTML",
  "CSS",
  "React",
]);
```

---

# State with Objects

```jsx
const [employee, setEmployee] = useState({
  name: "Snehal",
  role: "React Developer",
});
```

---

# Rules of useState

✔ Always use the setter function.

✔ Never modify state directly.

❌ Incorrect

```jsx
count = count + 1;
```

✅ Correct

```jsx
setCount(count + 1);
```

---

# Advantages

- Dynamic UI
- Automatic re-rendering
- Easy state management
- Better user experience
- Simple syntax

---

# Real-World Examples

- Counter App
- Todo App
- Login Form
- Search Bar
- Theme Switcher
- Shopping Cart

---

# Best Practices

✔ Use meaningful state names.

✔ Keep state minimal.

✔ Never update state directly.

✔ Use one state for one purpose.

---

# Interview Questions

### What is useState?

`useState` is a React Hook used to create and manage state in functional components.

---

### Why do we use useState?

To store and update dynamic data inside a component.

---

### What happens when state changes?

React automatically re-renders the component and updates the UI.

---

### Can we have multiple state variables?

Yes.

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(22);
const [city, setCity] = useState("Pune");
```

---

### What is the difference between Props and State?

| Props | State |
|--------|--------|
| Passed from parent | Managed inside the component |
| Read-only | Can be updated |
| Used for communication | Used for dynamic data |

---

# Summary

- `useState` is a React Hook.
- It stores dynamic data.
- Updating state automatically updates the UI.
- Always update state using the setter function.
- State can store numbers, strings, booleans, arrays, and objects.