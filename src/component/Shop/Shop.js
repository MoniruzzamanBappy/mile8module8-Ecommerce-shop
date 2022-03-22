import React, { useEffect, useState } from 'react';
import Body from './Body/Body';
import './Shop.css';
import Sidebar from './Sidebar/Sidebar';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddtoClick = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart)

    }

    return (
        <div className='container'>
            <div className='products'>
            {
                products.map(product=><Body key={product.id} handleAddtoClick={handleAddtoClick} product={product}></Body>)
            }
            </div>
            <div>
                <h1>Order Summary</h1>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;