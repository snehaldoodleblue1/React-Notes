# React JSX Attributes

## What are JSX Attributes?

JSX attributes are used to pass information or configure HTML elements and React components. They are similar to HTML attributes but follow JavaScript naming conventions.

---

## Definition

> JSX attributes are properties added to JSX elements to define their behavior, appearance, or data.

---

## Why Use JSX Attributes?

Attributes allow us to:

- Set element IDs and classes
- Add images
- Apply inline styles
- Handle events
- Pass values to components

---

## Syntax

```jsx
<tagName attributeName="value">Content</tagName>
```

Example

```jsx
<h1 className="title">Welcome</h1>
```

---

# Common JSX Attributes

## 1. className

In JSX, we use **className** instead of **class** because `class` is a reserved keyword in JavaScript.

❌ Incorrect

```jsx
<div class="box"></div>
```

✅ Correct

```jsx
<div className="box"></div>
```

---

## 2. id

Used to uniquely identify an element.

```jsx
<h1 id="heading">React</h1>
```

---

## 3. src

Used to display images.

```jsx
<img
  src="https://picsum.photos/200"
  alt="Random"
 />
```

---

## 4. alt

Provides alternate text if the image cannot be displayed.

```jsx
<img src="logo.png" alt="Company Logo" />
```

---

## 5. href

Used for links.

```jsx
<a href="https://react.dev">React Official Website</a>
```

---

## 6. style

Inline styles are written as JavaScript objects.

```jsx
<h2 style={{ color: "blue", fontSize: "30px" }}>
  React
</h2>
```

Notice:

- Double curly braces `{{ }}`
- CSS properties use camelCase

---

## 7. title

Displays a tooltip when the mouse hovers over the element.

```jsx
<p title="React Library">
  Hover over me
</p>
```

---

## 8. disabled

Used to disable buttons or input fields.

```jsx
<button disabled>
  Submit
</button>
```

---

## 9. placeholder

Displays placeholder text inside an input.

```jsx
<input placeholder="Enter your name" />
```

---

## 10. value

Sets the value of an input.

```jsx
<input value="React" />
```

---

# JSX Attribute Naming

| HTML | JSX |
|-------|------|
| class | className |
| for | htmlFor |
| onclick | onClick |
| tabindex | tabIndex |
| maxlength | maxLength |
| readonly | readOnly |

---

# Dynamic Attributes

Attributes can also use JavaScript expressions.

```jsx
const image =
  "https://picsum.photos/200";

<img src={image} alt="Random" />
```

---

# Advantages

- Dynamic values
- Better readability
- JavaScript integration
- Easy styling
- Better maintainability

---

# Real-World Example

Employee Profile

```jsx
<img src={employee.image} alt={employee.name} />

<h2>{employee.name}</h2>

<button disabled={!employee.isActive}>
    Edit Profile
</button>
```

---

# Interview Questions

### What are JSX attributes?

Attributes provide additional information to JSX elements.

---

### Why do we use className instead of class?

Because `class` is a reserved JavaScript keyword.

---

### Why are styles written inside double curly braces?

Because the outer `{}` represents JavaScript, and the inner `{}` represents a JavaScript object.

---

### Can JSX attributes contain JavaScript?

Yes.

Example

```jsx
<img src={imageUrl} />
```

---

# Summary

- JSX attributes define element properties.
- They are similar to HTML attributes.
- Some attribute names change in JSX.
- Dynamic values are written inside `{}`.
- Inline styles use JavaScript objects.