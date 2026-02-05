export default function Cart({ cart, setCart, onBackToHome }) {
  const changeQty = (id, value) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + value) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container my-5">
      <button className="btn btn-outline-dark mb-4" onClick={onBackToHome}>
        ← Continue Shopping
      </button>

      <h2 className="fw-bold mb-4 text-center">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="card p-5 text-center shadow-sm">
          <h4>Your cart is empty</h4>
          <button className="btn btn-dark mt-3" onClick={onBackToHome}>
            Go to Home
          </button>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div className="card mb-3 border-0 shadow-sm" key={item.id}>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <h5 className="fw-semibold mb-1">{item.name}</h5>
                      <small className="text-muted">₹{item.price.toLocaleString()}</small>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="btn-group">
                        <button className="btn btn-outline-secondary" onClick={() => changeQty(item.id, -1)}>−</button>
                        <span className="btn btn-light fw-bold">{item.qty}</span>
                        <button className="btn btn-outline-secondary" onClick={() => changeQty(item.id, 1)}>+</button>
                      </div>
                    </div>
                    <div className="col-md-2 text-end fw-bold">
                      ₹{(item.price * item.qty).toLocaleString()}
                    </div>
                    <div className="col-md-1 text-end">
                      <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.id)}>✕</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow sticky-top">
              <div className="card-body">
                <h4 className="fw-bold mb-3">Order Summary</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Items ({cart.reduce((sum, i) => sum + i.qty, 0)})</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Delivery</span>
                  <span className="text-success">Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <button className="btn btn-dark btn-lg w-100">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
