import { useNavigate, NavLink } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="error_page">
        <h1 className="error_code">404</h1>
        <p className="error_title">Halaman Tidak Ditemukan</p>
        <p className="error_desc">
          Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>

        <div className="error_buttons">
          <button onClick={() => navigate(-1)} className="btn_outline">
            Kembali
          </button>

          <NavLink to="/" className="btn_primary">
            Ke Home
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
