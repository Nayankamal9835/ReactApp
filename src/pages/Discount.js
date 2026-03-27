import React from 'react'

const Discount = () => {
    return (
        <>
            <div className='discount mt-5 '>
                <form>
                    <h1 className='heading-discount'>Subscribe To Get Discount Offers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor consectetur adipiscing elit</p>
                    <input type='text' className='input mt-3 mb-3' placeholder='Enter your email' /><br></br><br></br>
                    <button type='submit' className=' button-1 ps-5 pe-5'>SUBSCRIBE</button>
                </form>
            </div>
        </>
    )
}

export default Discount