function Header({ cartCount, onCartClick, onHomeClick, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#" onClick={onHomeClick}>ShopKart</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto gap-lg-3">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#" onClick={onHomeClick}>Home</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-danger" onClick={onLogout}>Logout</button>

            <button className="btn btn-dark position-relative px-3" onClick={onCartClick}>
              🛒
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
