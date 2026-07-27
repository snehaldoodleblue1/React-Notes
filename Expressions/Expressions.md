# React JSX Expressions

## What are JSX Expressions?

A JSX expression is any valid JavaScript expression written inside curly braces `{}` in JSX.

React evaluates the expression and displays the result in the UI.

---

## Definition

> JSX Expressions allow you to embed JavaScript code inside JSX using curly braces `{}`.

---

## Why Use JSX Expressions?

JSX expressions make your UI dynamic. Instead of displaying fixed values, you can display variables, calculations, function results, array values, object properties, dates, and much more.

---

## Syntax

```jsx
{expression}
```

Example:

```jsx
const name = "Snehal";

<h1>Hello {name}</h1>
```

Output

```
Hello Snehal
```

---

## What Can Be Written Inside {}

### 1. Variables

```jsx
const city = "Pune";

<p>{city}</p>
```

Output

```
Pune
```

---

### 2. Arithmetic Operations

```jsx
<p>{20 + 30}</p>
```

Output

```
50
```

---

### 3. Function Calls

```jsx
function greet(name) {
  return `Hello ${name}`;
}

<h2>{greet("Snehal")}</h2>
```

Output

```
Hello Snehal
```

---

### 4. Object Properties

```jsx
const employee = {
  name: "Rahul",
  age: 25
};

<p>{employee.name}</p>
```

Output

```
Rahul
```

---

### 5. Array Elements

```jsx
const colors = ["Red", "Blue", "Green"];

<p>{colors[1]}</p>
```

Output

```
Blue
```

---

### 6. Ternary Operator

```jsx
const isLogin = true;

<p>{isLogin ? "Welcome" : "Please Login"}</p>
```

Output

```
Welcome
```

---

### 7. Date

```jsx
<p>{new Date().toLocaleDateString()}</p>
```

Displays the current date.

---

## What Cannot Be Written Inside {}

❌ If Statement

```jsx
{
  if(true){
    return "Hello";
  }
}
```

✔ Use a ternary operator instead.

---

❌ For Loop

```jsx
{
  for(let i=0;i<5;i++){}
}
```

✔ Use `.map()` to render lists.

---

## Advantages

- Dynamic UI
- Easy data rendering
- Less code
- Supports JavaScript logic
- Improves readability

---

## Real-World Example

Displaying logged-in user information:

```jsx
const user = {
  name: "Snehal",
  role: "Frontend Developer"
};

<h2>{user.name}</h2>
<p>{user.role}</p>
```

---

## Interview Questions

### What is a JSX Expression?

A JSX expression is any valid JavaScript expression written inside `{}`.

---

### Why do we use curly braces `{}`?

Curly braces allow JavaScript to be executed inside JSX.

---

### Can we write an if statement inside JSX?

No.

Use a ternary operator or logical AND (`&&`) instead.

---

### Can we call functions inside JSX?

Yes.

Example:

```jsx
{getName()}
```

---

## Summary

- JSX expressions are written inside `{}`.
- They can contain variables, calculations, function calls, object properties, array elements, and ternary operators.
- Statements like `if` and `for` cannot be written directly inside JSX.