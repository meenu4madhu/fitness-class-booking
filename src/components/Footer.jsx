import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
function Footer() {
  return (
    <>
    <div height={'250px'} className="row bg-warning text-dark">
      <div className="col-md-3 d-flex justify-content-center align-items-center flex-column ">
        <h1>Follow Us</h1>
        <div className='row m-4'>
        <FaInstagramSquare  className='hoverclass me-5 fs-3 col'/>
         <FaFacebookSquare className='hoverclass me-5 fs-3 col'/>
         <FaWhatsappSquare className='hoverclass fs-3 col'/>
         </div> 
      
      </div>
        
      <div className="col-md-3 p-5">
        <h1 className='my-3'>Address</h1>
        <p>Fit Pro Fitness Studio <br />123 Health Street, Kochi, Kerala, India</p>
      </div>
      <div className="col-md-3 p-5">
        <h1 className='my-3'>Support</h1>
        <p>Ph No : 3212421252 <br />Email Id : fitpro12@gmail.com</p>
      </div>
      <div className="col-md-3 p-5">
        <h1 className='my-3'>Our Services</h1>
        <p>Personal Training <br />Group Classes<br />Yoga & Pilates <br />Meditation & Mindfulness</p>
      </div>
      </div>
      </>
  )
}

export default Footer