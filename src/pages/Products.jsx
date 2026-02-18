// // import products from "../data/products";
// // import "./Products.css";

// // function Products() {
// //   return (
// //     <div className="products-page">
// //       <h2>Microsoft Products</h2>

// //       <div className="products-grid">
// //         {products.map((item) => (
// //           <div className="product-card" key={item.id}>
// //             <img src={item.image} alt={item.name} />
// //             <h3>{item.name}</h3>
// //             <p>${item.price}</p>
// //             <button>Add to Cart</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Products;
// import products from "../data/products";
// import ProductCard from "../components/ProductCard"; // Ise use karna zaruri hai
// import "./Products.css";

// function Products() {
//   return (
//     <div className="products-page">
//       <h2>Microsoft Products</h2>

//       <div className="products-grid">
//         {products.map((item) => (
//           /* Purane <div> ko hata kar is component ko use karein */
//           <ProductCard key={item.id} product={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;

import ProductCard from "../components/ProductCard";
import React, { useState } from "react";
import "./Products.css";

// data as a prop receive ho raha hai App.jsx se
function Products({ data = [] }) { 
   const [products, setProducts] = React.useState(data);

    const handleEdit = (id) => {
    const newTitle = prompt("Naya title daalein:");
    const newPrice = prompt("Nayi price daalein:");

    setProducts(products.map(p =>
      p.id === id
        ? { ...p, title: newTitle || p.title, price: newPrice ? Number(newPrice) : p.price }
        : p
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete karna chahte hain?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };
  return (
    <div className="products-page">
      <h2>Microsoft Products</h2>

      <div className="products-grid">
        {/* Agar data hai toh map chalega, warna message dikhega */}
        {data.length > 0 ? (
          data.map((item) => (
            <ProductCard key={item.id} product={item}
            onEdit={handleEdit} 
            onDelete={handleDelete}
             />
          ))
        ) : (
          <p className="no-results">Yahan dikhane ke liye koi product nahi hai.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
