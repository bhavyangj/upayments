import React from 'react'
import style from '../../Pages/HomePage/Home.module.css'

export const Header = () => {
    return (
        <header>
            <div>Upayment Store</div>
            <button className={style.register}>Register</button>
        </header>
    )
}
