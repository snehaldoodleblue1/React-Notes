// Child Component
function EmployeeCard({ name, age, department, role }) {
  return (
    <div
      style={{
        border: "2px solid #333",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "260px",
      }}
    >
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div>
      <h1>Employee Details Using Props</h1>

      <EmployeeCard
        name="Snehal Rathod"
        age={22}
        department="Frontend"
        role="React Developer"
      />

      <EmployeeCard
        name="Rahul Sharma"
        age={27}
        department="Backend"
        role="Node.js Developer"
      />

      <EmployeeCard
        name="Priya Patil"
        age={25}
        department="UI/UX"
        role="UI Designer"
      />

      <EmployeeCard
        name="Amit Joshi"
        age={29}
        department="Testing"
        role="QA Engineer"
      />
    </div>
  );
}

export default App;