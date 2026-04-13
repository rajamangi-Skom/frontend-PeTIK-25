import "./Navigate.css";

const Navigate = () => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar_logo">PeTIK Niaga</div>

        <div className="navbar_search">
          <input type="text" placeholder="Cari produk..." />
        </div>

        <div className="navbar_menu">
          <button className="nav_btn">Home</button>
          <button
            className="nav_btn"
            onClick={() =>
              document
                .querySelector(".produk-container")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Produk
          </button>
          <button className="nav_btn">Dashboard</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigate;
