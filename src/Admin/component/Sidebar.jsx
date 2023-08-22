import React, {  useContext, useEffect } from 'react'
import { FiHome } from 'react-icons/fi'
import { BiSolidCategory } from 'react-icons/bi'
import { TbBrandShopee } from 'react-icons/tb'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../Context/context'

export default function Sidebar() {

    const location = useLocation()
    const { state, dispatch } = useContext(GlobalContext)

    const NavItems = [
        {
            tab: "Home",
            url: "/",
            icon: <FiHome />
        },
        {
            tab: "Categories",
            url: "/category",
            icon: <BiSolidCategory/>
        },
        {
            tab: "Brands",
            url: "/brands",
            icon: <TbBrandShopee/>
        },
        {
            tab: "Products",
            url: "/products",
            icon: <MdOutlineProductionQuantityLimits />
        },
    ]


    return (
        <>

            <div className="bg-warning p-3 d-flex text-white justify-content-between align-items-center">
                <span>Rabbia Fareed</span>
                <button className="btn btn-outline-light bg-dark"   onClick={() => dispatch({ type: "USER_LOGOUT" })}>Logout</button>
            </div>


            <ul className="nav flex-column pt-3 ">
                {
                    NavItems.map((val, key) =>

                        <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
                            <Link className='nav-link d-flex align-items-center  gap-2' to={val.url}>
                                <span>{val.icon}</span>

                                <span>{val.tab}</span>
                            </Link>
                        </li>)
                }

            </ul>

        </>
    )
}