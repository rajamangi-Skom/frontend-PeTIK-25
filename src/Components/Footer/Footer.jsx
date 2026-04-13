import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_brand">
          <h2>PeTIK Niaga</h2>
          <p>
            Platform belanja online yang menyediakan berbagai produk berkualitas
            dengan harga terbaik dan pengiriman cepat.
          </p>
        </div>

        <div className="footer_menu">
          <h3>Navigasi</h3>
          <ul>
            <li>Home</li>
            <li>Produk</li>
            <li>Dashboard</li>
          </ul>
        </div>

        <div className="footer_contact">
          <h3>Kontak</h3>
          <p>Email: support@petikniaga.id</p>
          <p>Telp: 0812-xxxx-xxxx</p>
          <p>Alamat: Indonesia</p>
        </div>
      </div>

      <div className="footer_bottom">
        <span>© 2026 PeTIK Niaga — All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
