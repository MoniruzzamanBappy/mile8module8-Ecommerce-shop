import React from 'react';
import './Sidebar.css'
const Sidebar = (props) => {
    const {cart}= props;
    let total = 0;
    let quantity = 0
    let shipping = 0;
    let tax = 0;
    let gTotal = 0;
    for(const product of cart){
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping * product.quantity;
    }
    tax= ((total*15)/100).toFixed(2);
    gTotal += total + shipping + parseFloat(tax);
    return (
        <div className='sidebar'>
            <h4>Order Summary</h4>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${gTotal}</p>
            <div>
                <button>Clear Cart</button>
            </div>
            <div>
                <button>Review Order</button>
            </div>
        </div>
    );
};

export default Sidebar;