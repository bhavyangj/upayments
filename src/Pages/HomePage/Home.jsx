import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllCategories, getAllProducts, getCategoryProducts } from '../../API';
import { Header } from '../../Components/Header/Header';
import { Product } from '../../Components/products/Products'
import './Home.css'
import { Button, Form } from 'react-bootstrap';

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const x = await getAllProducts();
            setProducts(x);
            console.log(x);
        };
        getData();
        const data = async () => {
            const x = await getAllCategories();
            setCategories(x);
        }
        data();
    }, []);

    useEffect(() => {
        // const getData = async () => {
        //     if (category !== "all") {
        //         const x = await getCategoryProducts(category);
        //         if (x !== "Not found")
        //             setProducts([x]);
        //     } else {
        //         const getData = async () => {
        //             const x = await getAllProducts();
        //             setProducts(x);
        //             console.log(x);
        //         };
        //         getData();
        //     }
        // }
        // getData();
        const getProducts = () => {
            if (category !== "All") {
                const filter = products.filter(item => item.category === category);
                console.log("filter: ", filter);
                setFilterProducts(filter);
            } else {
                setFilterProducts(products);
            }
        }
        getProducts();
        // eslint-disable-next-line
    }, [category]);

    return (
        <div className="homepage">
            <Header />
            <div className="search">
                <div className="searchbar">
                    <Form.Control type="text" placeholder='Apple watch , Samsung S20...' />
                </div>
                <div className="category">
                    <Form.Select value={category} onChange={(e) => { setCategory(e.target.value); }}>
                        <option value="All">All</option>
                        {categories.map((item) => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))}
                    </Form.Select>
                </div>
            </div>
            <Link to="/add-product" className="add_product_btn">
                <Button variant="secondary">Add Product</Button>
            </Link>
            <main>
                <div className="products">
                    {products.map(item => (
                        <div className="item" key={item.id}>
                            <Link to={`/product/${item.id}`}>
                                <Product item={item} />
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

        </div>
    )
}
