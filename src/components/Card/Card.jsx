import "./Card.css";
// const Card = ({ membership, c2, border, harga, l1, l2, l3, l4, btn }) => {
//   return (
//     <div className={border}>
//       <div className={c2}>
//         <span>{membership}</span>
//         <h2>
//           ${harga} <small>/Month</small>
//         </h2>
//       </div>
//       <div className="card-body1">
//         <ul>
//           <li>{l1}</li>
//           <li>{l2}</li>
//           <li>{l3}</li>
//           <li>{l4}</li>
//         </ul>
//       </div>

//       <div className={btn}>
//         <button>Purchase Plan</button>
//       </div>
//     </div>
//   );
// };
// export default Card;

/**================================================================================= */
const Card = ({
  title,
  price,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  isPopular = false,
}) => {
  return (
    <div className={`card ${isPopular ? "card-popular" : ""}`}>
      <div className={`card-header ${isPopular ? "card-popular" : ""}`}>
        <h3>
          {title}{" "}
          <span className={`${isPopular ? "badge-popular" : ""}`}>
            {isPopular ? "Popular" : ""}
          </span>
        </h3>
        <h1>
          Rp{price} <small>/Month</small>
        </h1>
      </div>
      <div className="card-body">
        <ul>
          <li>{benefit1}</li>
          <li>{benefit2}</li>
          <li>{benefit3}</li>
          <li>{benefit4}</li>
        </ul>
        <button className={`btn ${isPopular ? "btn-popular" : ""}`}>
          Puschase Plan
        </button>
      </div>
    </div>
  );
};
export default Card;
