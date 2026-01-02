const Customer = ({ nama, alamat, membership }) => {
  return (
    <div>
        
      <ol>
        <li>Nama : {nama}</li>
        <li>Alamat : {alamat}</li>
        <li>Membership : {membership}</li>
      </ol>
      <button>Detail</button>
    </div>
  );
};

export default Customer;

