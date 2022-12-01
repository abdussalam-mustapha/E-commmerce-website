import React from 'react'
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import { GiBorderedShield } from 'react-icons/gi'
import { GrCaretNext } from 'react-icons/gr'

const Shop = ({ shopItems, addToCart }) => {
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Catg />

                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <GiBorderedShield className='i-4' />
                                <h2>Mobile Phones</h2>
                            </div>
                            <div className="heading-right row">
                                <span>View all</span>
                                <GrCaretNext className='i-5' />
                            </div>
                        </div>
                        <div className="product-content grid1">
                            <ShopCart shopItems={shopItems} addToCart={addToCart}/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop
