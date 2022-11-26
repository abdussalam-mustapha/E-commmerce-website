import React from 'react'
import Flashdeals from '../flashdeals/Flashdeals'
import Home from '../homepage/Home'
import TopCategory from '../top/TopCategory'

const Pages = ({productItems, cartItem, addToCart}) => {
  return (
    <>
       <Home cartItem={cartItem}/>
       <Flashdeals productItems={productItems} addToCart={addToCart}/>
       <TopCategory />
    </>
  )
}

export default Pages