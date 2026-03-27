import React from 'react'
// import shop from './../images/slider-bg.jpg'
import Shoping from '../component/Shoping'
import Arival from '../component/Arival'
import Discount from './Discount'
import Product from '../component/Product'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className='hero'>
        
          <h1 className='head'>Sale 20% Off <br /> <span className='On'>On Everything</span> </h1><br />
          <p className='home-text'>Explicabo esse amet tempora quibusdam laudantium,<br /> laborum eaque magnam fugiat hic? Esse dicta <br /> aliquid error repudiandae earum suscipit fugiat molestias,<br /> veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
          <NavLink to='/product'><button className=' button ps-5 pe-5 pt-2 pb-2 mt-4 '>Shop Now</button></NavLink>
        
      </div>
      <Shoping />
      <Arival />
      <Product />
      <Discount />
    </>
  )
}

export default Home