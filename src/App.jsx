import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Blogs from "./components/Pages/Blogs/Blogs";
import DetailBlog from "./components/Pages/DetailBlog/DetailBlog";
import About from "./components/Pages/About.jsx/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Blogs />} />
        <Route path="/posts/detail" element={<DetailBlog />} />
        <Route path="/about" element={<About />} />
        {/* * itu digunakan untuk menghandling kalo rute tidak ada selain yang didefinisikan */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
