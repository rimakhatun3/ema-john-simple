import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Shop = (props) => {
    // console.log(props)
    const {img,price,name,category,rating,seller} =props.card
    const handleCart = props.handleCart;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl gap-5">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes"  className="rounded-xl " />
  </figure>
  <div className="card-body items-left text-left">
    <h2 className="card-title text-lg text-left  font-semibold">{name}</h2>
    <p className='text-lg  text-left  font-semibold mb-5'>${price}</p>
    <p>{seller}</p>
    <p >{category}</p>
     <button onClick={()=>handleCart(props.card)}  className='btn btn-error px-28 mt-5 absolute bottom-0 left-0 inline '>
        Add to Cart<FontAwesomeIcon  icon={faShoppingCart} />
        </button>
  </div>
</div>
        </div>
    );
};

export default Shop;
