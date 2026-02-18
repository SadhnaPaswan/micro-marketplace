// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import { AuthProvider } from "./context/AuthContext";
// import "./App.css";
// import { FavoriteProvider } from "./context/FavoriteContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <AuthProvider>
//       <FavoriteProvider>
//           <App />
//       </FavoriteProvider>
      
//     </AuthProvider>
//   </BrowserRouter>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <AuthProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </AuthProvider>
  </BrowserRouter>
);
