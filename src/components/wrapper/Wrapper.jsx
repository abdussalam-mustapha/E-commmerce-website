import React from 'react'
import img from "../../assets/logo.jpeg"
import "./style.css"

const Wrapper = () => {

    const data = [
        {
            cover: img,
            title: "latest announcements",
            desc: "Get the latest announcements at your fingertips"
        },
        {
            cover: img,
            title: "latest announcements",
            desc: "Get the latest announcements at your fingertips"
        },
        {
            cover: img,
            title: "latest announcements",
            desc: "Get the latest announcements at your fingertips"
        },
        {
            cover: img,
            title: "latest announcements",
            desc: "Get the latest announcements at your fingertips"
        },
    ]


    return (
        <>
            <section className="wrapper background">
                <div className="container grid2">
                    {
                        data.map((val, index) => {
                            return (
                                <>
                                    <div className="product" key={index}>
                                        <div className="img icon-circle">
                                            <img src={val.cover} alt="" />
                                        </div>
                                        <h3>{val.title}</h3>
                                        <p>{val.desc}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Wrapper
