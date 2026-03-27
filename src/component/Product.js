import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Product = () => {
  const [product, setProduct] = useState([])

  const navigate = useNavigate()

  const getData = async () => {
    try {
      const data = await fetch('https://fakestoreapi.com/products/')
      const res = await data.json()
      console.log(res)
      setProduct(res)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    {/* <div className='about'>
      <h1>Product Grid</h1>
    </div> */}
      <div className='container'>
        <h1 className='text-center mt-5 mb-5' style={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold" }}>All <span style={{ color: 'red' }}>Products</span></h1>
        <div className='row'>
          {
            product.map((value) => {
              return <div className='col-md-3'>
                <div className='card m-2 mb-4 box-shadow'>
                  <div className='card-body'>
                    <img src={value.image} height="180px" width="100%"/>
                    <h4>{value.category}</h4>
                    <h5>$ {value.price}</h5>
                    <button className='btn btn-danger' onClick={() => navigate(`/product/${value.id}`)}>See More</button>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div className='text-center mt-3'>
        <NavLink to=''><button className='button-1 text-center view'>View All Product</button></NavLink>
      </div>
    </>
  )
}
export default Product