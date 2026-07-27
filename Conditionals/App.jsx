function App() {
  const isLoggedIn = true;
  const isAdmin = false;
  const cartItems = ["Laptop", "Mouse"];
  const isLoading = false;

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Conditionals Example</h1>

      <hr />

      {/* Ternary Operator */}
      <h2>
        {isLoggedIn ? "Welcome Back!" : "Please Login"}
      </h2>

      <hr />

      {/* Logical AND */}
      {isAdmin && (
        <h3 style={{ color: "green" }}>
          Admin Panel
        </h3>
      )}

      <hr />

      {/* Loading Example */}
      {isLoading && <p>Loading...</p>}

      <hr />

      {/* Cart Example */}
      <h2>Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <hr />

      <button>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;