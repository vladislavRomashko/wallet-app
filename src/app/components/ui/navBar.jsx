import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                    Main
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/operations">
                    All Operations
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    LogIn
                </Link>
            </li>
        </ul>
    )
}

export default NavBar
