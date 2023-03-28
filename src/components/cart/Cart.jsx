import React from 'react';

const Cart = (props) => {
    const {cart} = props
    // console.log(props);
    
    let total= 0;
    let totalShiping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity===0){
            product.quantity=1
        }
        quantity = quantity + product.quantity;
        total = total + product.price*product.quantity;
        totalShiping = totalShiping + product.shipping;
        
    }
    const tax = total *7/100;
    const gradnTotal =total+totalShiping+tax;
    return (
        <div className='bg-orange-300 ml-5 p-5'>
            <h1 className='text-2xl font-bold mt-5 text-left'>Order Sumarry</h1>
<div className='text-left mt-5'>
<p>Selected Items:{quantity}</p>
<p>Total Price: ${total}</p>
<p>Total Shipping Charge: ${totalShiping}</p>
<p>Tax: ${tax.toFixed(2)}</p>
<h3>Grand Total: ${gradnTotal.toFixed(2)}</h3>
</div>
        </div>
    );
};

export default Cart;