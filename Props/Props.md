# React Props

## What are Props?

Props stands for **Properties**.

Props are used to pass data from a **Parent Component** to a **Child Component**.

They make components reusable because the same component can display different data based on the props it receives.

---

# Definition

> Props are read-only values passed from a parent component to a child component to customize its behavior or display.

---

# Why Do We Use Props?

Imagine an Employee Card component.

Without props, you would need to create a separate component for every employee.

With props, you create one component and pass different employee information.

Example:

```jsx
<EmployeeCard name="Snehal" />
<EmployeeCard name="Rahul" />
<EmployeeCard name="Priya" />
```

The same component displays different data.

---

# Syntax

### Parent Component

```jsx
<EmployeeCard
    name="Snehal"
    role="React Developer"
/>
```

### Child Component

```jsx
function EmployeeCard(props) {
    return (
        <h2>{props.name}</h2>
    );
}
```

---

# Accessing Props

## Method 1: Using props object

```jsx
function EmployeeCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.role}</p>
        </div>
    );
}
```

---

## Method 2: Using Destructuring (Recommended)

```jsx
function EmployeeCard({ name, role }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}
```

Destructuring makes the code shorter and more readable.

---

# Props are Read-Only

Props cannot be modified inside the child component.

❌ Incorrect

```jsx
props.name = "Rahul";
```

Props should only be read and displayed.

---

# Benefits of Props

- Reusable components
- Dynamic UI
- Cleaner code
- Better maintainability
- Easy communication between components

---

# Real-World Examples

Props are commonly used in:

- Employee Cards
- Product Cards
- User Profiles
- Blog Posts
- Navigation Menus

---

# Parent-Child Relationship

```
App
 │
 ├── EmployeeCard (Snehal)
 ├── EmployeeCard (Rahul)
 ├── EmployeeCard (Priya)
 └── EmployeeCard (Amit)
```

The **App** component sends different data to each **EmployeeCard** using props.

---

# Best Practices

✔ Use meaningful prop names.

✔ Use destructuring whenever possible.

✔ Do not modify props.

✔ Keep components reusable.

---

# Interview Questions

### What are Props?

Props are values passed from a parent component to a child component.

---

### Why are props used?

To make components reusable and pass dynamic data.

---

### Can a child component modify props?

No.

Props are read-only.

---

### What is the difference between props and state?

| Props | State |
|--------|--------|
| Passed from parent | Managed inside component |
| Read-only | Can be updated |
| Used for communication | Used for dynamic data |

---

# Summary

- Props = Properties.
- Props pass data from parent to child.
- Props make components reusable.
- Props are read-only.
- Destructuring is the preferred way to access props.