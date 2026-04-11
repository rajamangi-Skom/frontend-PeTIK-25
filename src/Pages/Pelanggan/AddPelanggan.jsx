import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPelanggan = () => {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tglLahir, setTglLahir] = useState("");
  const [kartuList, setKartuList] = useState([]);
  const [kartuId, setKartuId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getKartuPelanggan = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/kartu`);
        setKartuList(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getKartuPelanggan();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/pelanggan`, {
        nama: nama,
        gender: gender,
        no_hp: noHp,
        alamat: alamat,
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
    <div className="users-page">
      <div className="users-header">
        <h3>Tambah Pelanggan</h3>
      </div>

      <form onSubmit={handleSubmit} className="form-wrapper">
        {/* Nama */}
        <div className="form-grip">
          <label>Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>

        {/* Gender */}
        <div className="form-grip">
          <label htmlFor="l">
            <input
              type="radio"
              id="l"
              value="L"
              checked={gender === "L"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Laki-Laki
          </label>

          <label htmlFor="p">
            <input
              type="radio"
              id="p"
              value="P"
              checked={gender === "P"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Perempuan
          </label>
          {errors.gender && (
            <span className="error" style={{ color: "red" }}>
              {errors.gender}
            </span>
          )}
        </div>

        {/* No HP */}
        <div className="form-grip">
          <label>No HP</label>
          <input
            type="text"
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
            required
          />
        </div>

        {/* Alamat */}
        <div className="form-grip">
          <label>Alamat</label>
          <textarea
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            required
          />
        </div>

        {/* Tanggal Lahir */}
        <div className="form-grip">
          <label>Tanggal Lahir</label>
          <input
            type="date"
            value={tglLahir}
            onChange={(e) => setTglLahir(e.target.value)}
            required
          />
        </div>

        {/* Kartu Id */}
        <div className="form-grip">
          <label>Kartu</label>
          <select
            value={kartuId || ""}
            onChange={(e) => setKartuId(e.target.value)}
            required
          >
            <option value="">-- Pilih Kartu --</option>

            {kartuList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.kode}
              </option>
            ))}
          </select>
        </div>

        <div className="btn-group">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn-delete"
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

export default AddPelanggan;
