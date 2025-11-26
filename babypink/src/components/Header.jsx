import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';
import { useCartContext } from '../utils/CartContext';

import { Link } from 'react-router';

export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const { cart, removeFromCart } = useCartContext();

    return (
        <header>
            <div className="header_container">
                <Link className='logo' to="/">
                    <h1 className='logo'>The Babypink Republic</h1>
                </Link>

                {/* 🔥 Добавил класс header-cart-icon */}
                <div
                    className={`shop-cart-button header-cart-icon ${cartOpen ? "active" : ""}`}
                    onClick={() => setCartOpen(!cartOpen)}
                >
                    <FaShoppingCart className="shop-cart-button-pic" />
                    
                    {cart.length === 0 ? (
                        <div className=""></div>
                    ) : (
                        <div className="lenght-amount">{cart.length}</div>
                    )}
                </div>

                <div className={`shop-cart ${cartOpen ? "open" : ""}`}>
                    <Cart cartItems={cart} removeFromCart={removeFromCart} />
                </div>
            </div>
        </header>
    );
}
