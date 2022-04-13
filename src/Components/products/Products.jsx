import React from 'react'

import style from "./Products.module.css"

export const Product = (props) => {

    return (
        <div className={style.product}>
            <div className={style.product_image}>
                <img src={props.item.avatar} alt="" />
            </div>
            <div className={style.product_name}>{props.item.name}</div>
            <div className={style.product_price}>{`$ ${props.item.price}`}</div>
        </div>
    )
}
