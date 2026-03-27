import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaShopify } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";


const Shoping = () => {
  return (
    <>
    <h1 className='text-center mt-5 heading'>Why Shop with us</h1>
    <hr className='hr'></hr>
    <div className='container my-5'>
        <div className='row rows '>
            <div className='col-md-4 column'>
                <div className='card p-5 cards'>
                    <TbTruckDelivery className='icons' />
                    <h4>Fast Delivery</h4>
                    <p>variations of passages of Lorem Ipsum available</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card p-5 cards'>
                    <FaShopify className='icons' />
                    <h4>Free Shipping</h4>
                    <p>variations of passages of Lorem Ipsum available</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card p-5 cards'>
                    <FaSquarePinterest className='icons' />
                    <h4>Best Quality</h4>
                    <p>variations of passages of Lorem Ipsum available</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shoping