import React from 'react'
import { NavLink } from 'react-router-dom'

const Arival = () => {
  return (
    <>
    <div className='arival'>
        <div className='text'>
            <h1 className='new'>#New Arival</h1>
            <p className='home-text'>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque<br/> animi sint unde quis reprehenderit, et, perspiciatis, debitis<br/> totam est deserunt eius officiis ipsum ducimus ad labore modi<br/> voluptatibus accusantium sapiente nam! Quaerat.</p>
            <NavLink to='/product'><button className='btn button ps-5 pe-5 pt-2 pb-2 mt-3'>Shop Now</button></NavLink>
        </div>
    </div>
    </>
  )
}

export default Arival