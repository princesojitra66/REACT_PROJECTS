function Home({ onOpenCart }) {
  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "80vh" }}
      >
        <h1 className="fw-bold mb-3">Welcome to ShopKart</h1>

        <p className="text-muted mb-4 fs-5">
          Discover amazing products at unbeatable prices.
        </p>

        <button
          className="btn btn-dark px-4 py-2"
          onClick={onOpenCart}
        >
          View Your Cart 🛒
        </button>
      </div>
    </div>
  );
}

export default Home;
