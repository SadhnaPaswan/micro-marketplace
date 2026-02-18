import { useFavorites } from "../context/FavoriteContext";
import ProductCard from "../components/ProductCard";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="products-grid">
          {favorites.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
