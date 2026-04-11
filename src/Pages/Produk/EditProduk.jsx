import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduk = () => {
  const navigate = useNavigate();

  const [namaProduk, setNamaProduk] = useState("");
  const [stok, setStok] = useState(0);
  const [minStok, setMinStok] = useState(0);
  const [harga, setHarga] = useState(0);
  const [kategoriList, setKategoriList] = useState([]);
  const [kategoriId, setKategoriId] = useState("");
  const [loading, setLoading] = useState(false);
  const [gambar, setGambar] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    getProductByUUID();
    getKategori();
  }, []);

  const getProductByUUID = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/produk/${uuid}`,
      );

      const data = res.data.data;

      setNamaProduk(data.nama_barang);
      setStok(data.stok);
      setMinStok(data.min_stok);
      setHarga(data.harga);
      setPreview(data.url);

      setKategoriId(data.jenis_produk_id);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const getKategori = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/jenis-produk`,
      );

      setKategoriList(res.data.data); 
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/produk/${uuid}`,
        {
          nama_barang: namaProduk,
          stok,
          min_stok: minStok,
          harga,
          jenis_produk_id: kategoriId,
          gambar,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
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
    <div>
      <div className="users-header">
        <h3>Edit Produk</h3>
      </div>

      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="form-grip">
          <label htmlFor="nama">Nama Produk</label>
          <input
            type="text"
            id="nama"
            value={namaProduk}
            placeholder="Contoh: Elektronik"
            onChange={(e) => setNamaProduk(e.target.value)}
            required
          />
          {errors.nama && (
            <span className="error" style={{ color: "red" }}>
              {errors.nama}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="stok">Stok</label>
          <input
            type="number"
            id="stok"
            value={stok}
            placeholder="Contoh: 50"
            onChange={(e) => setStok(e.target.value)}
            required
          />
          {errors.stok && (
            <span className="error" style={{ color: "red" }}>
              {errors.stok}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="min_stok">Min Stok</label>
          <input
            type="number"
            id="min_stok"
            value={minStok}
            placeholder="Contoh: 50"
            onChange={(e) => setMinStok(e.target.value)}
            required
          />
          {errors.minStok && (
            <span className="error" style={{ color: "red" }}>
              {errors.minStok}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="jenis_produk_id">Kategori</label>

          <select
            id="jenis_produk_id"
            value={kategoriId || ""}
            onChange={(e) => setKategoriId(e.target.value)}
            required
          >
            <option value="">-Pilih Kategori-</option>
            {kategoriList.map((kategori) => (
              <option key={kategori.id} value={kategori.id}>
                {kategori.nama}
              </option>
            ))}
          </select>

          {errors.kategoriList && (
            <span className="error" style={{ color: "red" }}>
              {errors.kategoriList}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="harga">Harga</label>
          <input
            type="number"
            id="harga"
            value={harga}
            placeholder="Contoh: 2000"
            onChange={(e) => setHarga(e.target.value)}
            required
          />
          {errors.harga && (
            <span className="error" style={{ color: "red" }}>
              {errors.harga}
            </span>
          )}
        </div>

        <div className="form-grip">
          <label htmlFor="gambar">Gambar</label>
          <input
            type="file"
            id="gambar"
            accept="image/*"
            onChange={handleChangeImage}
          />
          {preview && <img src={preview} alt="image-preview" width={220} />}
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
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

export default EditProduk;
