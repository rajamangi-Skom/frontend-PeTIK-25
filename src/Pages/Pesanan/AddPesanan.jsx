import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPesanan = () => {
  const navigate = useNavigate();

  const [tanggal, setTanggal] = useState("");
  const [total, setTotal] = useState(0);
  const [pelangganId, setPelangganId] = useState(0);
  const [pelangganList, setPelangganList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getPesananPelanggan = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/pelanggan`,
        );
        setPelangganList(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPesananPelanggan();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const formData = new FormData();
      formData.append("tanggal", tanggal);
      formData.append("total", total);
      formData.append("pelanggan_id", pelangganId);

      await axios.post(`${import.meta.env.VITE_API_URL}/pesanan`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
        <h3>Tambah Pesanan</h3>
      </div>

      <form onSubmit={handleSubmit} className="form-wrapper">
        {/* Tanggal */}
        <div className="form-grip">
          <label>Tanggal</label>
          <input
            type="date"
            onChange={(e) => setTanggal(e.target.value)}
            required
          />
        </div>

        {/* Total */}
        <div className="form-grip">
          <label>Total</label>
          <input
            type="number"
            onChange={(e) => setTotal(e.target.value)}
            required
          />
        </div>

        {/* PelangganId */}
        <div className="form-grip">
          <label>Pelanggan</label>
          <select
            value={pelangganId}
            onChange={(e) => setPelangganId(parseInt(e.target.value))}
            required
          >
            <option value="">-- Pilih Pelanggan--</option>

            {pelangganList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nama}
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

export default AddPesanan;
