import React, {useState} from 'react'
import { Link } from "react-router-dom"

import { ImCross } from "react-icons/im"
import { GiHamburgerMenu } from "react-icons/gi"

  

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)


  return (
    <>
      <header>
        <div className="container d_flex">
            <div className="categories d_flex">
                <span className='fa-solid fa-border-all'></span>
                <h4>Categories <i className="fa fa-chevron-down"></i> </h4>
            </div>

            <div className="navlink">
                <ul className={mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pages">Pages</Link>
                    </li>
                    <li>
                        <Link to="/user">User Accounts</Link>
                    </li>
                    <li>
                        <Link to="/vendor">Vendor Accounts</Link>
                    </li>
                    <li>
                        <Link to="/track">Track Order</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>

                <button className="toggle" onClick={() => setMobileMenu(!mobileMenu)}>
                    {
                        mobileMenu ? <ImCross className='close home-btn'/> : <GiHamburgerMenu className='open'/>
                    }
                </button>
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
