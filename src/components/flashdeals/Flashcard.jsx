import React from 'react'
import Slider from 'react-slick'
import { GrSquare } from "react-icons/gr"
import { GrSign } from "react-icons/gr"
import { GrChapterNext } from "react-icons/gr"
import { GrChapterPrevious } from "react-icons/gr"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react'


const NextArrow = (props) => {
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <GrChapterNext className='i-3'/>
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <GrChapterPrevious className='i-3'/>
            </button>
        </div>
    )
}


const Flashcard = ({ productItems, addToCart }) => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        SlidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        <>

            <Slider {...settings}>

                {
                    productItems.map((productItems) => {
                        return (
                            <div className="box">
                                <div className="product mtop">
                                    <div className="img">
                                        <span className="discount">{productItems.discount}% Off</span>
                                        <img src={productItems.cover} alt="" />
                                        <div className="product-like">
                                            <label>{count}</label> <br />
                                            <GrSquare className='i-2' onClick={increment}/>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h3>{productItems.name}</h3>
                                        <div className="rate">
                                            <GrSign className='i-1'/>
                                            <GrSign className='i-1'/>
                                            <GrSign className='i-1'/>
                                            <GrSign className='i-1'/>
                                            <GrSign className='i-1'/>
                                        </div>
                                        <div className="price">
                                            <h4>${productItems.price}.00</h4>
                                            <button onClick={() => addToCart(productItems)}>
                                                <GiHamburgerMenu />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>

        </>
    )
}

export default Flashcard
