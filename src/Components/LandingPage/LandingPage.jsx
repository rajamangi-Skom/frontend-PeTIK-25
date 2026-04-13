import { useEffect, useState } from "react";
import axios from "axios";
import "./LandingPage.css";
import Footer from "../Footer/Footer";
import Navigate from "../Navigate/Navigate";

const LandingPage = () => {
  const [kategori, setKategori] = useState([]);
  const [produk, setProduk] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState("all");

  useEffect(() => {
    const getKategori = async () => {
      try {
        const res = await axios.get(
          "https://apiniaga.psjpetik.my.id/api/v1/jenis-produk",
        );

        const list = res.data.data || res.data;

        const formatted = list.map((item) => ({
          id: Number(item.id),
          nama: item.nama,
        }));

        setKategori([{ id: "all", nama: "Semua" }, ...formatted]);
      } catch (error) {
        console.log(error);
      }
    };

    getKategori();
  }, []);

  useEffect(() => {
    const getProduk = async () => {
      try {
        const res = await axios.get(
          "https://apiniaga.psjpetik.my.id/api/v1/produk",
        );

        setProduk(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduk();
  }, []);

  const filteredProduk =
    selectedKategori === "all"
      ? produk
      : produk.filter(
          (item) => Number(item.jenis_produk_id) === selectedKategori,
        );

  const getNamaKategori = (id) => {
    const found = kategori.find((k) => k.id === Number(id));
    return found ? found.nama : "Umum";
  };

  return (
    <div>
      <Navigate />
      <div style={{ textAlign: "center" }} className="banner-utama blue">
        <h1>Belanja Mudah, Harga Terbaik</h1>
        <p>Temukan berbagai produk berkualitas di PeTIK Niaga</p>
        <button
          className="btn-lihat"
          onClick={() =>
            document
              .querySelector(".produk-container")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Lihat Produk
        </button>
      </div>

      <div className="kategori-container">
        <h3>Kategori</h3>
        <div className="kategori">
          {kategori.map((kat, index) => (
            <button
              key={index}
              className={`btn-kategori ${
                selectedKategori === kat.id ? "active" : ""
              }`}
              onClick={() => setSelectedKategori(kat.id)}
            >
              <b>{kat.nama}</b>
            </button>
          ))}
        </div>
      </div>

      <div className="produk-container">
        {filteredProduk.length === 0 ? (
          <p style={{ textAlign: "center" }}>Produk tidak ditemukan</p>
        ) : (
          filteredProduk.map((item) => (
            <div className="card-produk" key={item.id}>
              <img
                src={item.url || "https://picsum.photos/300/200"}
                alt={item.nama_barang}
              />

              <div className="card-body">
                <small className="kategori-text">
                  {getNamaKategori(item.jenis_produk_id)}
                </small>

                <h4>{item.nama_barang}</h4>
                <p>Stok: {item.stok}</p>
                <h3>Rp {item.harga.toLocaleString()}</h3>

                <div className="btn-group">
                  <button className="btn-outline">Beli</button>
                  <button className="btn-primary ">+ Keranjang</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
