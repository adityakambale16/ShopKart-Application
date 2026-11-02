import React from 'react'
import lap from '../assets/lap.png'
import { Link } from 'react-router-dom'
import AboutBrand from '../components/AboutBrand'
import brands from '../data/brands'

const About = () => {
    return (
        <section className='about-sec'>
            <div className='about-container'>
                <h4>About Us</h4>
                <h2>Making Shopping <span>Simpler, Better, Together</span></h2>
                <p>At Shopkart, we believe shopping shouldd be easy, enjoyable and accessible
                    for everyone. We bring you a wide range of quality products at great proces, all in one place
                </p>
                <div>
                    <Link to='/product' className='btn btn-primary'>Explore Products</Link>
                </div>
            </div>

            <div className='about-app'>
                <div>
                    <i class="fa-solid fa-users-line"></i>
                    <h4>1M+</h4>
                    <p>Happy Customers</p>
                </div>

                <div>
                    <i class="fa-solid fa-clapperboard"></i>
                    <h4>50k+</h4>
                    <p>Products</p>
                </div>

                <div>
                    <i class="fa-solid fa-truck"></i>
                    <h4>All India</h4>
                    <p>Fast Delivery</p>
                </div>

                <div>
                    <i class="fa-solid fa-shield-halved"></i>
                    <h4>100%</h4>
                    <p>Secure Shopping</p>
                </div>
            </div>

            <div className='about-des'>
                <div>
                    <img src={lap} alt="image not found" />
                </div>

                <div>
                    <p>Our Story</p>
                    <h3>A Platform Built for Everyone</h3>
                    <p>Shopkart has satrted with simple idea - to make online shopping reliable, affordable and convenient for everyone. What began as a small project
                        has now grown into platform trusted by thousands of customers acress india.
                        we are a team of passionate individuals who love technology and believe in creationg a better shopping experience for our customers every day.
                    </p>
                </div>
            </div>

            <div className='about-prod'>
                <h3>Trusted Brands</h3>
                <p className='about-prod-intro'>Shop your favourites from brands you know and love.</p>
                <div className='about-brand-list' aria-label='Trusted brands' tabIndex='0'>
                    {brands.map(brnd => (
                        <AboutBrand
                            key={brnd.id}
                            name={brnd.name}
                            image={brnd.image}
                        />
                    ))}
                </div>
            </div>

            <div className='about-exp'> 
                <h3>Be a part of our journey</h3>
                <p>Explore thousands of products and experience a smarter way to shop</p>
                <Link to={'/product'}>Shop Now</Link>
            </div>
        </section>
    )
}

export default About
