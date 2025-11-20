import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";


function Review() {
      
  
  return (
      
   <>
   <div id='reviews'
      style={{
        width: "98%",
        margin: "auto",
        padding: "25px",
        borderRadius: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        textAlign: "center",
        background: "#d6cfc8ff"
      }}
    className='my-5'>
      {/* Heading */}
      <h2 style={{ marginBottom: "15px", fontSize: "22px" }}>
        Overall Rating
      </h2>

      {/* Rating Number */}
      <h1 style={{ fontSize: "55px", margin: "0", color: "#e55d02ff" }}>
        4.5
      </h1>

      {/* Stars */}
      <div style={{ fontSize: "40px", color: "#ef5f0bff", marginTop: "5px" }}>
        ★★★★☆
      </div>

      {/* Sub Text */}
      <p style={{ marginTop: "10px", fontSize: "16px", color: "#666" }}>
        Based on 120 reviews
      </p>
    </div>
  <h1 style={{textShadow: "2px 2px 4px rgba(11, 11, 11, 1)" }} className='text-center text-light '>Why People Love Training With Us <br />
  </h1>
  <h3 className='text-center'><span   className='text-warning text-center fw-light'>Real Experiences ... Real Results</span></h3>
  <div className="row">
     <div className='bg-dark shadow-dark w-25 border rounded p-3 ms-5 mt-5 p-4 col-md-3'>
<MdOutlineAccountCircle style={{color:'white', fontSize:'50px'}}/>
 <h3 className='fw-bold text-warning'>name</h3>
    <p className='fw-light text-light'>comment</p>
        <div style={{ fontSize: "30px", color: "#f5a623" }}>
            ★
        </div>
        
        

  </div>
 
  
  </div>
   <button className='btn btn-warning text-dark w-5 ms-5 mt-3'>Share Your Experience</button>
 
  
    </>
  
  )
}

export default Review