import React from "react";
import Cart from '../../../assets/img/cart-alt-solid-24.png'
import './cartWidget.css'

export default function CartWidget() {
    return(
        <div>
            <img className='cart' src={Cart} alt='Carrito'></img>
        </div>
    );
}