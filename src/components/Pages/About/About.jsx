import Footer from "../../Footer/Footer.jsx";
import Navbar from "../../Navbar/Navbar.jsx";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="about_page">
        <section className="about_hero">
          <h1>Tentang MedConnect</h1>
          <p>
            MedConnect adalah platform pemesanan obat secara online yang cepat,
            aman, dan terpercaya. Kami hadir untuk membantu masyarakat
            mendapatkan kebutuhan kesehatan tanpa harus keluar rumah.
          </p>
        </section>

        <section className="about_values">
          <h2>Kenapa Memilih Kami?</h2>
          <div className="values_list">
            <div className="value_card">
              <h3>✔ Cepat</h3>
              <p>
                Proses pemesanan praktis dan pengiriman langsung ke rumah Anda.
              </p>
            </div>
            <div className="value_card">
              <h3>✔ Aman</h3>
              <p>Obat dijamin asli dan diproses sesuai standar kesehatan.</p>
            </div>
            <div className="value_card">
              <h3>✔ Terpercaya</h3>
              <p>Didukung oleh apotek resmi dan tenaga profesional.</p>
            </div>
          </div>
        </section>

        <section className="about_footer">
          <h2>Misi Kami</h2>
          <p>
            Menjadi solusi kesehatan digital yang memudahkan masyarakat dalam
            mendapatkan obat dan informasi kesehatan secara efisien.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
