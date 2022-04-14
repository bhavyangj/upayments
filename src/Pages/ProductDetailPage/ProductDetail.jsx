import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../API'
import { Header } from '../../Components/Header/Header'
import './ProductDetail.css'
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../API';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState();
    useEffect(() => {
        const getData = async () => {
            const res = await getProductDetail(id);
            console.log(res);
            setProduct(res);
        };
        getData();
    }, [id]);

    const DeleteHandler = async (id) => {
        const res = await deleteProduct(id);
        console.log(res);
        navigate("/");
    }
    return (
        <div className="product_detail">
            {product &&
                <div className="product_info">
                    <Col className="buttons">
                        <Button onClick={() => navigate("/")}>
                            Back
                        </Button>
                        <Button variant="danger" onClick={() => DeleteHandler(product.id)}>
                            Delete
                        </Button>
                    </Col>
                    <Col className="product_head">
                        <Card >
                            <Card.Img variant="top" src={product.avatar} />
                        </Card>
                        <Card>
                            <Row>
                                <Card.Body className="head_side">
                                    <Card.Title className="name">{product.name}</Card.Title>
                                    <Card.Text className="price">{`$ ${product.price}`}</Card.Text>
                                </Card.Body>
                            </Row>
                        </Card>
                    </Col>
                    <hr className='break_line' />
                    <Container className="description">
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </Container>
                </div>}
        </div>
    )
}
