import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { NavLink, replace, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          username,
          password,
        },
      );
      const token = response.data.token;
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);
      console.log(decoded);

      if (decoded.role === "pelanggan") {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
      console.log(response);
    } catch (error) {
      console.log(error?.response);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.role === "pelanggan") {
        navigate("/", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    }
  }, []);

  const handleGoogleSucces = async (credentialResponse) => {
    try {
      const decode = jwtDecode(credentialResponse.credential);
      console.log("Login google berhasil", decode);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login/google`,
        {
          token: credentialResponse.credential,
        },
      );
      const token = response.data.token;
      const decoded = jwtDecode(token);
      // console.log(decoded);

      localStorage.setItem("token", token);
      localStorage.setItem("loginType", "google");

      if (decoded.role === "pelanggan") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error?.response);
    }
  };

  const handleGoogleError = () => {
    console.log("Login google gagal");
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <NavLink>
            <div className="login-logo-icon"></div>
          </NavLink>
          <h2>PeTIK Niaga</h2>
          <p>Login</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        {/* username */}
        <div className="login-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Masukkan Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            autoFocus
          />
        </div>
        {/* password  */}
        <div className="login-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Masukkan Username"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button type="submit" className="btn-login">
          Masuk
        </button>
        <div>
          <span>Atau Masuk dengan google</span>
        </div>
        <GoogleLogin
          onSuccess={handleGoogleSucces}
          onError={handleGoogleError}
        />
      </form>
    </div>
  );
};

export default Login;
