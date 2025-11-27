import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Products from "../Products/Products";
import ProductDetails from "../Products/Product";
import ContactForm from "../Contact";
import About from "../About";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
