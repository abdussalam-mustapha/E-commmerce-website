import React, {useState} from 'react'
import { GrSquare } from "react-icons/gr"
import { GrSign } from "react-icons/gr"
// import { GrChapterNext } from "react-icons/gr"
// import { GrChapterPrevious } from "react-icons/gr"
import { GiHamburgerMenu } from "react-icons/gi"

const ShopCart = ({shopItems, addToCart}) => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  // }

  return (
    <>
      {
        shopItems.map((shopItem) => {
          return (
              <div className="box">
                  <div className="product mtop">
                      <div className="img">
                          <span className="discount">{shopItem.discount}% Off</span>
                          <img src={shopItem.cover} alt="" />
                          <div className="product-like">
                              <label>{count}</label> <br />
                              <GrSquare className='i-2' onClick={increment}/>
                          </div>
                      </div>
                      <div className="product-details">
                          <h3>{shopItem.name}</h3>
                          <div className="rate">
                              <GrSign className='i-1'/>
                              <GrSign className='i-1'/>
                              <GrSign className='i-1'/>
                              <GrSign className='i-1'/>
                              <GrSign className='i-1'/>
                          </div>
                          <div className="price">
                              <h4>${shopItem.price}.00</h4>
                              <button onClick={() => addToCart(shopItem)}>
                                  <GiHamburgerMenu />
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          )
      })
      }
    </>
  )
}

export default ShopCart
