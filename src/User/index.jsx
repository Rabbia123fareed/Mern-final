import React from 'react'
import UserNavbar from './component/UserNavbar'
import Brands from './pages/Brands'
import Categorys from './pages/Categorys'
import Home from './pages/Home'
import Products from './pages/Products'
import Productpage from './pages/Productpage'
import { Navigate, Route, Routes } from "react-router-dom";


export default function User() {

    return (

        <>
            <UserNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brand" element={<Brands />} />
                <Route path="/category" element={<Categorys />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/productpage" element={<Productpage />} />
            </Routes>

        </>
    )
}
