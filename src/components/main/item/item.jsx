import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    const discount =
        producto.precio - (producto.precio * producto.descuento) / 100;
    return (
        <div className="item">
            <img src={producto.img} width="200px" alt={producto.titulo} /> 
            <article className="info">
                <h2>{producto.titulo}</h2>
                <h4 className="descuento">{producto.descuento}% off</h4>
                <div className="infoPrecio">
                    <h3>${discount}.-</h3>
                    <h5>${producto.precio}.-</h5>
                </div>
                <Link className="detalle" to={`/detail/${producto.id}`}>Ver detalle</Link>
            </article>
        </div>
    );
};

export default Item;

//pasar a CSS linea 9