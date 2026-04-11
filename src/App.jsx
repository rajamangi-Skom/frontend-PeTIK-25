import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Components/MyNavbar/MyNavbar.jsx";
import MyNavbar from "./Components/MyNavbar/MyNavbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Kategori from "./Pages/Kategori/Kategori.jsx";
import DashboardLayout from "./Pages/DashboardLayout/DashboardLayout.jsx";
import Produk from "./Pages/Produk/Produk.jsx";
import Pesanan from "./Pages/Pesanan/Pesanan.jsx";
import Pelanggan from "./Pages/Pelanggan/Pelanggan.jsx";
import Kartu from "./Pages/Kartu/Kartu.jsx";
import Users from "./Pages/Users/Users.jsx";
import History from "./Pages/History/History.jsx";
import AddKategori from "./Pages/Kategori/AddKategori.jsx";
import AddProduk from "./Pages/Produk/AddProduk.jsx";
import AddPelanggan from "./Pages/Pelanggan/AddPelanggan.jsx";
import AddKartu from "./Pages/Kartu/AddKartu.jsx";
import AddPesanan from "./Pages/Pesanan/AddPesanan.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import AddUsers from "./Pages/Users/AddUsers.jsx";
import EditKategori from "./Pages/Kategori/EditKategori.jsx";
import EditProduk from "./Pages/Produk/EditProduk.jsx";
import EditKartu from "./Pages/Kartu/EditKartu.jsx";
import EditPelanggan from "./Pages/Pelanggan/EditPelanggan.jsx";
import EditPesanan from "./Pages/Pesanan/EditPesanan.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          {/* pesanan */}
          <Route path="pesanan" element={<Pesanan />} />
          <Route path="pesanan/add" element={<AddPesanan />} />
          <Route path="pesanan/edit/:uuid" element={<EditPesanan />} />

          {/* produk */}
          <Route path="produk" element={<Produk />} />
          <Route path="produk/add" element={<AddProduk />} />
          <Route path="produk/edit/:uuid" element={<EditProduk />} />

          {/* jenis produk */}
          <Route path="kategori" element={<Kategori />} />
          <Route path="kategori/add" element={<AddKategori />} />
          <Route path="kategori/edit/:uuid" element={<EditKategori />} />

          {/* pelanggan */}
          <Route path="pelanggan" element={<Pelanggan />} />
          <Route path="pelanggan/add" element={<AddPelanggan />} />
          <Route path="pelanggan/edit/:uuid" element={<EditPelanggan />} />

          {/* kartu */}
          <Route path="kartu" element={<Kartu />} />
          <Route path="kartu/add" element={<AddKartu />} />
          <Route path="kartu/edit/:uuid" element={<EditKartu />} />

          {/* users */}
          <Route path="users" element={<Users />} />
          <Route path="users/add" element={<AddUsers />} />

          {/* history */}
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
