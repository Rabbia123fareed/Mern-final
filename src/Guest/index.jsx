import React from 'react'
import GuestNav from './component/GuestNav'
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Brands from './pages/Brands';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Category from './pages/Category';

export default function Guest() {
    return (
        <>
      
        
            <GuestNav />
        
            {/* <Category/> */}
          
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brand" element={<Brands />} />
                <Route path="/category" element={<Category />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
       
        </>
    )
}