import React from 'react';

const cccc = () => {
    return (
        <div>
            <img className='py-5 px-5  rounded-xl ' src={img} alt="" />
            <div className='text-left px-5'>
            <h1 className='text-lg font-bold'>{category}</h1>
            <p className='mb-5 text-lg font-bold'>${price}</p>
            <p >{name}</p>
            <p>{rating}</p>
            </div>
           <div onClick={()=>handleCart(props.card)} className='absolute bottom-0 left-0'> <button className='btn btn-error px-28 mt-5 '>add to cart</button></div>
        </div>
    );
};

export default cccc;