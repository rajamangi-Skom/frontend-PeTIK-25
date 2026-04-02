import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import  logo  from "../../assets/image.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="logo" />
        <h3>PeTIK Niaga</h3>
      </div>
      <ul>
        <li>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/pesanan"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pesanan
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/produk"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Produk
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/kategori"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kategori
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/pelanggan"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pelanggan
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/kartu"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kartu
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/users"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/history"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            History
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
