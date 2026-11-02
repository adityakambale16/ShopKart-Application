import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

const Products = () => {

    const [products, setProducts] = useState([])

    const [sortOrder, setSortOrder] = useState("")

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    useEffect(() => {}, []);

    const sortedProducts = [...products].sort((a, b) => {
        if(sortOrder === 'lowToHigh') return a.price - b.price;
        if(sortOrder === 'highToLow') return b.price - a.price;
        if(sortOrder === 'low-rating') return a.rating.rate - b.rating.rate;
        if(sortOrder === 'high-rating') return b.rating.rate - a.rating.rate;
        return 0;
    })

    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;

    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const previousPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    return (
        <div>
            <div className="products-heading">
                <h2>Discover Our Products</h2>
                <p>Explore our collection and find something you love.</p>
            </div>

            <div className='sort-prod'>
                <h3 className='sord-head'>Products</h3>
                <label>Sort by Price</label>
                <select value={sortOrder} onChange={(e) => {
                    setSortOrder(e.target.value);
                    setCurrentPage(1);
                }}>
                    <option value=''>Default</option>
                    <option value='lowToHigh'>Price: Low To high</option>
                    <option value='highToLow'>Price: High To Low</option>
                </select>

                <label>Sort by ratings</label>
                <select value={sortOrder} onChange={(e) => {
                    setSortOrder(e.target.value);
                    setCurrentPage(1);
                }}>
                    <option value=''>Default</option>
                    <option value='high-rating'>rating:high To Low</option>
                    <option value='low-rating'>rating:Low To High</option>
                </select>
            </div>

            <div className='card-prod'>
                {currentProducts.map(prod => (
                    <Product
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        price={prod.price}
                        category={prod.category}
                        image={prod.image}
                        rating={prod.rating.rate}
                    />
                ))}
            </div>

            <div className='pagination'> 
                <button
                    onClick={previousPage}
                    disabled={currentPage === 1}
                >
                    previous
                </button>
                <span>page {currentPage} of {totalPages}</span>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages || totalPages === 0}
                >
                    next
                </button>
            </div>
        </div>
    )
}

export default Products
