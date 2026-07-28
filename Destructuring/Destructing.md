# React Destructuring

## What is Destructuring?

Destructuring is a JavaScript feature that allows you to extract values from objects or arrays and store them in variables.

In React, destructuring is commonly used to access **props**, **state**, and other objects more easily.

---

# Definition

> Destructuring is a JavaScript syntax that allows you to unpack values from objects or arrays into separate variables.

---

# Why Use Destructuring?

Without destructuring, you need to repeatedly access object properties.

Example:

```jsx
const employee = {
  name: "Snehal",
  role: "React Developer",
};

console.log(employee.name);
console.log(employee.role);
```

With destructuring:

```jsx
const { name, role } = employee;

console.log(name);
console.log(role);
```

The code becomes cleaner and easier to read.

---

# Object Destructuring

Object destructuring extracts values using property names.

Example

```jsx
const employee = {
  name: "Snehal",
  age: 22,
  department: "Frontend",
};

const { name, age, department } = employee;

console.log(name);
console.log(age);
console.log(department);
```

Output

```
Snehal
22
Frontend
```

---

# Array Destructuring

Array destructuring extracts values based on their position.

Example

```jsx
const colors = ["Red", "Blue", "Green"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);
```

Output

```
Red
Blue
Green
```

---

# Destructuring Props in React

Without destructuring

```jsx
function Employee(props) {
  return (
    <h2>{props.name}</h2>
  );
}
```

With destructuring

```jsx
function Employee({ name }) {
  return (
    <h2>{name}</h2>
  );
}
```

The second approach is shorter and more readable.

---

# Benefits

- Less code
- Cleaner syntax
- Better readability
- Easy to access object properties
- Commonly used in React

---

# Real-World Example

Employee Details

```jsx
const employee = {
  name: "Rahul",
  role: "Backend Developer",
  salary: 70000,
};

const { name, role, salary } = employee;
```

---

# Best Practices

✔ Use object destructuring for props.

✔ Use meaningful variable names.

✔ Destructure only the values you need.

---

# Interview Questions

### What is destructuring?

Destructuring is a JavaScript feature used to extract values from objects or arrays.

---

### Why is destructuring used in React?

It makes code shorter, cleaner, and easier to read, especially when working with props.

---

### Can we destructure arrays?

Yes.

```jsx
const [a, b] = [10, 20];
```

---

### Can we destructure objects?

Yes.

```jsx
const { name, age } = employee;
```

---

# Summary

- Destructuring extracts values from objects and arrays.
- It reduces repetitive code.
- It is commonly used with React props.
- Object destructuring is based on property names.
- Array destructuring is based on index positions.
