import React from "react";
import { CartProvider } from "../../utils/CartContext";
import Header from "../Header";
import Footer from "../Footer";
import { AppRoutes } from "../Routes/Routes";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <CartProvider>
      <div className="wrapper">
        <Header />
        <AppRoutes />
        <Footer />
        <Analytics /> 
      </div>
    </CartProvider>
  );
}

export default App;
