import React from 'react'
import Discount from '../discount/Discount'
import Flashdeals from '../flashdeals/Flashdeals'
import Home from '../homepage/Home'
import NewArrivals from '../newarrivals/NewArrivals'
import TopCategory from '../top/TopCategory'
import Shop from "../shop/Shop"

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <>
       <Home cartItem={cartItem}/>
       <Flashdeals productItems={productItems} addToCart={addToCart}/>
       <TopCategory />
       <NewArrivals />
       <Discount />
       <Shop shopItems={shopItems} addToCart={addToCart}/>
    </>
  )
}

export default Pages