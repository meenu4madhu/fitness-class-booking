import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'75vh'}} className='d-flex justify-content-center align-items-center my-5 p-5  flex-column'>
    <img width={'25%'} src="https://assets.dochipo.com/editor/animations/404-error/45944626-6789-4eb1-8c49-28696d67a690.gif" alt="page not found" />
 
    <h4>Page Not Found</h4>
    <Link className='btn btn-success' to={'/'}>Go to Home</Link>
    </div>
  )
}

export default Pnf