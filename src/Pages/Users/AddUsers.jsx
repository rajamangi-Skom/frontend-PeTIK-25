import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  const navigate = useNavigate();

  // state data user
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("pelanggan");
  const [status, setStatus] = useState("aktif");

  //   state data pelanggan
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("L");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tglLahir, setTglLahir] = useState("");
  const [kartuId, setKartuId] = useState(4);
  const [kartuList, setKartuList] = useState([""]);

  const [gambar, setGambar] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const getKartuList = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/kartu`);
      setKartuList(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getKartuList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const userResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/users`,
        {
          username,
          email,
          password,
          role,
          status,
          gambar,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (role === "pelanggan") {
        const newUserId = userResponse.data.data.id;
        await axios.post(`${import.meta.env.VITE_API_URL}/pelanggan`, {
          nama,
          gender,
          no_hp: noHp,
          alamat,
          tgl_lahir: tglLahir,
          kartu_id: kartuId,
          user_id: newUserId,
        });
      }
      navigate(-1);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setGambar(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="users-page">
      <div className="users-header">
        <h3>Tambah User</h3>
      </div>

      <form onSubmit={handleSubmit} className="form-wrapper">
        {/* username */}
        <div className="form-grip">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Contoh: Ucup123"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && (
            <span className="error" style={{ color: "red" }}>
              {errors.username}
            </span>
          )}
        </div>

        {/* email */}
        <div className="form-grip">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Contoh: Ucup123@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <span className="error" style={{ color: "red" }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* password */}
        <div className="form-grip">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && (
            <span className="error" style={{ color: "red" }}>
              {errors.password}
            </span>
          )}
        </div>

        {/* role */}
        <div className="form-grip">
          <label htmlFor="role">Role</label>

          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option>-Pilih Role-</option>
            <option value="pelanggan">Pelanggan</option>
            <option value="admin">Admin</option>
          </select>

          {errors.role && (
            <span className="error" style={{ color: "red" }}>
              {errors.role}
            </span>
          )}
        </div>

        {/* status */}
        <div className="form-grip">
          <label htmlFor="status">Status</label>

          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option disabled>-Pilih Status-</option>
            <option value="aktif">Aktif</option>
            <option value="nonaktif">Nonaktif</option>
          </select>

          {errors.status && (
            <span className="error" style={{ color: "red" }}>
              {errors.status}
            </span>
          )}
        </div>

        {/* gambar */}
        <div className="form-grip">
          <label htmlFor="gambar">Foto</label>
          <input
            type="file"
            id="gambar"
            accept="image/*"
            onChange={handleChangeImage}
          />
          {preview && <img src={preview} alt="image-preview" width={220} />}
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
            </span>
          )}
        </div>

        {/* validasi role */}
        {role === "pelanggan" && (
          <>
            {/* nama */}
            <div className="form-grip">
              <label htmlFor="nama">Nama</label>
              <input
                type="text"
                id="nama"
                placeholder="Contoh: Ucup Sarucup"
                onChange={(e) => setNama(e.target.value)}
                required
              />
              {errors.nama && (
                <span className="error" style={{ color: "red" }}>
                  {errors.nama}
                </span>
              )}
            </div>

            {/* gender */}
            <div className="form-grip">
              <label htmlFor="l">
                <input
                  type="radio"
                  id="l"
                  value="L"
                  checked={gender === "L"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Laki-Laki
              </label>

              <label htmlFor="p">
                <input
                  type="radio"
                  id="p"
                  value="P"
                  checked={gender === "P"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Perempuan
              </label>
              {errors.gender && (
                <span className="error" style={{ color: "red" }}>
                  {errors.gender}
                </span>
              )}
            </div>

            {/* nohp */}
            <div className="form-grip">
              <label htmlFor="nohp">Nomor Hp</label>
              <input
                type="number"
                id="nohp"
                placeholder="Contoh: 08922738212"
                onChange={(e) => setNoHp(e.target.value)}
                required
              />
              {errors.nohp && (
                <span className="error" style={{ color: "red" }}>
                  {errors.nohp}
                </span>
              )}
            </div>

            {/* alamat */}
            <div className="form-grip">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="alamat"
                placeholder="Contoh: Jln.Merdeka No.1"
                onChange={(e) => setAlamat(e.target.value)}
                required
              />
              {errors.alamat && (
                <span className="error" style={{ color: "red" }}>
                  {errors.alamat}
                </span>
              )}
            </div>

            {/* ttl */}
            <div className="form-grip">
              <label htmlFor="tgl_lahir">TTL</label>
              <input
                type="date"
                id="tgl_lahir"
                placeholder="Contoh: 08922738212"
                onChange={(e) => setTglLahir(e.target.value)}
                required
              />
              {errors.tgl_lahir && (
                <span className="error" style={{ color: "red" }}>
                  {errors.tgl_lahir}
                </span>
              )}
            </div>

            {/* kartu */}
            <div className="form-grip">
              <label htmlFor="kartu_id">Membership</label>

              <select
                id="kartu_id"
                value={kartuId}
                onChange={(e) => setKartuId(e.target.value)}
                required
              >
                <option disabled>-Pilih Langganan-</option>
                {kartuList.map((kartu) => (
                  <option key={kartu.id} value={kartu.id}>
                    {kartu.nama}
                  </option>
                ))}
              </select>

              {errors.kartu_id && (
                <span className="error" style={{ color: "red" }}>
                  {errors.kartu_id}
                </span>
              )}
            </div>
          </>
        )}

        <div className="btn-group">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn-delete"
            disabled={loading}
          >
            Batal
          </button>

          <button type="submit" className="btn-tambah" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
