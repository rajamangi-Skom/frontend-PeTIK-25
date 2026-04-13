import axiosInstance from "../../utils/axiosInstance";
import { useState, useEffect } from "react";
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

  // 🔥 GET KATEGORI
  useEffect(() => {
    const getKategori = async () => {
      try {
        const res = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/jenis-produk`,
        );

        console.log("DATA KATEGORI:", res.data);

        // ✅ FIX penting di sini
        const data = res.data.data || res.data;

        setKategoriList(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log(error);
        setKategoriList([]);
      }
    };

    getKategori();
  }, []);

  // 🔥 SUBMIT
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

      await axiosInstance.post(`${import.meta.env.VITE_API_URL}/produk`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
          global: error.response?.data?.msg || "Gagal menyimpan",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // 🔥 HANDLE GAMBAR
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setGambar(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
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

        {/* 🔥 KATEGORI */}
        <div className="form-grip">
          <label>Kategori</label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            required
          >
            <option value="">-- Pilih Kategori --</option>

            {kategoriList.length > 0 ? (
              kategoriList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nama}
                </option>
              ))
            ) : (
              <option disabled>Loading...</option>
            )}
          </select>
        </div>

        <div className="form-grip">
          <label>Gambar</label>
          <input type="file" accept="image/*" onChange={handleChangeImage} />
          {preview && <img src={preview} alt="preview" width={200} />}
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

          <button type="submit" className="btn-tambah" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduk;
