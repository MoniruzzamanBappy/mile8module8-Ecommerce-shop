import React, { useEffect, useState } from 'react';
import { addToDb, getFromLocal } from '../../utilities/fakedb';
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
    },[]);

    useEffect(()=>{
        const savedCart = []
        const storedCart = getFromLocal();
        for (const id in storedCart) {
            const addedToProduct = products.find(product=>product.id===id);
            if(addedToProduct){
                const quantity = storedCart[id];
                addedToProduct.quantity = quantity;
                savedCart.push(addedToProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const handleAddtoClick = (selectedProduct)=>{
        let newCart = [];
        const exist = cart.find(product=>product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product=>product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart=[...rest, exist]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)

    }

    return (
        <div className='container'>
            <div className='products'>
            {
                products.map(product=><Body key={product.id} handleAddtoClick={handleAddtoClick} product={product}></Body>)
            }
            </div>
            <div className='cart-container'>
                <Sidebar cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Shop;