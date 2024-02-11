import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import IMG from "./Free_Sample_By_Wix.jpg"
const NavBar = () => {
    return (
        <>
            <nav className="navContainer">
                <aside className='logoblock'>
                    <h1><img src={IMG} alt="Sample" /></h1>
                </aside>
                <aside className='nav-link'>
                    <ul>
                        <NavLink to='/'>
                            <li>
                                <FaHome className='icon' />
                                <span>Home</span>
                            </li>
                        </NavLink>
                        <NavLink to='/viewall'>
                            <li>
                                <CiViewList className='icon' />
                                <span>View</span>
                            </li>
                        </NavLink>
                    </ul>
                </aside>
            </nav>
        </>
    )
}

export default NavBar
// apply logo and icon
