# React Conditionals

## What are Conditionals in React?

Conditionals are used to display different content based on a condition.

React uses normal JavaScript conditional statements to decide what should be rendered.

For example:

- Show **Login** if the user is logged out.
- Show **Logout** if the user is logged in.
- Display **Admin Panel** only for admin users.
- Show **No Data Found** if a list is empty.

---

# Definition

> Conditional rendering is the process of displaying different UI based on a condition.

---

# Why Use Conditionals?

Conditionals help create dynamic and interactive applications.

Examples:

- User Authentication
- Shopping Cart
- Dashboard
- Loading Spinner
- Error Messages

---

# Methods of Conditional Rendering

## 1. Using if...else

Use when the logic is complex.

Example

```jsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  }

  return <h1>Please Login</h1>;
}
```

---

## 2. Using Ternary Operator (? :)

Best for simple true/false conditions.

Syntax

```jsx
condition ? trueValue : falseValue
```

Example

```jsx
const isLoggedIn = false;

<h2>
  {isLoggedIn ? "Welcome" : "Please Login"}
</h2>
```

---

## 3. Using Logical AND (&&)

Used when you only want to display something if the condition is true.

Example

```jsx
const isAdmin = true;

{
  isAdmin && <h2>Admin Panel</h2>;
}
```

If the condition is false, nothing is displayed.

---

## 4. Using Variables

You can store JSX in a variable.

```jsx
let message;

if (isLoggedIn) {
  message = <h2>Dashboard</h2>;
} else {
  message = <h2>Login First</h2>;
}

return message;
```

---

# Real-World Examples

### Login System

```jsx
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
```

---

### Shopping Cart

```jsx
{
  cartItems.length > 0 ? (
    <Cart />
  ) : (
    <h2>Your Cart is Empty</h2>
  );
}
```

---

### Loading Spinner

```jsx
{
  isLoading && <p>Loading...</p>;
}
```

---

### Admin Panel

```jsx
{
  isAdmin && <AdminPanel />;
}
```

---

# Advantages

- Dynamic UI
- Better User Experience
- Easy to understand
- Improves readability
- Makes applications interactive

---

# Best Practices

✔ Use `if...else` for complex logic.

✔ Use the ternary operator for simple conditions.

✔ Use `&&` when there is no else condition.

✔ Keep conditions simple and readable.

---

# Interview Questions

### What is Conditional Rendering?

Conditional rendering means displaying different UI depending on a condition.

---

### Which methods are used for conditional rendering?

- if...else
- Ternary Operator (? :)
- Logical AND (&&)

---

### When should we use the ternary operator?

For simple if-else conditions.

---

### When should we use &&?

When we want to render something only if the condition is true.

---

# Summary

- Conditional rendering displays UI based on conditions.
- React uses JavaScript conditions.
- Common methods:
  - if...else
  - Ternary Operator
  - Logical AND (&&)