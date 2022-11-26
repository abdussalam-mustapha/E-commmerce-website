import React from 'react'
import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"


const Search = ({cartItem}) => {

  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })


  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <h2>ComBuy</h2>
          </div>
          <div className="search-box f_flex">
          <ImSearch className="icons icon_circle" />
            <input type="text" placeholder='Search...' />
            <span>All Categories</span>
          </div>
          <div className="icon f_flex width">
            <i className="fa fa-user icon_circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon_circle"></i>
                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
