import { useState } from "react";

function App() {
  // State Variables
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Snehal");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event Handlers
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const changeName = () => {
    setName("Rahul");
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React useState Hook</h1>

      <hr />

      <h2>Counter Example</h2>
      <h3>Count: {count}</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      <hr />

      <h2>String State Example</h2>
      <p>Name: {name}</p>

      <button onClick={changeName}>
        Change Name
      </button>

      <hr />

      <h2>Boolean State Example</h2>
      <p>
        Status: {isLoggedIn ? "Logged In" : "Logged Out"}
      </p>

      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;