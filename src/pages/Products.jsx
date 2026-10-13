import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='card-prod'>
            {products.map(prod => (
                <Product
                    title={prod.title}
                    price={prod.price}
                    category={prod.category}
                    image={prod.image}
                />              
            ))}
        </div>
    )
}

export default Products
