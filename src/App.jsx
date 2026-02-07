import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Pages/Home/Home.jsx";
import About from "./components/Pages/About/About.jsx";
import Obat from "./components/Pages/Obat/Obat.jsx";
import TambahObat from "./components/Pages/Tambah/TambahObat.jsx";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage.jsx";

import paracetamolImg from "../src/assets/paracetamol.png";
import amoxicillinImg from "../src/assets/amox.jpeg";
import News from "./components/Pages/News/News.jsx";

function App() {
  const [dataObat, setDataObat] = useState([
    {
      id: 1,
      nama: "Paracetamol",
      harga: 10000,
      kategori: "Demam",
      gambar: paracetamolImg,
    },
    {
      id: 2,
      nama: "Amoxicillin",
      harga: 18000,
      kategori: "Antibiotik",
      gambar: amoxicillinImg,
    },
  ]);

  const tambahObat = (obatBaru) => {
    setDataObat((prev) => [...prev, obatBaru]);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/obat" element={<Obat dataObat={dataObat} />} />
      <Route
        path="/obat/tambah"
        element={<TambahObat tambahObat={tambahObat} />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/berita" element={<News />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
