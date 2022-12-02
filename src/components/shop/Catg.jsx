import React from 'react'
import img from "../../assets/r.png"

import "./style.css"

const Catg = () => {


    const data = [
        {
            cateImg: img,
            cateName: "apple"
        },
        {
            cateImg: img,
            cateName: "apple"
        },
        {
            cateImg: img,
            cateName: "apple"
        },
        {
            cateImg: img,
            cateName: "apple"
        },
        {
            cateImg: img,
            cateName: "apple"
        },
        {
            cateImg: img,
            cateName: "apple"
        },
        {
            cateImg: img,
            cateName: "apple"
        },
    ]

    return (
        <>
             <div className="category">
                <div className="chead d_flex">
                    <h1>Brands</h1>
                    <h1>Shops</h1>
                </div>
                {
                    data.map((value, index) => {
                        return (
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt='' />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
                <div className="box box2">
                    <button>View all Brands</button>
                </div>
             </div>
        </>
    )
}

export default Catg
