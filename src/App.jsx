import "./App.css";
import Card from "./components/Card/Card";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h3>Daftar Pelanggan</h3>
      <Content nama="Ucup" membership={"Platinum"} />
      <Content nama="Aji" membership={"Gold"} />
      <Content nama="Eja" membership={"Silver"} />
      <h3>Yuk berlanggan membership!</h3>

      <div className="card-wrapper">
        <Card
          title={"Free"}
          price={0}
          benefit1={"Gratis tanpa biaya layanan"}
          benefit2={"Bisa melihat katalog & update terbaru"}
          benefit3={"Akses Dasar ke fitur utama"}
          benefit4={"Dukungan komunitas"}
        />
        <Card
          title={"Gold"}
          price={100000}
          isPopular={true}
          benefit1={"Prioritas layanan pelanggan"}
          benefit2={"Akses premium terpilih"}
          benefit3={"Promo & diskon khusus member"}
          benefit4={"Dukungan komunitas diutamakan"}
        />
        <Card
          title={"Platinum"}
          price={200000}
          benefit1={"Akses penuh ke seluruh fitur premium"}
          benefit2={"Prioritas tertinggi support & layanan"}
          benefit3={"Penawaran ekslusif & early access"}
          benefit4={"Promo & diskon khusus member"}
        />
      </div>
      <Footer />

      {/* ========================= */}
      {/* <Card
        membership={"Free"}
        harga={0}
        l1={"AI advisor for a day"}
        l2={"2 auto tracking"}
        l3={"7 Day transaction clearing"}
        l4={"24/7 Customer support"}
        border={"b-item"}
        c2={"item"}
        btn={"btn-item"}
      />
      <br />
      <Card
        membership={"Gold"}
        harga={150}
        l1={"AI advisor full time"}
        l2={"Unlimited auto tracking"}
        l3={"1 Day transaction clearing"}
        l4={"Priorty custoomer support"}
        border={"b-ungu"}
        c2={"ungu"}
        btn={"btn-ungu"}
      />
      <br />
      <Card
        membership={"Silver"}
        harga={180}
        l1={"AI advisor full time"}
        l2={"Unlimited auto tracking"}
        l3={"1 Day transaction clearing"}
        l4={"Priorty custoomer support"}
        border={"b-item"}
        c2={"item"}
        btn={"btn-item"}
      />
      <br /> */}
    </>
  );
}

export default App;
