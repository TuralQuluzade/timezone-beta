import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Shop from '../pages/Shop'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>} >
            <Route path='/' element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router