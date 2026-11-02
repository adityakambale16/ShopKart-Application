import { useCart } from "./CartContext";

const Product = ({ id, title, image, price, category, rating }) => {
    const { addToCart } = useCart();

    const product = {
        id,
        title,
        image,
        price,
        category,
        rating
    }

    return (
        <div className="product-card">

            <div className="product-image-container">
                <img
                    className="product-image"
                    src={image}
                    alt={title}
                />
            </div>

            <div className="product-body">

                <span className="product-category">
                    {category}
                </span>

                <h3 className="product-title">
                    {title}
                </h3>

                <h4 className="product-price">
                    ${price}
                </h4>

                <p className="product-description">
                    Discover quality products at the best prices.
                </p>

                <h6>Product Ratings: {rating}</h6>

                <button onClick={() => addToCart(product)} to="/cart" className="add-to-cart-btn">
                    🛒 Add to Cart
                </button>

            </div>
        </div>
    );
};

export default Product;
