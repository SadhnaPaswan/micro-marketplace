
// import { useFavorites } from "../context/FavoriteContext";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "./ProductCard.css"; // Check karein ye file same folder mein hai

// function ProductCard({ product }) {
//   const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
//   const location = useLocation();
//   const navigate = useNavigate();

//   // String comparison hamesha safe rehta 
//   // hai
//   const handleCardClick = () => {
//     navigate(`/product/${product.id}`); // Details page par le jayega
//   };
//   const isFavorite = favorites.some((item) => String(item.id) === String(product.id));

//   const handleClick = (e) => {
//     e.stopPropagation();
//     if (isFavorite) {
//       removeFromFavorites(product.id);
//     } else {
//       addToFavorites(product);
//     }
//   };

//   return (
  

//   <div className="card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
//     <div className="card-image-container">
//       <img src={product.image} alt={product.title} className="card-image" />
      
//       {/* --- Heart Icon Logic --- */}
//       <span
//         className={`heart-icon ${isFavorite ? "favorite" : ""}`}
//         onClick={handleClick}
//       >
//         {location.pathname === "/favorites" 
//           ? "💔" 
//           : (isFavorite ? "❤️" : "🤍")
//         }
//       </span>
//       {/* ------------------------- */}
      
//     </div>
//     <h2>{product.category}</h2>
//     <h3>{product.title}</h3>
//     <p>${product.price}</p>
//   </div>
// );
// }

// export default ProductCard;

// import { useFavorites } from "../context/FavoriteContext";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "./ProductCard.css"; // tumhare existing css

// function ProductCard({ product, onEdit, onDelete }) {
//   const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/product/${product.id}`);
//   };

//   const isFavorite = favorites.some((item) => String(item.id) === String(product.id));

//   const handleClick = (e) => {
//     e.stopPropagation();
//     if (isFavorite) {
//       removeFromFavorites(product.id);
//     } else {
//       addToFavorites(product);
//     }
//   };

//   return (
//     <div className="card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
//       <div className="card-image-container">
//         <img src={product.image} alt={product.title} className="card-image" />

//         {/* Heart Icon */}
//         <span
//           className={`heart-icon ${isFavorite ? "favorite" : ""}`}
//           onClick={handleClick}
//         >
//           {location.pathname === "/favorites" ? "💔" : (isFavorite ? "❤️" : "🤍")}
//         </span>
//       </div>

//       <h2>{product.category}</h2>
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>

//       {/* Edit & Delete Buttons */}
//       <div className="card-buttons">
//         {onEdit && <button onClick={(e) => { e.stopPropagation(); onEdit(product.id); }}>Edit</button>}
//         {onDelete && <button onClick={(e) => { e.stopPropagation(); onDelete(product.id); }}>Delete</button>}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
import { useFavorites } from "../context/FavoriteContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./ProductCard.css";
// import ProductCard from "../components/ProductCard";

function ProductCard({ product, onEdit, onDelete }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const location = useLocation();
  const navigate = useNavigate();

  const isFavorite = favorites.some((item) => String(item.id) === String(product.id));

  const handleLike = (e) => {
    e.stopPropagation();
    isFavorite ? removeFromFavorites(product.id) : addToFavorites(product);
  };

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="card-image-container">
        <img src={product.image} alt={product.title} className="card-image" />
        <span className="heart-icon" onClick={handleLike}>
          {location.pathname === "/favorites" ? "💔" : (isFavorite ? "❤️" : "🤍")}
        </span>
      </div>

      <div className="card-info">
        <h2>{product.category}</h2>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>

      <div className="card-buttons">
        <button className="edit-btn" onClick={(e) => { e.stopPropagation(); onEdit(product.id); }}>
          Edit
        </button>
        <button className="delete-btn" onClick={(e) => { e.stopPropagation(); onDelete(product.id); }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
