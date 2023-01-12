import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/itemDetail';
import { products } from '../../products/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const valor = useParams();
    console.log(valor);

    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const prodEncontrado = products.find((prod) => prod.id === 1
                );
                setTimeout(() => {
                    res(prodEncontrado);
                }, 1000);
            });
        };

        getProduct()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;