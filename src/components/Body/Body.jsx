import "./Body.css";
import dataObat from "../../posts.json";

const Body = () => {
  return (
    <main className="body">
      <section className="hero">
        <div className="hero_text">
          <h1>
            Selamat Datang di <span>MedConnect</span>
          </h1>
          <p>Pesan obat secara online cepat & aman. Langsung antar ke rumah!</p>
          <button className="btn-primary hero_btn">Pesan Sekarang</button>
        </div>
      </section>

      <section className="kategori">
        <h2>Kategori Obat</h2>
        <div className="kategori_list">
          {["Obat Bebas", "Resep Dokter", "Vitamin", "Herbal", "Anak"].map(
            (kat) => (
              <div key={kat} className="kategori_card">
                {kat}
              </div>
            ),
          )}
        </div>
      </section>

      <section className="promo">
        <h2>Promo Hari Ini</h2>
        <div className="promo_list">
          {dataObat.slice(0, 3).map((item) => (
            <div key={item.id} className="promo_card">
              <h3>{item.nama}</h3>
              <span>Rp{item.harga}</span>
              <button className="btn-primary">Beli</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;
