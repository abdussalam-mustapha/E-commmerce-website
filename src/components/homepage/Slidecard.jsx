import React from 'react'
import img2 from "../../assets/p.jpg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import "./Home.css"

const Slidecard = () => {

   
    const info = [
        {
            id: 1,
            title: "50% Off For Your First Shopping",
            desc: "Get the best clothing and accessories at any of ou online store andd retail outlets across Nigeria",
            cover: img2
        },
        {
            id: 1,
            title: "50% Off For Your First Shopping",
            desc: "Get the best clothing and accessories at any of ou online store andd retail outlets across Nigeria",
            cover: img2
        },
    ];

    
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            appendDots: (dots) => {
                return <ul style={{margin: "0px"}}>{dots}</ul>
            }
        };
   



    return (
        <>
          <Slider {...settings}>
            {
                info.map((value, index) => {
                    return (
                        <div className="box d_flex top" key={index}>
                            <div className="left">
                                <h1>{value.title}</h1>
                                <p>{value.desc}</p>
                                <button className="btn-primary">Visit Collections</button>
                            </div>
                            <div className="right">
                                <img src={value.cover} alt="" />
                            </div>
                        </div>
                    )
                })
            }
         </Slider>
        </>
    )
}

export default Slidecard