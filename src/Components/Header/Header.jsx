import React from 'react'
import { Link } from 'react-router-dom'
import '../../Pages/HomePage/Home.css'

export const Header = () => {
    return (
        <header>
            <div>Upayment Store</div>
            <Link className="register" to="/">Register</Link>
        </header>
    )
}
