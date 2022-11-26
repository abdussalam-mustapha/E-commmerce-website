import React from 'react'
import { GiBorderedShield } from 'react-icons/gi'
import { GrCaretNext } from 'react-icons/gr'

const TopCategory = () => {
  return (
    <>
      <section className="topCategory background">
        <div className="container">
            <div className="heading d_flex">
                <div className="heading-left row f_flex">
                    <GiBorderedShield className='i-4'/>
                    <h2>Top Categories</h2>
                </div>
                <div className="heading-right row">
                    <span>View all</span>
                    <GrCaretNext className='i-5'/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default TopCategory