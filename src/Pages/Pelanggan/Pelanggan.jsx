import { useEffect, useState } from "react";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Kategori = () => {
  // kalo nilainya berupa array/objek maka disesuaikan
  const [pelanggan, setPelanggan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getPelanggan();
  }, []);

  const getPelanggan = async () => {
    setLoading(true);
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/pelanggan`,
      );
      console.log(pelanggan);
      setPelanggan(result.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = pelanggan.filter((client) => {
    return client.nama?.toLowerCase().includes(search.toLowerCase());
  });

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // rumus
  // slice(mulai,selesai)

  const handleDelete = async (uuid) => {
    const msg = window.confirm("Yakin ingin menghapus");
    if (!msg) return;
    console.log(uuid);

    try {
      await axiosInstance.delete(
        `${import.meta.env.VITE_API_URL}/pelanggan/${uuid}`,
      );
      setCurrentPage(1);
      getPelanggan();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (uuid) => {
    navigate(`/dashboard/pelanggan/edit/${uuid}`);
  };

  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar Pelanggan</h3>
        <NavLink to="/dashboard/pelanggan/add">Tambah Pelanggan</NavLink>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Gender</th>
              <th>No_hp</th>
              <th>Alamat</th>
              <th>TTL</th>
              <th>Kartu</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <td key={i}></td>
                    ))}
                  </tr>
                ))
              : paginatedData.map((client, index) => (
                  <tr key={index}>
                    <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                    <td>{client.nama}</td>
                    <td>{client.gender}</td>
                    <td>{client.no_hp}</td>
                    <td>{client.alamat}</td>
                    <td>{client.tgl_lahir}</td>
                    <td>{client.kartu?.nama || "-"}</td>

                    <td>
                      <button onClick={() => handleEdit(client.uuid)}>
                        Edit
                      </button>
                      <button
                        style={{
                          backgroundColor: "rgb(165, 11, 0)",
                          color: "white",
                        }}
                        onClick={() => handleDelete(client.uuid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="btn-page"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            &laquo; Prev
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              className="btn-page"
              disabled={currentPage === i + 1}
              key={i}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="btn-page"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            &raquo; Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Kategori;
