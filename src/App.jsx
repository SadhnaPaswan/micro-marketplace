// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Products from "./pages/Products";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Favorites from "./pages/Favorites";
// import ProductList from "./pages/ProductList";
// import Footer from "./components/Footer";
// import DetailsPage from "./components/DetailsPage";
// import products from "./data/products";
// import { useSearch } from './hooks/useSearch';

// function App() {
//   const { searchQuery, setSearchQuery, filteredItems } = useSearch(products);
//   return (
//     <>
//     {/* 2. Navbar ko state pass karein taaki search bar chale */}
//       <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <Navbar />
//       <Routes>
//         {/* 3. Jo bhi page products dikhata hai, wahan filteredItems bhej dein */}
//         <Route path="/" element={<Products data={products} />} />
//         <Route path="/" element={<Products />} />
//         <Route path="/login" element={<Login />} />
//         {/* <Route path="/products" element={<ProductList />} /> */}
//         <Route path="/products" element={<ProductList searchQuery={searchQuery} />} />
        
//         {/* <Route path="/product" element={<ProductList />} /> */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/favorites" element={<Favorites />} />
//          <Route path="/product/:id" element={<DetailsPage data={products} />} />

//       </Routes>
     
//         <Footer />
//     </>
//   );
// }

// export default App;
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Products from "./pages/Products";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Favorites from "./pages/Favorites";
// import ProductList from "./pages/ProductList";
// import Footer from "./components/Footer";
// import DetailsPage from "./components/DetailsPage";
// import products from "./data/products";
// import { useSearch } from './hooks/useSearch';

// function App() {
//   const { searchQuery, setSearchQuery, filteredItems } = useSearch(products);

//   return (
//     <>
//       {/* SIRF EK NAVBAR RAKHEIN - Props ke saath wala */}
//       <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
//       <Routes>
//         {/* Home Page pe bhi filteredItems bhejien taaki search wahan bhi kaam kare */}
//         <Route path="/" element={<Products data={filteredItems} />} />
        
//         <Route path="/login" element={<Login />} />
        
//         {/* Product List page ko searchQuery props bhejien */}
//         <Route path="/products" element={<ProductList searchQuery={searchQuery} />} />
        
//         <Route path="/register" element={<Register />} />
//         <Route path="/favorites" element={<Favorites />} />
        
//         {/* Details page ke liye poora data bhejien kyunki wahan filter ki zaroorat nahi */}
//         <Route path="/product/:id" element={<DetailsPage data={products} />} />
//       </Routes>
      
//       <Footer />
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";
import DetailsPage from "./components/DetailsPage";
import products from "./data/products";
import { useSearch } from './hooks/useSearch';

function App() {
  // filteredItems mein search results hote hain
  const [allProducts, setAllProducts] = useState(products);
  const { searchQuery, setSearchQuery, filteredItems } = useSearch(allProducts);

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <Routes>
        {/* Home Page: filteredItems bhejiye taaki laptop likhte hi yahan bhi filter ho */}
        <Route path="/" element={<Products data={filteredItems} />} />
        
        <Route path="/login" element={<Login />} />
        
        {/* ProductList Page: Yahan searchQuery bhejiye kyunki filtering ProductList ke andar ho rahi hai
        <Route path="/products" element={<ProductList searchQuery={searchQuery} />} />
         */}

         <Route path="/products" element={
          <ProductList 
            products={allProducts} 
            setProducts={setAllProducts} 
            searchQuery={searchQuery} 
          />
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<DetailsPage data={allProducts} />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;