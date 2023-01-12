import React, { useEffect, useState } from "react";
import { products } from "../../products/products";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/itemList";
import './itemListContainer.css';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState ([]);

    const { categoria } = useParams();

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === categoria);

        const prodListados = categoria ? prodFiltrados : products;
                setTimeout(() => {
                    res(prodListados)
                }, 1000);
            });
        };
    getProducts()
    .then ((res) => {
        setItems(res);
        })
        .catch((error) =>{
            console.log(error);
        });
    }, [categoria]);

    return(
        <div className="contenedor">
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};
export default ItemListContainer;