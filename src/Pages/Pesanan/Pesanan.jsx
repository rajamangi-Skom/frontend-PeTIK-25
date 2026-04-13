import { useEffect, useState } from "react";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Pesanan = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/pesanan`,
      );
      console.log(orders);
      setOrders(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = orders.filter((orders) => {
    return orders.tanggal?.toLowerCase().includes(search.toLowerCase());
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
        `${import.meta.env.VITE_API_URL}/pesanan/${uuid}`,
      );
      setCurrentPage(1);
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (uuid) => {
    navigate(`/dashboard/pesanan/edit/${uuid}`);
  };
  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar Pesanan</h3>
        <NavLink to="/dashboard/pesanan/add">Tambah Pesanan</NavLink>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Total</th>
              <th>Pelanggan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((orders, index) => (
              <tr key={index}>
                <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                <td>{orders.tanggal}</td>
                <td>{orders.total}</td>
                <td>{orders.pelanggan.nama}</td>

                <td>
                  <button onClick={() => handleEdit(orders.uuid)}>Edit</button>
                  <button
                    style={{
                      backgroundColor: "rgb(165, 11, 0)",
                      color: "white",
                    }}
                    onClick={() => handleDelete(orders.uuid)}
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

export default Pesanan;
