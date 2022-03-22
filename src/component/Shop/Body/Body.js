import React from 'react';
import './Body.css'
const Body = (props) => {
    const {name , img , price, ratings, seller}= props.product;
    
    return (
        <div className='product'>
            <div>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p> <small>Manufacturer: {seller}</small></p>
            <p> <small>Rating: {ratings} star</small></p>
            </div>
            </div>
            <button onClick={()=>props.handleAddtoClick(props.product)} className='btn-add'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Body;