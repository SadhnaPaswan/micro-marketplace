// // // import products from "../data/products";
// // // import ProductCard from "../components/ProductCard";

// // // function ProductList({ searchQuery = "" }) {
  
// // //   const filteredItems = products.filter((item) => {
// // //     const query = searchQuery.toLowerCase();
// // //     return (
// // //       item.name.toLowerCase().includes(query) ||
// // //       (item.category && item.category.toLowerCase().includes(query))
// // //     );
// // //   });
// // //   return (
// // //     <div className="products-container">
// // //       <h2>Microsoft Products</h2>

// // //       {/* <div className="products-grid">
// // //         {products.map((item) => (
// // //           <ProductCard key={item.id} product={item} />
// // //         ))}
// // //       </div>
// // //     </div> */}
// // //     <div className="products-grid">
// // //         {/* 3. Ab 'products.map' ki jagah 'filteredItems.map' use kijiye */}
// // //         {filteredItems.length > 0 ? (
// // //           filteredItems.map((item) => (
// // //             <ProductCard key={item.id} product={item} />
// // //           ))
// // //         ) : (
// // //           <p className="no-results">Oops! "{searchQuery}" ke liye kuch nahi mila.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ProductList;
// // import products from "../data/products"; 
// // import ProductCard from "../components/ProductCard";

// // function ProductList({ searchQuery = "" }) {
  
// //   const filteredItems = products.filter((item) => {
// //     const query = searchQuery.toLowerCase();
// //     return (
// //       item.name.toLowerCase().includes(query) ||
// //       (item.category && item.category.toLowerCase().includes(query))
// //     );
// //   });

// //   return (
// //     <div className="products-container">
// //       <h2>{searchQuery ? `Results for "${searchQuery}"` : "Microsoft Products"}</h2>

// //       <div className="products-grid">
// //         {filteredItems.length > 0 ? (
// //           filteredItems.map((item) => (
// //             <ProductCard key={item.id} product={item} />
// //           ))
// //         ) : (
// //           <p className="no-results">Oops! "{searchQuery}" ke liye kuch nahi mila.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductList;
// import React, { useState } from "react";
// import productsData from "../data/products"; 
// import ProductCard from "../components/ProductCard";

// export default function ProductList({ searchQuery = "" }) {
//   const [products, setProducts] = useState(productsData);

//   const filteredItems = products.filter((item) => {
//     const query = searchQuery.toLowerCase();
//     return (
//       item.title.toLowerCase().includes(query) ||
//       (item.category && item.category.toLowerCase().includes(query))
//     );
//   });

//   // Delete Product
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       setProducts(products.filter(p => p.id !== id));
//     }
//   };

//   // Edit Product
//   const handleEdit = (id) => {
//     const newTitle = prompt("Enter new title:");
//     const newPrice = prompt("Enter new price:");

//     const updatedProducts = products.map(p =>
//       p.id === id 
//         ? { ...p, title: newTitle || p.title, price: newPrice ? Number(newPrice) : p.price } 
//         : p
//     );
//     setProducts(updatedProducts);
//   };

//   // Optional: Add Product
//   const handleAdd = () => {
//     const newProduct = {
//       id: Date.now(),
//       title: "New Product",
//       category: "laptop",
//       price: 199,
//       image: "https://images.unsplash.com/photo-1612832021272-3f2f00f74a0b?w=600"
//     };
//     setProducts([...products, newProduct]);
//   };

//   return (
//     <div className="products-container">
//       <h2>{searchQuery ? `Results for "${searchQuery}"` : "Microsoft Products"}</h2>
//       <button onClick={handleAdd} style={{ marginBottom: "10px" }}>Add Product</button>

//       <div className="products-grid">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <ProductCard 
//               key={item.id} 
//               product={item} 
//               onEdit={handleEdit} 
//               onDelete={handleDelete} 
//             />
//           ))
//         ) : (
//           <p className="no-results">Oops! "{searchQuery}" ke liye kuch nahi mila.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import productsData from "../data/products"; 
// import ProductCard from "../components/ProductCard";
// import "../components/ProductCard.css";


// export default function ProductList({ searchQuery = "" }) {
//   // State initialization with original data
//   const [products, setProducts] = useState(productsData);

//   const filteredItems = products.filter((item) => {
//     const query = searchQuery.toLowerCase();
//     return (
//       item.title.toLowerCase().includes(query) ||
//       (item.category && item.category.toLowerCase().includes(query))
//     );
//   });

//   // DELETE
//   const handleDelete = (id) => {
//     if (window.confirm("Delete karna chahte hain?")) {
//       setProducts(products.filter(p => p.id !== id));
//     }
//   };

//   // EDIT
//   const handleEdit = (id) => {
//     const newTitle = prompt("Naya title likhein:");
//     const newPrice = prompt("Nayi price likhein:");

//     if(newTitle || newPrice) {
//       const updated = products.map(p =>
//         p.id === id 
//           ? { ...p, title: newTitle || p.title, price: newPrice ? Number(newPrice) : p.price } 
//           : p
//       );
//       setProducts(updated);
//     }
//   };

//   // ADD
//   const handleAdd = () => {
//     const newProduct = {
//       id: Date.now(),
//       title: "New Item",
//       category: "General",
//       price: 0,
//       image: "https://via.placeholder.com/150"
//     };
//     setProducts([newProduct, ...products]); // Naya product top pe dikhega
//   };

//   return (
//     <div className="products-container">
//       <button className="add-btn" onClick={handleAdd}>+ Add New Product</button>

//       <div className="products-grid">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <ProductCard 
//               key={item.id} 
//               product={item} 
//               onEdit={handleEdit} 
//               onDelete={handleDelete} 
//             />
//           ))
//         ) : (
//           <p>Koi product nahi mila!</p>
//         )}
//       </div>
//     </div>
//   );
// }


// import productsData from "../data/products"; 
// import ProductCard from "../components/ProductCard";

// import ProductCard from "../components/ProductCard.css";
// import productsData from "../data/products"; 
// import ProductCard from "../components/ProductCard";
// import React, { useState } from "react"; // Yeh line honi chahiye

// export default function ProductList({ products, setProducts, searchQuery }) {
//   const [products, setProducts] = useState(productsData);

//   const filteredItems = products.filter((item) => {
//     const query = searchQuery.toLowerCase();
//     return (
//       item.title.toLowerCase().includes(query) ||
//       (item.category && item.category.toLowerCase().includes(query))
//     );
//   });

  // const handleDelete = (id) => {
  //   if (window.confirm("Khatam kar dein is product ko?")) {
  //     setProducts(products.filter(p => p.id !== id));
  //   }
  // };
//   const handleDelete = (id) => {
//   if (window.confirm("Delete karna chahte hain?")) {
//     // Ye line 'products' array se us item ko nikal degi
//     const newItems = products.filter(p => p.id !== id);
//     setProducts(newItems); 
//     console.log("Deleted ID:", id); // Check karne ke liye
//   }
// };

  // const handleEdit = (id) => {
  //   const newTitle = prompt("Naya naam?");
  //   const newPrice = prompt("Nayi keemat?");
  //   if (newTitle || newPrice) {
  //     setProducts(products.map(p => 
  //       p.id === id ? { ...p, title: newTitle || p.title, price: newPrice || p.price } : p
  //     ));
  //   }
  // };


//   const handleEdit = (id) => {
//   // 1. User se naya naam lein
//   const newTitle = prompt("Naya naam daalein:");

//   // 2. Check karein ki user ne kuch likha hai (aur Cancel nahi dabaya)
//   if (newTitle) {
//     // 3. setProducts call karein jo App.jsx se props ke roop mein aaya hai
//     setProducts(products.map(p => 
//       p.id === id ? { ...p, title: newTitle } : p
//     ));
    
//     // Aap ek alert bhi daal sakte hain confirm karne ke liye
//     alert("Title update ho gaya!");
//   }
// };

//   const handleAdd = () => {
//     const newP = {
//       id: Date.now(),
//       title: "New Product",
//       price: "99",
//       category: "Laptop",
//       image: "https://via.placeholder.com/150"
//     };
//     setProducts([newP, ...products]);
//   };

//   return (
//     <div className="products-container" style={{ textAlign: 'center' }}>
//       <button className="add-main-btn" onClick={handleAdd}>+ Add New Product</button>
      
//       <div className="products-grid">
//         {filteredItems.map(item => (
//           <ProductCard 
//             key={item.id} 
//             product={item} 
//             onEdit={handleEdit} 
//             onDelete={handleDelete} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// } 
// import productsData from "../data/products"; 
// import ProductCard from "../components/ProductCard";
// import React from "react"; // React import

// export default function ProductList({ products, setProducts, searchQuery }) {

//   const filteredItems = products.filter((item) => {
//     const query = searchQuery.toLowerCase();
//     return (
//       item.title.toLowerCase().includes(query) ||
//       (item.category && item.category.toLowerCase().includes(query))
//     );
//   });

//   const handleDelete = (id) => {
//     if (window.confirm("Delete karna chahte hain?")) {
//       setProducts(products.filter(p => p.id !== id));
//     }
//   };

//   const handleEdit = (id) => {
//     const newTitle = prompt("Naya naam daalein:");
//     if (newTitle) {
//       setProducts(products.map(p => 
//         p.id === id ? { ...p, title: newTitle } : p
//       ));
//       alert("Title update ho gaya!");
//     }
//   };

//   const handleAdd = () => {
//     const newP = {
//       id: Date.now(),
//       title: "New Product",
//       price: "99",
//       category: "Laptop",
//       image: "https://via.placeholder.com/150"
//     };
//     setProducts([newP, ...products]);
//   };

//   return (
//     <div className="products-container" style={{ textAlign: 'center' }}>
//       <button className="add-main-btn" onClick={handleAdd}>+ Add New Product</button>
      
//       <div className="products-grid">
//         {filteredItems.map(item => (
//           <ProductCard 
//             key={item.id} 
//             product={item} 
//             onEdit={handleEdit} 
//             onDelete={handleDelete} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import ProductCard from "../components/ProductCard";

export default function ProductList({ products, setProducts, searchQuery }) {
  
  const filteredItems = products.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      (item.category && item.category.toLowerCase().includes(query))
    );
  });

  const handleEdit = (id) => {
    const newTitle = prompt("Naya naam daalein:");
    
    if (newTitle !== null && newTitle.trim() !== "") {
      setProducts(products.map(p => 
        p.id === id ? { ...p, title: newTitle } : p
      ));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete karna chahte hain?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleAdd = () => {
    const newP = {
      id: Date.now(),
      title: "New Product",
      price: "99",
      category: "Laptop",
      image: "https://via.placeholder.com/150"
    };
    setProducts([newP, ...products]);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={handleAdd}>+ Add New Product</button>
      <div className="products-grid">
        {filteredItems.map(item => (
          <ProductCard 
            key={item.id} 
            product={item} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
}
