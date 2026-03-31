import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            {/* Footer Top */}
            <div className="footer-top container mt-5 pt-5">
                <div className="row">

                    {/* Card 1: Brand & Contact */}
                    <div className="col-md-3 mb-4 d-flex flex-column align-items-center align-items-md-start">
                        <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start w-100">
                            <FaCartShopping className="fs-3 text-warning" />
                            <span className="fs-3 fw-bold">EthnicTrend</span>
                        </div>
                        <p className="mb-3 mt-2 text-center text-md-start"><strong>Address:</strong> Sudama Nagar, Indore, 452009</p>
                        <p className="mb-3 text-center text-md-start"><strong>Telephone:</strong> +9835896015</p>
                        <p className="mb-1 text-center text-md-start"><strong>Email:</strong> 11nayan11kamal11@gmail.com</p>
                    </div>


                    {/* Card 2: Menu */}
                    <div className="col-md-3 mb-4 footer-card">
                        <h5 className="fw-bold mb-3">MENU</h5>
                        <div className="d-flex flex-column gap-2">
                            <Link to="/" className="text-dark text-decoration-none">Home</Link>
                            <Link to="/about" className="text-dark text-decoration-none">About</Link>
                            <Link to="/contact" className="text-dark text-decoration-none">Contact</Link>
                            <Link to="/blog" className="text-dark text-decoration-none">Blog</Link>
                            <Link to="/product" className="text-dark text-decoration-none">Product</Link>
                        </div>
                    </div>

                    {/* Card 3: Account */}
                    <div className="col-md-3 mb-4 footer-card">
                        <h5 className="fw-bold mb-3">ACCOUNT</h5>
                        <div className="d-flex flex-column gap-2">
                            <Link to="/" className="text-dark text-decoration-none">Account</Link>
                            <Link to="/checkout" className="text-dark text-decoration-none">Checkout</Link>
                            <Link to="/login" className="text-dark text-decoration-none">Login</Link>
                            <Link to="/register" className="text-dark text-decoration-none">Register</Link>
                            <Link to="/product" className="text-dark text-decoration-none">Shopping</Link>
                        </div>
                    </div>

                    {/* Card 4: Newsletter */}
                    <div className="col-md-3 mb-4 footer-card">
                        <h5 className="fw-bold mb-3">NEWSLETTER</h5>
                        <p className="mb-3">Subscribe to our newsletter and get daily updates.</p>
                        <div className="input-group">
                            <input
                                type="email"
                                className="form-control rounded-start p-2"
                                placeholder="Enter your email..."
                                style={{boxShadow:'none', borderColor:'red'}}
                            />
                            <button className="btn btn-primary rounded-end button">Subscribe</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom text-center p-4 bg-dark text-white mt-5">
                Designed By
                <a href ="https://github.com/Nayankamal9835" className="text-decoration-none ms-1">
                    <span className="fw-bold text-danger ">Nayan Kamal</span>
                </a>
            </div>
        </>
    );
};

export default Footer;
