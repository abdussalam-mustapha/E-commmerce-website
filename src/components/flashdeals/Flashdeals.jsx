import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import Flashcard from './Flashcard'

const Flashdeals = ({productItems, addToCart}) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
           <div className="heading f_flex">
              <GiHamburgerMenu className='i'/>
              <h1>Flash Deals</h1>
           </div>
           <Flashcard productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
    </>
  )
}

export default Flashdeals
