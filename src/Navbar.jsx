import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/contact'>Contact</Link>
                </li>
            </ul>

            <div className="container">
                <Outlet />
            </div>

        </>
    )
}
export default Navbar