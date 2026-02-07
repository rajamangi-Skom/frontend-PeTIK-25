import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">MedConnect</div>

        <nav className="header_nav">
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/obat"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                Obat
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/berita"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                Rumah Sakit
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header_action">
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Keranjang</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
