import React from 'react'
import img from "../../assets/logo.jpeg"

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
        <div>
             <div className="category">
                <div className="c_head d_flex">
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
        </div>
    )
}

export default Catg
