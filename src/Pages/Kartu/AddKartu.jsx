import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddKartu = () => {
  const navigate = useNavigate();

  const [kode, setKode] = useState("");
  const [namaKartu, setNamaKartu] = useState("");
  const [diskon, setDiskon] = useState(0);
  const [iuran, setIuran] = useState(0);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const postKartu = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/kartu`);
        setKode(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    postKartu();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const formData = new FormData();
      formData.append("kode", kode);
      formData.append("nama", namaKartu);
      formData.append("diskon", diskon);
      formData.append("iuran", iuran);

      await axios.post(`${import.meta.env.VITE_API_URL}/kartu`, formData, {
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

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setGambar(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="users-page">
      <div className="users-header">
        <h3>Tambah Kartu</h3>
      </div>

      <form onSubmit={handleSubmit} className="form-wrapper">
        {/* Stok */}
        <div className="form-grip">
          <label>Kode</label>
          <input
            type="text"
            onChange={(e) => setKode(e.target.value)}
            required
          />
        </div>

        {/* Nama */}
        <div className="form-grip">
          <label>Nama Kartu</label>
          <input
            type="text"
            onChange={(e) => setNamaKartu(e.target.value)}
            required
          />
        </div>

        {/* Min Stok */}
        <div className="form-grip">
          <label>Diskon</label>
          <input
            type="number"
            onChange={(e) => setDiskon(e.target.value)}
            required
          />
        </div>

        {/* Harga */}
        <div className="form-grip">
          <label>Iuran</label>
          <input
            type="number"
            onChange={(e) => setIuran(e.target.value)}
            required
          />
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

export default AddKartu;
