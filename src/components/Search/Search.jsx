import { useState } from "react";
const Search = () => {
  const dataObat = [
    { id: 1, nama: "Paracetamol" },
    { id: 2, nama: "Ibuprofen" },
    { id: 3, nama: "Vitamin C" },
    { id: 4, nama: "Amoxicillin" },
    { id: 5, nama: "Omeprazole" },
  ];

  const [keyword, setKeyword] = useState("");

  const filtered = dataObat.filter((obat) =>
    obat.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <main className="search">
      <h2>Daftar Obat</h2>

      <input
        type="text"
        placeholder="Cari obat..."
        className="search_input"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <div className="obat_list">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div key={item.id} className="obat_card">
              <span>{item.nama}</span>
            </div>
          ))
        ) : (
          <p>Obat tidak ditemukan</p>
        )}
      </div>
    </main>
  );
};

export default Search;
