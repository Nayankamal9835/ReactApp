import React from 'react'
import Arival from '../component/Arival'

const Contact = () => {
  return (
    <>
    <div className='about'>
      <h1>Contact us</h1>
    </div>
      <form className='control mt-5'>
        <input type='text' className='contact-input p-2' placeholder='Enter your full name'/><br/><br/>
        <input type='email' className='contact-input p-2' placeholder='Enter your mail'/><br/><br/>
        <input type='text' className='contact-input p-2' placeholder='Enter Subject'/><br/><br/>
        <textarea className='contact-input' rows="5" cols="50" placeholder='Enter your message' style={{ padding: "5px 5px" }}></textarea><br/><br/>
        <button type='submit' className='btn btn-primary ps-5 pe-5 mb-5 button'>Submit</button>
      </form>
    <Arival/>
    </>
  )
}

export default Contact