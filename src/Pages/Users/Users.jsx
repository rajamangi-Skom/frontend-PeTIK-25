import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useOutletContext, NavLink } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/users`,
      );
      console.log(users);
      setUsers(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = users.filter((user) => {
    return user.email?.toLowerCase().includes(search.toLowerCase());
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
        `${import.meta.env.VITE_API_URL}/users/${uuid}`,
      );
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar Users</h3>
        <NavLink to="/dashboard/users/add">Tambah Users</NavLink>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Gambar</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((users, index) => (
              <tr key={index}>
                <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                <td>
                  <img src={users.url} alt="gambar" width={80} />
                </td>
                <td>{users.email}</td>
                <td>{users.username}</td>

                <td>{users.role}</td>
                <td>{users.status}</td>

                <td>
                  <button>Edit</button>
                  <button
                    style={{
                      backgroundColor: "rgb(165, 11, 0)",
                      color: "white",
                    }}
                    onClick={() => handleDelete(users.uuid)}
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

export default Users;
