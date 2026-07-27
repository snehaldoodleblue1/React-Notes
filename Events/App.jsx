function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  function handleChange(event) {
    console.log("Input:", event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form Submitted Successfully!");
  }

  function handleMouseOver() {
    console.log("Mouse Entered");
  }

  function handleMouseOut() {
    console.log("Mouse Left");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Events Example</h1>

      <hr />

      {/* onClick */}
      <button onClick={handleClick}>
        Click Me
      </button>

      <hr />

      {/* onChange */}
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />

      <hr />

      {/* onSubmit */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
        />

        <br />
        <br />

        <button type="submit">
          Submit
        </button>
      </form>

      <hr />

      {/* Mouse Events */}
      <h2
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Hover Over Me
      </h2>
    </div>
  );
}

export default App;