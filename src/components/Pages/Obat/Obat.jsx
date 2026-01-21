import { useState } from "react";
import "./Obat.css";
import Navbar from "../../Navbar/Navbar.jsx";
import Footer from "../../Footer/Footer.jsx";

const Obat = () => {
  const dataObat = [
    { id: 1, nama: "Paracetamol", harga: "Rp 10.000", kategori: "Demam" },
    { id: 2, nama: "Amoxicillin", harga: "Rp 18.000", kategori: "Antibiotik" },
    { id: 3, nama: "Vitamin C", harga: "Rp 12.000", kategori: "Vitamin" },
    { id: 4, nama: "Ibuprofen", harga: "Rp 16.000", kategori: "Nyeri" },
    { id: 5, nama: "Antasida", harga: "Rp 8.000", kategori: "Lambung" },
    { id: 6, nama: "Omeprazole", harga: "Rp 20.000", kategori: "Lambung" },
    { id: 7, nama: "Cetirizine", harga: "Rp 14.000", kategori: "Alergi" },
    { id: 8, nama: "Loratadine", harga: "Rp 15.000", kategori: "Alergi" },
    { id: 9, nama: "Aspirin", harga: "Rp 11.000", kategori: "Nyeri" },
    { id: 10, nama: "Cough Syrup", harga: "Rp 22.000", kategori: "Batuk" },
    { id: 11, nama: "Dextromethorphan", harga: "Rp 17.000", kategori: "Batuk" },
    { id: 12, nama: "Zinc", harga: "Rp 13.000", kategori: "Vitamin" },
    {
      id: 13,
      nama: "Ferrous Sulfate",
      harga: "Rp 24.000",
      kategori: "Suplemen",
    },
    { id: 14, nama: "Metformin", harga: "Rp 30.000", kategori: "Diabetes" },
    { id: 15, nama: "Amlodipine", harga: "Rp 28.000", kategori: "Hipertensi" },
    { id: 16, nama: "Captopril", harga: "Rp 25.000", kategori: "Hipertensi" },
    {
      id: 17,
      nama: "Salep Hidrokortison",
      harga: "Rp 18.000",
      kategori: "Kulit",
    },
    { id: 18, nama: "Minoxidil", harga: "Rp 50.000", kategori: "Rambut" },
    { id: 19, nama: "Oralit", harga: "Rp 6.000", kategori: "Diare" },
    { id: 20, nama: "Loperamide", harga: "Rp 14.000", kategori: "Diare" },
  ];

  const [keyword, setKeyword] = useState("");

  const filtered = dataObat.filter((obat) =>
    obat.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <>
      <Navbar />

      <main className="obat_page">
        <h2>Daftar Obat</h2>

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
                <span className="obat_nama">{item.nama}</span>
                <span className="obat_harga">{item.harga}</span>
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
