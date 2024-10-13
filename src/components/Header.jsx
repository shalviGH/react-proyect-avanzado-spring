import { NavLink } from "react-router-dom";

/*style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}*/

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/"></a>

        <NavLink to="/" className="navbar-brand" aria-current="page">
          Navbar w/ text
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="course"
                className="nav-link active"
                aria-current="page"
              >
                Corses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="products"
                className="nav-link active"
                aria-current="page"
              >
                Products
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
