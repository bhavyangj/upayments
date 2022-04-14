import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Products.css"

export const Product = (props) => {

    return (
        <Card className="product">
            <Card.Img variant="top" src={props.item.avatar} />
            <Card.Body>
                <Link to={`/product/${props.item.id}`}>
                    <Card.Title style={{ color: 'black', fontSize: '1.3rem' }}>{props.item.name}</Card.Title>
                    <Button variant="primary">{`$ ${props.item.price}`}</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
