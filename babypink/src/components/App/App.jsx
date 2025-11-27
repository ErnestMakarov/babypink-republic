import React from "react";
import { CartProvider } from "../../utils/CartContext";
import Header from "../Header";
import Footer from "../Footer";
import { AppRoutes } from "../Routes/Routes";

function App() {
  return (
    <CartProvider>
      <Header />
      <div className="wrapper">
        <AppRoutes />
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
