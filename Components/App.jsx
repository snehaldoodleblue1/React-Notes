// EmployeeCard Component
function EmployeeCard({ name, position, department, salary }) {
  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h2>{name}</h2>
      <p>
        <strong>Position:</strong> {position}
      </p>
      <p>
        <strong>Department:</strong> {department}
      </p>
      <p>
        <strong>Salary:</strong> ${salary}
      </p>
    </div>
  );
}

// App Component
function App() {
  return (
    <div>
      <h1>Employee Details</h1>

      <EmployeeCard
        name="Snehal Rathod"
        position="React Developer"
        department="Frontend"
        salary="60000"
      />

      <EmployeeCard
        name="Rahul Sharma"
        position="Backend Developer"
        department="Backend"
        salary="70000"
      />

      <EmployeeCard
        name="Priya Patil"
        position="UI/UX Designer"
        department="Design"
        salary="55000"
      />

      <EmployeeCard
        name="Amit Joshi"
        position="QA Engineer"
        department="Testing"
        salary="50000"
      />
    </div>
  );
}

export default App;