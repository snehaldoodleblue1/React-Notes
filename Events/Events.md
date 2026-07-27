# React Events

## What are React Events?

React Events are actions that occur when a user interacts with the application, such as clicking a button, typing in an input field, submitting a form, or moving the mouse.

React handles these interactions using **event handlers**.

---

# Definition

> React Events are user interactions that trigger JavaScript functions to perform specific actions.

---

# Why Do We Use Events?

Events make web applications interactive.

Examples:

- Clicking a button
- Typing in a textbox
- Submitting a form
- Hovering over an element
- Pressing a keyboard key

Without events, users would not be able to interact with your application.

---

# Syntax

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

Here:

- `onClick` is the event.
- `handleClick` is the event handler function.

---

# Common React Events

## 1. onClick

Triggered when a user clicks an element.

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

---

## 2. onChange

Triggered when the value of an input changes.

```jsx
<input
  type="text"
  onChange={handleChange}
/>
```

---

## 3. onSubmit

Triggered when a form is submitted.

```jsx
<form onSubmit={handleSubmit}>
</form>
```

---

## 4. onMouseOver

Triggered when the mouse pointer moves over an element.

```jsx
<h2 onMouseOver={handleHover}>
  Hover Me
</h2>
```

---

## 5. onMouseOut

Triggered when the mouse leaves an element.

```jsx
<h2 onMouseOut={handleLeave}>
  Hover Me
</h2>
```

---

## 6. onKeyDown

Triggered when a keyboard key is pressed.

```jsx
<input onKeyDown={handleKeyDown} />
```

---

# Event Handler

An event handler is a JavaScript function that executes when an event occurs.

Example

```jsx
function handleClick() {
  alert("Button Clicked!");
}
```

---

# Passing Parameters

```jsx
function greet(name) {
  alert(`Hello ${name}`);
}

<button onClick={() => greet("Snehal")}>
  Greet
</button>
```

---

# Prevent Default Behavior

Use `event.preventDefault()` to stop the browser's default action.

Example

```jsx
function handleSubmit(event) {
  event.preventDefault();
}
```

---

# Real-World Examples

- Login Button
- Registration Form
- Search Box
- Add to Cart Button
- Delete Employee Button

---

# Best Practices

✔ Use meaningful function names.

✔ Avoid writing long logic directly inside JSX.

✔ Use arrow functions only when needed.

✔ Keep event handler functions simple.

---

# Interview Questions

### What are React Events?

React Events handle user interactions such as clicks, typing, and form submissions.

---

### Why do we use event handlers?

To execute JavaScript code when an event occurs.

---

### How is React's onClick different from HTML's onclick?

React uses **camelCase** (`onClick`), while HTML uses lowercase (`onclick`).

---

### What is `preventDefault()`?

It prevents the browser's default behavior, such as refreshing the page when a form is submitted.

---

# Summary

- Events make React applications interactive.
- Event handlers are functions executed when an event occurs.
- Common events include `onClick`, `onChange`, `onSubmit`, `onMouseOver`, and `onKeyDown`.
- Use `preventDefault()` to stop default browser behavior.