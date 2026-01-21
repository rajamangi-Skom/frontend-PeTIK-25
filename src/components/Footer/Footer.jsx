import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_brand">
          <h2>MedConnect</h2>
          <p>
            Solusi apotek online yang cepat, aman, dan terpercaya untuk
            kebutuhan kesehatan Anda.
          </p>
        </div>

        <div className="footer_menu">
          <h3>Navigasi</h3>
          <ul>
            <li>Home</li>
            <li>Obat</li>
            <li>Tentang Kami</li>
          </ul>
        </div>

        <div className="footer_contact">
          <h3>Kontak</h3>
          <p>Email: medconnect@gmail.com</p>
          <p>Telp: 021 - 1234 - 5678</p>
          <p>Alamat: Jakarta, Indonesia</p>
        </div>
      </div>

      <div className="footer_bottom">
        <span>© 2026 MedConnect — All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
