import Customer from "./Components/Customer/Customer";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";

function App() {
  // Logic diisi disini
  const a = 10;
  const b = 5;
  alert(a + b)
  return (
    <>
      <Header />
      <h1>To-do list :</h1>
      <ol>
        <li>Mengerjakan tugas front end</li>
        <li>mempelajari tutorial react js</li>
        <li>Murojaah</li>
      </ol>
      <Profile nama={"Rebit 🐰"} alamat={"Padang 🇮🇩"} umur={`200 💀`} />
      <Profile nama={"Belang 🐺"} alamat={"Palembang 🇮🇩"} umur={`31 💀`} />
      <img src="https:picsum.photos/200/300" alt="gambar" />
      <Footer nama="Raja" />
      <h3>Our Customer</h3>
      <Customer nama={"Ucup"} alamat={"Depok"} membership={"Premium"} />
      <Customer nama={"Ntuy"} alamat={"Bogor"} membership={"Gold"} />
      <Customer nama={"Aji"} alamat={"Bekasi"} membership={"Platinum"} />
    </>
  );
}

export default App;
