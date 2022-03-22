import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    const {name , img , price, ratings, seller}= props.product;
    return (
        <div className='sidebar'>
            <h1>sidebar</h1>
            <p>Selected Items: {props.product.length}</p>
        </div>
    );
};

export default Sidebar;