// import { createContext, useContext, useState } from "react";

// const FavoriteContext = createContext();

// export const FavoriteProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const addToFavorites = (product) => {
//     if (!favorites.find((item) => item.id === product.id)) {
//       setFavorites([...favorites, product]);
//     }
//   };

//   const removeFromFavorites = (id) => {
//     setFavorites(favorites.filter((item) => item.id !== id));
//   };

//   return (
//     <FavoriteContext.Provider
//       value={{ favorites, addToFavorites, removeFromFavorites }}
//     >
//       {children}
//     </FavoriteContext.Provider>
//   );
// };

// export const useFavorites = () => useContext(FavoriteContext);
import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const token = localStorage.getItem("token");

  // Load favorites from backend
  useEffect(() => {
    if (token) {
      fetch("http://localhost:5000/api/users/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setFavorites(data.favorites);
          }
        });
    }
  }, [token]);

  const addToFavorites = async (productId) => {
    const res = await fetch(
      `http://localhost:5000/api/users/favorites/${productId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    if (data.success) {
      setFavorites(data.favorites);
    }
  };

  const removeFromFavorites = async (productId) => {
    const res = await fetch(
      `http://localhost:5000/api/users/favorites/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    if (data.success) {
      setFavorites(data.favorites);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
