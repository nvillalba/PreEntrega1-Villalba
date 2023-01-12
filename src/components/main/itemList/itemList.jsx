import React from 'react';
// import './itemList.css';
import Item from '../item/item';

const ItemList = ({ items }) => {
    return (
        <div className='itemList'>
            {items.map((producto) => {
                return <Item producto={producto} key={producto.id} />
            })}
        </div>
    );
};

export default ItemList;