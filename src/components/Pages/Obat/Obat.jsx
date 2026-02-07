import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Obat.css";
import Navbar from "../../Navbar/Navbar.jsx";
import Footer from "../../Footer/Footer.jsx";
import defaultImg from "../../../assets/react.svg";

const Obat = ({ dataObat }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const filtered = dataObat.filter((obat) =>
    obat.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <>
      <Navbar />

      <main className="obat_page">
        <div className="obat_header">
          <h2>Daftar Obat</h2>
          <button
            className="btn_tambah"
            onClick={() => navigate("/obat/tambah")}
          >
            + Tambah Obat
          </button>
        </div>

        <input
          type="text"
          className="obat_search"
          placeholder="Cari obat..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="obat_list">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div key={item.id} className="obat_card">
                <img
                  src={item.gambar || defaultImg}
                  alt={item.nama}
                  className="obat_img"
                />

                <div className="obat_info">
                  <span className="obat_nama">{item.nama}</span>
                  <small className="obat_kategori">{item.kategori}</small>
                </div>

                <span className="obat_harga">
                  Rp {Number(item.harga).toLocaleString("id-ID")}
                </span>
              </div>
            ))
          ) : (
            <p className="not_found">Obat tidak ditemukan</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Obat;
