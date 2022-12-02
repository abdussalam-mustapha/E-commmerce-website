import React from 'react'
import Discount from '../discount/Discount'
import Flashdeals from '../flashdeals/Flashdeals'
import Home from '../homepage/Home'
import NewArrivals from '../newarrivals/NewArrivals'
import TopCategory from '../top/TopCategory'
import Announcements from '../announcements/Announcements'
import Shop from "../shop/Shop"
import Wrapper from '../wrapper/Wrapper'

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <>
       <Home cartItem={cartItem}/>
       <Flashdeals productItems={productItems} addToCart={addToCart}/>
       <TopCategory />
       <NewArrivals />
       <Discount />
       <Shop shopItems={shopItems} addToCart={addToCart}/>
       <Announcements />
       <Wrapper />
    </>
  )
}

export default Pages