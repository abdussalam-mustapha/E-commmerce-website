import React from 'react'
import img from "../../assets/r.png"

const Categories = () => {

  const data = [
    {
        cateImg: img,
        catName: "aurelio"
    },
    {
        cateImg: img,
        catName: "aurelio"
    },
    {
        cateImg: img,
        catName: "aurelio"
    },
    {
        cateImg: img,
        catName: "aurelio"
    },
    {
        cateImg: img,
        catName: "aurelio"
    },
    {
        cateImg: img,
        catName: "aurelio"
    },
    {
        cateImg: img,
        catName: "aurelio"
    },
    {
        cateImg: img,
        catName: "aurelio"
    },
    {
        cateImg: img,
        catName: "aurelio"
    },
    {
        cateImg: img,
        catName: "aurelio"
    },
  ]

  return (
    <>
        <div className="category">
            {
                data.map((value, index) => {
                    return (
                        <div className="box f_flex" key={index}>
                             <img src={value.cateImg} alt="" />
                             <span>{value.catName}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Categories