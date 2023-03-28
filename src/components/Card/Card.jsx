import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Shop from '../Shop/Shop'
import './Card.css'
const Card = () => {
    const [cards, setCards] = useState([])
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    useEffect(()=>{
        const  storedCart = getShoppingCart()
        const saveCart = []
        for(const id in storedCart){
            const addedProducts = cards.find(card=>card.id===id)
            if(addedProducts){
const quantity = storedCart[id]
addedProducts.quantity= quantity;
saveCart.push(addedProducts)
            }
        }
        setCart(saveCart)
    },[cards])

    const handleCart =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='card-container'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 '>
               
            {cards.map(card=><Shop card={card} handleCart={handleCart} key={card.id}></Shop>)}
            </div>
            <div>
<Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Card;