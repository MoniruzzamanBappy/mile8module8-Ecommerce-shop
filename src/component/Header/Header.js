import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" />
            <div className='links'>
                <a href="/home">Home</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/aout-us">About Us</a>
            </div>
        </nav>
    );
};

export default Header;