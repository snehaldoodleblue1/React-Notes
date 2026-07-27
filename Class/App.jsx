import React, { Component } from "react";

class Employee extends Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid #333",
          borderRadius: "10px",
          padding: "15px",
          margin: "10px",
          width: "280px",
        }}
      >
        <h2>Name: {this.props.name}</h2>
        <p>
          <strong>Role:</strong> {this.props.role}
        </p>
        <p>
          <strong>Department:</strong> {this.props.department}
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Class Components</h1>

        <Employee
          name="Snehal Rathod"
          role="React Developer"
          department="Frontend"
        />

        <Employee
          name="Rahul Sharma"
          role="Backend Developer"
          department="Backend"
        />

        <Employee
          name="Priya Patil"
          role="UI/UX Designer"
          department="Design"
        />
      </div>
    );
  }
}

export default App;