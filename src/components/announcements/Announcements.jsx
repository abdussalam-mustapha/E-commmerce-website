import React from 'react'
import img from "../../assets/r.png"

const announcements = () => {

  const mystyle = {
    width: "30%",
    height: "340px"
  }


  const mystyle2 = {
    width: "68%",
    height: "340px"
  }

  return (
    <>
      <div className="announcements background">
        <div className="container">
            <div className="img" style={{mystyle}}>
                <img src={img} alt="" width="100" height="100"/>
            </div>
            <div className="img" style={{mystyle2}} >
                <img src={img} alt="" width="100" height="100"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default announcements
