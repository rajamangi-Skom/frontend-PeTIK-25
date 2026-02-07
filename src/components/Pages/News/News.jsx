import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";
import Navbar from "../../Navbar/Navbar.jsx";
import { Spinner } from "reactstrap";
import Footer from "../../Footer/Footer.jsx";

const News = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHospitals = async () => {
      try {
        const response = await axios.get("/api/hospitals");
        setHospitals(response.data);
      } catch (err) {
        console.error(err);
        setError("Gagal mengambil data rumah sakit");
      } finally {
        setLoading(false);
      }
    };

    getHospitals();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <Spinner
            color="danger"
            style={{ height: "3rem", width: "3rem" }}
            type="grow"
          />
          <p className="text-muted mt-3">Memuat data rumah sakit...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <p className="text-center text-danger my-5">{error}</p>
        <Footer />
      </>
    );
  }


  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="title">Rumah Sakit Rujukan</h2>

        <div className="card-wrapper">
          {hospitals.map((item, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{item.name}</h3>

              <p>
                <span>Alamat:</span> {item.address}
              </p>
              <p>
                <span>Daerah:</span> {item.region}
              </p>
              <p>
                <span>Provinsi:</span> {item.province}
              </p>
              <p>
                <span>Telepon:</span> {item.phone || "-"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;
