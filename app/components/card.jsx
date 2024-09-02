'use client';
import React, { useEffect } from 'react'
import './pages.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';



const Card = ({businessName, email, password, ownerName, businessAbout, businessAddress, businessPhone}) => {
  useEffect(() => {
   const bootstrap = require('bootstrap/dist/js/bootstrap.js')
  })
 console.log(businessName, email, password, ownerName, businessAbout, businessAddress, businessPhone)


 const formatBusinessName = (name) => {
  return name ? name.replace(/\s+/g, '_') : 'default';
};

// Format the businessName for use in the URL
const formattedBusinessName = formatBusinessName(businessName);
    //<img src="" className="card-img-top" alt="..." />

  return (
    <div className='cards'>
      <div className="card" style={{width: '18rem'}}>
        <div className='default'>BizCard <p>Make It Online</p></div>
        
        <div className="card-body">
            <h5 className="card-title">{businessName || "no name"}</h5>
            <p className="card-text">{businessAbout || 'no about'}</p>
            <Link href={`http://localhost:3000/pages/${formattedBusinessName}`} className="btn btn-primary">Review</Link>
        </div>
        </div>
    </div>
  )
}

export default Card
