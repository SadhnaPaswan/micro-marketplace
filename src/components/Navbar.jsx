import { Link } from "react-router-dom";
import { FaHeart, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useFavorites } from "../context/FavoriteContext";


function Navbar({searchQuery, setSearchQuery}) {
  const { user, logout } = useContext(AuthContext);
  const { favorites } = useFavorites();
  const handleResetSearch = () => {
    setSearchQuery(""); // Ye search bar ko khali kar dega
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">MicroMarket</Link>

      {/* <input className="search" placeholder="Search products..." /> */}
     <input 
        className="search" 
        placeholder="Search products..." 
        value={searchQuery}                    // <--- Ye add karein
        onChange={(e) => setSearchQuery(e.target.value)} // <--- Ye add karein
      />

      <div className="nav-links">
        <Link to="/favorites"> ❤️ Favourite ({favorites.length})</Link>
        <Link to="/" onClick={handleResetSearch}>Products</Link>
        {user && <Link to="/favorites"><FaHeart /></Link>}
        {user ? (
          <button onClick={logout}><FaUser /> Logout</button>
        ) : (
          <Link to="/login"><FaUser /> Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;