import "./MyNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/image.png";

const MyNavbar = ({ search, setSearch }) => {
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
    </ul>
  );
};

export default MyNavbar;
