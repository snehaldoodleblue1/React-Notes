# React JSX Introduction

## What is JSX?

JSX stands for **JavaScript XML**.

It is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. JSX makes it easier to create user interfaces in React.

React converts JSX into JavaScript using **Babel** before the browser executes it.

---

## Definition

> JSX (JavaScript XML) is a syntax extension that allows us to write HTML-like code inside JavaScript to build React components.

---

## Why JSX?

Without JSX, creating elements looks like this:

```javascript
const element = React.createElement(
  "h1",
  null,
  "Hello React"
);
```

With JSX:

```jsx
const element = <h1>Hello React</h1>;
```

JSX is cleaner, easier to read, and easier to maintain.

---

## Features of JSX

- HTML-like syntax
- Easy to understand
- Supports JavaScript expressions
- Improves code readability
- Used to create React components

---

## Rules of JSX

### 1. JSX must have one parent element

❌ Incorrect

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

✅ Correct

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

---

### 2. Close all tags

❌ Incorrect

```jsx
<img src="logo.png">
```

✅ Correct

```jsx
<img src="logo.png" />
```

---

### 3. Use className instead of class

❌

```jsx
<div class="box"></div>
```

✅

```jsx
<div className="box"></div>
```

---

### 4. Use camelCase for attributes

| HTML | JSX |
|------|------|
| onclick | onClick |
| tabindex | tabIndex |
| maxlength | maxLength |

---

### 5. Write JavaScript inside {}

```jsx
const name = "Snehal";

<h1>Hello {name}</h1>
```

---

## Advantages

- Easy to read
- Less code
- Looks like HTML
- Supports JavaScript
- Reusable UI creation

---

## Disadvantages

- Requires Babel to compile.
- Beginners may confuse it with HTML.

---

## JSX vs HTML

| HTML | JSX |
|------|------|
| class | className |
| for | htmlFor |
| onclick | onClick |
| tabindex | tabIndex |

---

## Real-World Example

Creating a Login button:

```jsx
<button>Login</button>
```

Creating a Card:

```jsx
<div className="card">
    <h2>Employee</h2>
</div>
```

---

## Interview Questions

### What is JSX?

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code inside React.

---

### Is JSX HTML?

No.

It looks like HTML but is actually JavaScript syntax.

---

### Can React work without JSX?

Yes.

React can use `React.createElement()` directly, but JSX makes development much easier.

---

### Why do we use JSX?

- Better readability
- Easier UI development
- Cleaner code
- Supports JavaScript expressions

---

## Summary

- JSX = JavaScript XML
- Used to write HTML-like syntax in React
- Converted into JavaScript by Babel
- Makes code clean and readable