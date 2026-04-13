import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const History = () => {
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/history`,
      );
      console.log(history);
      setHistory(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = history.filter((user) => {
    return user.action?.toLowerCase().includes(search.toLowerCase());
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
        `${import.meta.env.VITE_API_URL}/history/${uuid}`,
      );
      getHistory();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar History</h3>
        <NavLink to="/dashboard/produk/add">Tambah History</NavLink>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Table</th>
              <th>Value</th>
              <th>Kategori</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((history, index) => (
              <tr key={index}>
                <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                <td>{history.action}</td>
                <td>{history.table}</td>
                <td>{history.value}</td>

                <td>
                  <img src={history.url} alt="gambar" width={120} />
                </td>
                <td>
                  <button>Edit</button>
                  <button
                    style={{
                      backgroundColor: "rgb(165, 11, 0)",
                      color: "white",
                    }}
                    onClick={() => handleDelete(history.uuid)}
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

export default History;
