import React from 'react'
import Dcard from "./Dcard"
import { GiBorderedShield } from 'react-icons/gi'
import { GrCaretNext } from 'react-icons/gr'

const Discount = () => {
  return (
    <>
      <section className="disocunt background newarrivals">
        <div className="container">
        <div className="heading d_flex">
                <div className="heading-left row f_flex">
                    <GiBorderedShield className='i-4'/>
                    <h2>Top Discount</h2>
                </div>
                <div className="heading-right row">
                    <span>View all</span>
                    <GrCaretNext className='i-5'/>
                </div>
            </div>
            <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
