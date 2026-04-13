import { useEffect, useState } from "react";
import "./MyNavbar.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const MyNavbar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getUserLogin = () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      setUsername(decoded.username);
      // console.log(decoded);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getUserLogin();
  }, []);
  return (
    <ul>
      <li>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
      <li>{username} </li>
      <li>Profile</li>
      <li>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </li>
    </ul>
  );
};
export default MyNavbar;
