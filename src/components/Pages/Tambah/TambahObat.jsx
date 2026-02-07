import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TambahObat.css";
import Navbar from "../../Navbar/Navbar.jsx";
import Footer from "../../Footer/Footer.jsx";

const TambahObat = ({ tambahObat }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nama: "",
    harga: "",
    kategori: "",
  });

  const [gambar, setGambar] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setGambar(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama || !form.harga || !form.kategori || !gambar) {
      alert("Semua field wajib diisi");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      tambahObat({
        id: Date.now(),
        nama: form.nama,
        harga: Number(form.harga),
        kategori: form.kategori,
        gambar: reader.result, 
      });

      navigate("/obat");
    };

    reader.readAsDataURL(gambar);
  };

  return (
    <>
      <Navbar />

      <main className="tambah_obat_page">
        <form className="tambah_obat_form" onSubmit={handleSubmit}>
          <h2>Tambah Obat</h2>

          <input
            type="text"
            name="nama"
            placeholder="Nama Obat"
            value={form.nama}
            onChange={handleChange}
          />

          <input
            type="number"
            name="harga"
            placeholder="Harga"
            value={form.harga}
            onChange={handleChange}
          />

          <input
            type="text"
            name="kategori"
            placeholder="Kategori"
            value={form.kategori}
            onChange={handleChange}
          />

          <input type="file" accept="image/*" onChange={handleFile} />

          <div className="form_action">
            <button type="submit">Simpan</button>
            <button
              type="button"
              className="btn_batal"
              onClick={() => navigate("/obat")}
            >
              Batal
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default TambahObat;
