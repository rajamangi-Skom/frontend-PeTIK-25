import Obat from "./components/Pages/Obat/Obat.jsx";
import Home from "./components/Pages/Home/Home.jsx";
import About from "./components/Pages/About/About.jsx";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/obat" element={<Obat />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
