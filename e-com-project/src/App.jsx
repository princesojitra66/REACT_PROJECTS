import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Cart from "./components/Cart";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Global cart state
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: 50000, qty: 1 },
    { id: 2, name: "Headphones", price: 2000, qty: 1 },
  ]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowCart(false);
  };

  // Show Login page first
  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onCartClick={() => setShowCart(true)}
        onHomeClick={() => setShowCart(false)}
        onLogout={handleLogout}
      />

      {showCart ? (
        <Cart cart={cart} setCart={setCart} onBackToHome={() => setShowCart(false)} />
      ) : (
        <Home onOpenCart={() => setShowCart(true)} />
      )}
    </>
  );
}

export default App;
