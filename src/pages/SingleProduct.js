import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const [product, setProduct] = useState('')

    let { id } = useParams()

    const getSingleData = async () => {
        try {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`)
            const res = await data.json()
            console.log(res)
            setProduct(res)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getSingleData()
    }, [])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2 single-product '>
                        <div className='card '>
                            <div className='card-body card-single-product'>
                                <div className='d-flex '>
                                    <div>
                                        <img src={product.image} alt='' height='300px' width='300px' className='img-single-product' />
                                    </div>
                                    <div className='ms-5'>
                                        <h3 className='description'>{product.title}</h3>
                                        <h6 className='title'>{product.description}</h6>
                                        <h5 className='description'>Category:{product.category}</h5>
                                        <h5 className='description'>Price: {product.price}</h5>
                                        <div className='single-button'>
                                            <button className='btn btn-primary m-2 buy-now'>Buy Now</button>
                                            <button className='btn btn-warning m-2 buy-now'>Add to Cart</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct