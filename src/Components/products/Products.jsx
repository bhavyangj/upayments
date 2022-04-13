import React from 'react'
import { Button, Card } from 'react-bootstrap'

import style from "./Products.module.css"

export const Product = (props) => {

    return (
        // <div className={style.product}>
        //     <div className={style.product_image}>
        //         <img src={props.item.avatar} alt="" />
        //     </div>
        //     <div className={style.product_name}>{props.item.name}</div>
        //     <div className={style.product_price}>{`$ ${props.item.price}`}</div>
        // </div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.item.avatar} />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Button variant="primary">{`$ ${props.item.price}`}</Button>
            </Card.Body>
        </Card>
    )
}
