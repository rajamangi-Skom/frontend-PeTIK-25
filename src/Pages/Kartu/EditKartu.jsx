import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditKartu = () => {
  const navigate = useNavigate();

  const [kode, setKode] = useState("");
  const [namaKartu, setNamaKartu] = useState("");
  const [diskon, setDiskon] = useState("");
  const [iuran, setIuran] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    if (uuid) {
      getkartuByUUID();
    }
  }, [uuid]);

  const getkartuByUUID = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/kartu/${uuid}`,
      );
      setKode(res.data.data.kode);
      setNamaKartu(res.data.data.nama);
      setDiskon(res.data.data.diskon);
      setIuran(res.data.data.iuran);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/kartu/${uuid}`, {
        kode,
        nama: namaKartu,
        diskon,
        iuran,
      });
      navigate("/dashboard/kartu", { replace: true });
    } catch (error) {
      console.log(error?.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="users-header">
        <h3>Edit Kartu</h3>
      </div>

      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="form-grip">
          <label htmlFor="kode">Kode</label>
          <input
            type="text"
            id="kode"
            value={kode}
            placeholder="Contoh: OPM"
            onChange={(e) => setKode(e.target.value)}
            required
          />
          {errors.kode && (
            <span className="error" style={{ color: "red" }}>
              {errors.kode}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="nama_kartu">Nama Kartu</label>
          <input
            type="text"
            id="nama_kartu"
            value={namaKartu}
            placeholder="Contoh: Silver"
            onChange={(e) => setNamaKartu(e.target.value)}
            required
          />
          {errors.nama && (
            <span className="error" style={{ color: "red" }}>
              {errors.nama}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="diskon">Diskon</label>
          <input
            type="text"
            id="diskon"
            value={diskon}
            placeholder="Contoh: S"
            onChange={(e) => setDiskon(e.target.value)}
            required
          />
          {errors.diskon && (
            <span className="error" style={{ color: "red" }}>
              {errors.diskon}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="iuran">Iuran</label>
          <input
            type="text"
            id="iuran"
            value={iuran}
            placeholder="Contoh: 2,5"
            onChange={(e) => setIuran(e.target.value)}
            required
          />
          {errors.iuran && (
            <span className="error" style={{ color: "red" }}>
              {errors.iuran}
            </span>
          )}
        </div>

        <div className="btn-group">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn-delete"
            disabled={loading}
          >
            Batal
          </button>

          <button type="submit" className="btn-tambah" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditKartu;
