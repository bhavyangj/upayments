import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addProduct, getAllCategories } from '../../API';
import './CreateProduct.css'
import { Form, Button, Col, InputGroup } from 'react-bootstrap';

export const CraeteProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        avatar: "",
        category: "electronics",
        price: "",
        developerEmail: ""
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const data = async () => {
            const x = await getAllCategories();
            setCategories(x);
        }
        data();
    }, []);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await addProduct(product);
        navigate("/");
    }

    return (
        <Form className='form' onSubmit={onSubmitHandler}>
            <h2>Create Product</h2>
            <Form.Group className="form_group">
                <Form.Control
                    type="text"
                    value={product.name}
                    name="name"
                    placeholder='Product Name'
                    onChange={inputEvent}
                    required />
            </Form.Group>
            <Form.Group className="form_group">
                <Form.Control
                    as="textarea"
                    value={product.description}
                    name="description"
                    placeholder='Product Description'
                    onChange={inputEvent}
                    minLength={50}
                    style={{ height: '100px' }}
                    required />
                <Form.Text className="text-muted">
                    Minimun 50 character is required
                </Form.Text>
            </Form.Group>
            <Form.Group className="form_group">
                <Form.Control
                    type="text"
                    value={product.avatar}
                    name="avatar"
                    placeholder='Product Image URL'
                    onChange={inputEvent}
                    required />
            </Form.Group>
            <Form.Group className="form_group">
                <Form.Select
                    value={product.category}
                    name="category"
                    placeholder='Category'
                    onChange={inputEvent}
                    required>
                    {categories.map((item) => (
                        <option key={item.id} value={item.name}>{item.name}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="form_group">
                <InputGroup className="form_group">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                        type="number"
                        value={product.price}
                        name="price"
                        placeholder='Product price'
                        onChange={inputEvent}
                        required />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group className="form_group">
                <Form.Control
                    type="email"
                    value={product.developerEmail}
                    name="developerEmail"
                    placeholder='Developer Email ID'
                    onChange={inputEvent}
                    required />
            </Form.Group>
            <Col className='buttons'>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button
                    variant="danger"
                    type="button"
                    onClick={() => navigate(-1)}
                >
                    Cancel
                </Button>
            </Col>
        </Form>
    )
}
