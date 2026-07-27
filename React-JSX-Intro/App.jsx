function App() {
  const name = "Snehal";
  const course = "React JS";
  const year = 2026;

  return (
    <div>
      <h1>React JSX Introduction</h1>

      <hr />

      <h2>Hello, {name}!</h2>

      <p>Welcome to the {course} course.</p>

      <p>Current Year: {year}</p>

      <h3>Why Learn JSX?</h3>

      <ul>
        <li>Easy to read</li>
        <li>Looks like HTML</li>
        <li>Supports JavaScript expressions</li>
        <li>Reusable UI</li>
      </ul>

      <button>Start Learning</button>
    </div>
  );
}

export default App;