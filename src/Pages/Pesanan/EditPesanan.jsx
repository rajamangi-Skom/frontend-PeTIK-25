import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPesanan = () => {
  const navigate = useNavigate();

  const [tanggal, setTanggal] = useState("");
  const [total, setTotal] = useState("");
  const [pelangganId, setPelangganId] = useState("");
  const [pelangganLis, setPelangganList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    getPesananByUUID();
    fetchPelanggan();
  }, []);

  const getPesananByUUID = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/pesanan/${uuid}`,
      );

      const data = res.data.data;

      setTanggal(data.tanggal);
      setTotal(data.total);
      setPelangganId(data.pelanggan_id);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const fetchPelanggan = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/pelanggan`);
      setPelangganList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/pesanan/${uuid}`, {
        tanggal,
        total,
        pelanggan_id: pelangganId,
      });

      navigate(-1);
    } catch (error) {
      console.log(error.response);

      const apiErrors = error.response?.data?.errors || [];
      if (apiErrors.length > 0) {
        const err = {};
        apiErrors.forEach((e) => {
          err[e.path] = e.msg;
        });
        setErrors(err);
      } else {
        setErrors({
          global: error.response?.data?.msg || "Gagal update",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-page">
      <div className="user-header">
        <h3>Edit Pesanan</h3>
      </div>

      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-grip">
          <label>Tanggal</label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            required
          />
        </div>

        <div className="form-grip">
          <label>Total</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            required
          />
        </div>

        <div className="form-grip">
          <label>Pelanggan</label>
          <select
            value={pelangganId}
            onChange={(e) => setPelangganId(e.target.value)}
            required
          >
            <option value="">-- Pilih Pelanggan --</option>
            {pelangganLis.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
        </div>

        {errors.global && <p style={{ color: "red" }}>{errors.global}</p>}

        <div className="btn-group">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn-delete"
          >
            Batal
          </button>

          <button type="submit" className="btn-tambah">
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPesanan;
