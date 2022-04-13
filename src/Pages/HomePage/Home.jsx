import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct, getAllCategories, getAllProducts, getCategoryProducts } from '../../API';
import { Header } from '../../Components/Header/Header';
import { Product } from '../../Components/products/Products'
import style from './Home.module.css'

export const Home = () => {
    const [products, setProducts] = useState([]);

    const [categoryId, setCategoryId] = useState();
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
        const getData = async () => {
            if (categoryId !== 0) {
                const x = await getCategoryProducts(categoryId);
                if (x !== "Not found")
                    setProducts([x]);
            } else {
                const getData = async () => {
                    const x = await getAllProducts();
                    setProducts(x);
                    console.log(x);
                };
                getData();
            }
        }
        getData();
    }, [categoryId]);

    return (
        <div>
            <Header />
            <div className={style.search}>
                <div className={style.searchbar}>
                    <input
                        type="text"
                        placeholder='Apple watch , Samsung S20...'
                    />
                </div>
                <div className={style.category}>
                    <select value={categoryId} onChange={(e) => { setCategoryId(e.target.value); }}>
                        <option value={0}>All</option>
                        {categories.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <main>
                <div className={style.products}>
                    {products.map(item => (
                        <div className={style.item} key={item.id}>
                            <Link to={`/product/${item.id}`}>
                                <Product item={item} />
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/add-product">
                    <button className={style.add_item}>
                        Add Product
                    </button>
                </Link>
            </main>
        </div>
    )
}
