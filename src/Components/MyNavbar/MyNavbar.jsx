import "./MyNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/image.png";
import { useNavigate } from "react-router-dom";

const MyNavbar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <ul className="navbar">
      <li className="search-box">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>

      <li className="navbar-logo">
        <img src={logo} alt="logo" />
      </li>

      <li>
        <button className="btn-logout" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout
        </button>
      </li>
    </ul>
  );
};

export default MyNavbar;
