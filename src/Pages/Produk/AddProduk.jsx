import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProduk = () => {
  const navigate = useNavigate();

  const [namaProduk, setNamaProduk] = useState("");
  const [stok, setStok] = useState(0);
  const [minStok, setMinStok] = useState(0);
  const [harga, setHarga] = useState(0);
  const [kategori, setKategori] = useState("");
  const [gambar, setGambar] = useState(null);
  const [preview, setPreview] = useState(null);

  const [kategoriList, setKategoriList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getProdukKategori = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/jenis-produk`,
        );
        setKategoriList(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProdukKategori();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const formData = new FormData();
      formData.append("nama_barang", namaProduk);
      formData.append("stok", stok);
      formData.append("min_stok", minStok);
      formData.append("harga", harga);
      formData.append("jenis_produk_id", kategori);
      if (gambar) {
        formData.append("gambar", gambar);
      }

      await axios.post(`${import.meta.env.VITE_API_URL}/produk`, formData, {
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
        <h3>Tambah Produk</h3>
      </div>

      <form onSubmit={handleSubmit} className="form-wrapper">
        {/* Nama */}
        <div className="form-grip">
          <label>Nama Produk</label>
          <input
            type="text"
            onChange={(e) => setNamaProduk(e.target.value)}
            required
          />
        </div>

        {/* Stok */}
        <div className="form-grip">
          <label>Stok</label>
          <input
            type="number"
            onChange={(e) => setStok(e.target.value)}
            required
          />
        </div>

        {/* Min Stok */}
        <div className="form-grip">
          <label>Minimal Stok</label>
          <input
            type="number"
            onChange={(e) => setMinStok(e.target.value)}
            required
          />
        </div>

        {/* Harga */}
        <div className="form-grip">
          <label>Harga</label>
          <input
            type="number"
            onChange={(e) => setHarga(e.target.value)}
            required
          />
        </div>

        <div className="form-grip">
          <label>Kategori</label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            required
          >
            <option value="">-- Pilih Kategori --</option>

            {kategoriList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
        </div>

        <div className="form-grip">
          <label>Gambar</label>
          <input type="file" accept="image/*" onChange={handleChangeImage} />
          {preview && <img src={preview} alt="preview" width={220} />}
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

export default AddProduk;
