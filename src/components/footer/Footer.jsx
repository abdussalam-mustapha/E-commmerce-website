import React from 'react'
import "./footer.css"
import img from "../../assets/r.png"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container grid2">
                    <div className="box">
                        <h1>ComBuy</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Dignissimos cum esse animi incidunt laboriosam aperiam consequuntur dolor quae numquam eligendi.
                        </p>
                        <div className="icon d_flex">
                            <div className="img d_flex">
                                <img src={img} alt="" />
                                <span>Google Play</span>
                            </div>
                            <div className="img d_flex">
                                <img src={img} alt="" />
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Care</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="box">

                        <h2>Customer Care</h2>
                        <ul>
                            <li>How to buy</li>
                            <li>Hlp Center</li>
                            <li>Track Your Order</li>
                            <li>Corporate and Bulk Purchasing</li>
                            <li>Returns and Refunds</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>22/24 Adeniyi Street Baale Bus stop Meiran, Lagos</li>
                            <li>Mail: mustaphaakanbi813@gmail.com</li>
                            <li>Phone: +2348021293940</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer