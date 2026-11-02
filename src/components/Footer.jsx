import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm();

    const formSubmit = () => {
        alert('You Successfully connected with us !!')
        reset();
    }

    return (
        <footer className="site-footer">
            <div className="container-fluid px-4">
                <div className='container-email'>
                    <div>
                        <h4>Never miss a closing bell</h4>
                        <p>Get ending-soon alerts and new listings in your inbox</p>
                    </div>
                    <input type='email' 
                        placeholder='Enter Email'
                        {...register("email", {
                            required: 'email is required',
                            pattern: {
                                value: /^[A-Za-z0-9]+@gmail\.com$/,
                                message: 'Gmail format is invalid'
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <button onClick={handleSubmit(formSubmit)}>
                        subscribe
                    </button>
                </div>
                <div className="footer-row d-flex justify-content-between align-items-center">

                    <div className="brand-block">
                        <p className="brand-title"><span className="ani">Shop</span><span className="vault">Kart</span></p>
                    </div>

                    <nav className="footer-nav d-flex">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/product'>Products</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <NavLink to='/cart'>Cart</NavLink>
                        <NavLink to='/about'>About US</NavLink>
                    </nav>

                    <div className="footer-actions d-flex align-items-center">
                        <div className="footer-socials d-flex">
                            <a href="#"><i className="fa-brands fa-discord"></i></a>
                            <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                        <span className="footer-copy ms-4">&copy; 2026 ShopKart. All rights reserved.</span>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
