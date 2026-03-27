import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../component/Product'
import WithoutFooterLayout from './WithoutFooterLayout'
import SingleProduct from '../pages/SingleProduct'
import Blog from '../pages/Blog'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Contact from '../pages/Contact'

const AllRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <Layout>
                            <Home />
                        </Layout>
                    }>
                    </Route>
                    
                    <Route path='/about' element={
                        <Layout>
                            <About />
                        </Layout>}>
                    </Route>
                    <Route path='/product' element={
                        <Layout>
                            <Product />
                        </Layout>}>
                    </Route>
                    <Route path='/product/:id' element={
                        <WithoutFooterLayout>
                            <SingleProduct />
                        </WithoutFooterLayout>}>
                    </Route>
                    <Route path='/blog' element={
                        <Layout>
                            <Blog />
                        </Layout>}>
                    </Route>



                    <Route path='/contact' element={
                        <WithoutFooterLayout>
                            <Contact />
                        </WithoutFooterLayout>}>
                    </Route>

                    
                    <Route path='/register' element={
                        <WithoutFooterLayout>
                            <Register />
                        </WithoutFooterLayout>}>
                    </Route>


                    <Route path='/login' element={
                        <WithoutFooterLayout>
                            <Login />
                        </WithoutFooterLayout>}>
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AllRoutes