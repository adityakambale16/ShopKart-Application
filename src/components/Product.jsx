import { Link } from "react-router-dom"

const Product = ({ title, image, price, category }) => {
    return (
        <div class="card" style={{  width: '500px'}}>
            <img class="card-img-top" src={image} alt="Card image" />
            <div class="card-body">
                <h4 class="card-title">{title}</h4>
                <h4 class="card-title">$ {price}</h4>
                <p class="card-text">{category}</p>
                <Link to='/cart/' className="btn btn-primary">Add to cart</Link>
            </div>
        </div>
    )
} 

export default Product