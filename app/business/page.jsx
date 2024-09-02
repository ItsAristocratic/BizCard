'use client';
import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import'./page.css'

const businessCreate = () => {
    const [businessName, setBusinessName] = useState('')
    const [businessUserEmail, setBusinessUserEmail] = useState('')
    const [businessUserPassword, setBusinessUserPassword] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [businessProcess, setBusinessProcess] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.js')
    })
    const handleSubmit = async (event) => {
      event.preventDefault()
      console.log(businessUserEmail, businessUserPassword, businessName, ownerName, address, phone, businessProcess)
      
      let result = await fetch ('/api/projects', {
        method:"POST",
        headers: {
          "Content-Type": "application/json" // Specify the content type
        },
        body:JSON.stringify({
          businessEmail:businessUserEmail, businessPassword:businessUserPassword,
          businessName:businessName,
          businessUsername:ownerName,
          aboutBusiness:businessProcess,
          phoneNumber:phone,
          address:address,})
      })
      result = await result.json();
      console.log(result)
      if (result.success) {
        alert("created")
      }
    }
  return (
    <div className='formPage'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setBusinessUserEmail(e.target.value)} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setBusinessUserPassword(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="inputBusinessName" className="form-label" >Business Name</label>
        <input type="text" className="form-control" id="inputBusinessName"  onChange={(e) => setBusinessName(e.target.value)} aria-describedby="businessNameHelp" />
        <div id="businessNameHelp" className="form-text">This name will be shown to everyone</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleOwnerName" className="form-label">Owner Name</label>
        <input type="text" className="form-control" id="exampleOwnerName" onChange={(e) => setOwnerName(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleBusinessProcess" className="form-label">Tell me what your business is about</label>
        <input type="text" className="form-control" id="exampleBusinessProcess" onChange={(e) => setBusinessProcess(e.target.value)}/>
        <div id="businessProcessHelp" className="form-text">This will be shown on your page. So explain in simple words.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleBusinessPhoneNo" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="exampleBusinessPhoneNo" onChange={(e) => setPhone(e.target.value)}/>
        <div id="businessPhoneNumber" className="form-text">This will be shown on your page</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleBusinessAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="exampleBusinessAddress" onChange={(e) => setAddress(e.target.value)}/>
        <div id="businessPhoneNumber" className="form-text">This will be shown on your page</div>
      </div>

      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default businessCreate
