import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPelanggan = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [gender, setGender] = useState("");
  const [tglLahir, setTglLahir] = useState("");
  const [kartuList, setKartuList] = useState([]);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [kartuId, setKartuId] = useState("");

  const { uuid } = useParams();

  useEffect(() => {
    const fetchKartu = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/kartu`);
        setKartuList(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchKartu();
    getPelangganByUUID();
  }, []);
  const getPelangganByUUID = async () => {
    setLoading(true);
    try {
      const pelanggan = await axios.get(
        `${import.meta.env.VITE_API_URL}/pelanggan/${uuid}`,
      );

      setNama(pelanggan.data.data.nama);
      setNoHp(pelanggan.data.data.no_hp);
      setAlamat(pelanggan.data.data.alamat);
      setGender(pelanggan.data.data.gender);
      setTglLahir(pelanggan.data.data.tgl_lahir);
      setPreview(pelanggan.data.data.url);
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
      await axios.put(`${import.meta.env.VITE_API_URL}/pelanggan/${uuid}`, {
        nama,
        no_hp: noHp,
        alamat,
        gender,
        tgl_lahir: tglLahir,
        kartu_id: kartuId,
      });
      navigate(-1);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-page">
      <div className="user-header">
        <h3>Edit Pelanggan</h3>
      </div>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-grip">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            value={nama}
            placeholder="Contoh : Dalang Ranggi"
            onChange={(e) => setNama(e.target.value)}
            required
          />
          {errors.nama && (
            <span className="error" style={{ color: "red" }}>
              {errors.nama}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="no_hp">No HP</label>
          <input
            type="text"
            value={noHp}
            id="no_hp"
            onChange={(e) => setNoHp(e.target.value)}
            required
          />
          {errors.no_hp && (
            <span className="error" style={{ color: "red" }}>
              {errors.no_hp}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="alamat">Alamat</label>
          <input
            type="text"
            id="alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            required
          />
          {errors.alamat && (
            <span className="error" style={{ color: "red" }}>
              {errors.alamat}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="pelanggan">Kartu</label>
          <select
            id="pelanggan"
            value={kartuId}
            onChange={(e) => setKartuId(e.target.value)}
            required
          >
            <option value="">-- Pilih Kartu --</option>
            {kartuList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
          {errors.kartu_id && (
            <span className="error" style={{ color: "red" }}>
              {errors.kartu_id}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label>Gender</label>

          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="L"
                onChange={(e) => setGender(e.target.value)}
                required
              />
              Laki-laki
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="P"
                onChange={(e) => setGender(e.target.value)}
              />
              Perempuan
            </label>
          </div>

          {errors.gender && (
            <span className="error" style={{ color: "red" }}>
              {errors.gender}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="tgl_lahir">Tanggal Lahir</label>
          <input
            type="date"
            id="tgl_lahir"
            value={tglLahir}
            onChange={(e) => setTglLahir(e.target.value)}
            required
          />
          {errors.tgl_lahir && (
            <span className="error" style={{ color: "red" }}>
              {errors.tgl_lahir}
            </span>
          )}
        </div>

        <div className="btn-groub">
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

export default EditPelanggan;
