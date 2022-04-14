import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllCategories, getAllProducts } from '../../API';
import { Product } from '../../Components/products/Products'
import './Home.css'
import { Button, Container, Form } from 'react-bootstrap';

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState("All");
    const [categories, setCategories] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [foundSearch, setFound] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const res = await getAllProducts();
            setProducts(res);
            setFilterProducts(res);
        };
        getProducts();
        const getCategories = async () => {
            const res = await getAllCategories();
            setCategories(res);
        }
        getCategories();
    }, []);

    useEffect(() => {
        const getProducts = () => {
            if (category !== "All") {
                const filterItems = products.filter(item => item.category === category);
                setFilterProducts(filterItems);
                (!filterItems.length > 0) ? setFound(false) : setFound(true);
            } else
                setFilterProducts(products);
        }
        getProducts();
        // eslint-disable-next-line
    }, [category]);

    useEffect(() => {
        if (searchItem !== "") {
            const filterItems = products.filter(item => (item.name.toLowerCase()).includes(searchItem.toLowerCase()));
            setFilterProducts(filterItems);
            (!filterItems.length > 0) ? setFound(false) : setFound(true);
        } else
            setFilterProducts(products);
        // eslint-disable-next-line
    }, [searchItem]);

    return (
        <Container fluid={true} className="homepage">
            <Form className="filter">
                <Form.Control
                    className="search"
                    type="text"
                    value={searchItem}
                    name="developerEmail"
                    placeholder='Apple watch , Samsung S20...'
                    autoComplete='off'
                    onChange={(e) => setSearchItem(e.target.value)}
                    required />
                <Form.Group className="category">
                    <Form.Label>Categories: </Form.Label>
                    <Form.Select value={category} onChange={(e) => { setCategory(e.target.value); }}>
                        <option value="All">All</option>
                        {categories.map((item) => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form>
            <Link to="/add-product" className="add_product_btn">
                <Button variant="secondary">Add Product</Button>
            </Link>
            {(foundSearch || searchItem === "") &&
                <Container className="products_item">
                    {filterProducts.map(item => (
                        <Product key={item.id} item={item} />
                    ))}
                </Container>}
            {!foundSearch && <Container className="item_not_found">
                Product Not Found
            </Container>}
        </Container>
    )
}
