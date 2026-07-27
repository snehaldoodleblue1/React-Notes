function App() {
  const name = "Snehal";
  const age = 22;
  const city = "Pune";

  const employee = {
    company: "ABC Technologies",
    position: "React Developer",
  };

  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const isEmployee = true;

  function greet(user) {
    return `Welcome, ${user}!`;
  }

  return (
    <div>
      <h1>React JSX Expressions</h1>
      <hr />

      <h2>{greet(name)}</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p>
        <strong>City:</strong> {city}
      </p>

      <p>
        <strong>Company:</strong> {employee.company}
      </p>

      <p>
        <strong>Position:</strong> {employee.position}
      </p>

      <p>
        <strong>Second Skill:</strong> {skills[1]}
      </p>

      <p>
        <strong>Addition:</strong> {50 + 100}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {isEmployee ? "Employee" : "Not an Employee"}
      </p>

      <p>
        <strong>Today's Date:</strong>{" "}
        {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

export default App;