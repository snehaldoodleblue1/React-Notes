function App() {
  const imageUrl = "https://picsum.photos/200";
  const employeeName = "Snehal";
  const isDisabled = false;

  return (
    <div className="container">
      <h1 id="heading">React JSX Attributes</h1>

      <img
        src={imageUrl}
        alt="Employee"
        width="200"
        height="200"
      />

      <h2 title="Employee Name">
        {employeeName}
      </h2>

      <p
        style={{
          color: "blue",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        React Developer
      </p>

      <input
        type="text"
        placeholder="Enter your name"
      />

      <br />
      <br />

      <input
        type="email"
        value="snehal@example.com"
        readOnly
      />

      <br />
      <br />

      <button disabled={isDisabled}>
        Submit
      </button>

      <br />
      <br />

      <a
        href="https://react.dev"
        target="_blank"
        rel="noreferrer"
      >
        Visit React Official Website
      </a>
    </div>
  );
}

export default App;