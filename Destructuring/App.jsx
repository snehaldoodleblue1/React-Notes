function App() {
  // Object
  const employee = {
    name: "Snehal Rathod",
    age: 22,
    department: "Frontend",
    role: "React Developer",
  };

  // Object Destructuring
  const { name, age, department, role } = employee;

  // Array
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  // Array Destructuring
  const [skill1, skill2, skill3, skill4] = skills;

  return (
    <div>
      <h1>React Destructuring</h1>

      <hr />

      <h2>Object Destructuring</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Role:</strong> {role}</p>

      <hr />

      <h2>Array Destructuring</h2>

      <p>Skill 1: {skill1}</p>
      <p>Skill 2: {skill2}</p>
      <p>Skill 3: {skill3}</p>
      <p>Skill 4: {skill4}</p>
    </div>
  );
}

export default App;S