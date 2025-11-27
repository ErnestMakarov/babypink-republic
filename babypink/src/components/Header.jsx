import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Cart from './Cart';
import { useCartContext } from '../utils/CartContext';
import Logo from "../img/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { cart, removeFromCart } = useCartContext();

    return (
        <header>
            <div className="header_container">

                <NavLink className='logo' to="/">
                    <img src={Logo} alt="logo" />
                </NavLink>

                <div className="header-right">
                    
                    {/* DESKTOP NAV */}
                    <nav className="nav desktop-nav">
                        <NavLink className='header-link' to="/products">SHOP ALL</NavLink>
                        <NavLink className='header-link' to="/contact">CONTACT</NavLink>
                        <NavLink className='header-link' to="/about">ABOUT</NavLink>
                    </nav>

                    {/* CART */}
                    <div
                        className={`shop-cart-button header-cart-icon ${cartOpen ? "active" : ""}`}
                        onClick={() => setCartOpen(!cartOpen)}
                    >
                        <FaShoppingCart className="shop-cart-button-pic" />

                        {cart.length > 0 && (
                            <div className="lenght-amount">{cart.length}</div>
                        )}
                    </div>

                    {/* BURGER */}
                    <div
                        className="burger-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>

                    {/* CART DROPDOWN */}
                    <div className={`shop-cart ${cartOpen ? "open" : ""}`}>
                        <Cart cartItems={cart} removeFromCart={removeFromCart} />
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    <NavLink
                        className="mobile-link"
                        onClick={() => setMenuOpen(false)}
                        to="/products"
                    >
                        SHOP ALL
                    </NavLink>

                    <NavLink
                        className="mobile-link"
                        onClick={() => setMenuOpen(false)}
                        to="/contact"
                    >
                        CONTACT
                    </NavLink>

                    <NavLink
                        className="mobile-link"
                        onClick={() => setMenuOpen(false)}
                        to="/about"
                    >
                        ABOUT
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
