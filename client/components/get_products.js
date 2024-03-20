import React, { useState, useEffect } from 'react';

function ProductList() {
    const [ products, setProducts ] = useState([])
    useEffect(()=> {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
            console.log(products);
        })
        .catch(error => {
            console.error('Error fetching products: ', error);
        })
    },[])

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image}/>
                        Price: ${product.price}
                        Category: {product.category}
                        {}</li>
                ))}
            </ul>
        </div>
    )
}