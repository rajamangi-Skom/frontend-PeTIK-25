import { jwtDecode } from "jwt-decode";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const role = decoded.role;
  console.log(role);

  const menuAdmin = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/pesanan", label: "Pesanan" },
    { to: "/dashboard/produk", label: "Produk" },
    { to: "/dashboard/kategori", label: "Kategori" },
    { to: "/dashboard/pelanggan", label: "Pelanggan" },
    { to: "/dashboard/kartu", label: "Kartu" },
    { to: "/dashboard/users", label: "User" },
    { to: "/dashboard/history", label: "History" },
  ];

  const menuPelanggan = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/pesanan", label: "Pesanan" },
    { to: "/dashboard/history", label: "History" },
  ];

  const menuList = role === "pelanggan" ? menuPelanggan : menuAdmin;
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="https://picsum.photos/200/200" alt="logo" />
        <h3>PeTIK Niaga</h3>
      </div>
      <ul>
        {menuList.map((menu) => (
          <li key={menu.to}>
            <NavLink
              to={menu.to}
              className={({ isActive }) => (isActive ? "menu active" : "menu")}
              end={menu.to === "/dashboard"}
            >
              {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

// <li>
//         <NavLink
//           to={"/dashboard"}
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Dashboard
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to={"/dashboard/pesanan"}
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Pesanan
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to={"/dashboard/produk"}
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Produk
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to={"/dashboard/kategori"}
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Kategori
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to={"/dashboard/pelanggan"}
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Pelanggan
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to={"/dashboard/kartu"}
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Kartu
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to={"/dashboard/users"}
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           User
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to={"/dashboard/history"}
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           History
//         </NavLink>
//       </li>
