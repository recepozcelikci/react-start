//import React from "react";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import './App.css'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes> 
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/account" element={<AccountPage/>}/>
      <Route path="/product/:id" element={<ProductDetailPage/>}/>
      <Route path="/blog/:id" element={<BlogDetailPage/>}/>
    </Routes>
  )
}

export default App
