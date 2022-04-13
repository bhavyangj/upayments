import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addProduct, getAllCategories } from '../../API';
import { Header } from '../../Components/Header/Header'
import style from './CreateProduct.module.css'

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
        console.log(product);
        const res = await addProduct(product);
        console.log(res);
        navigate("/");
    }

    return (
        <div>
            <Header />
            <div className={style.form}>
                <form onSubmit={onSubmitHandler}>
                    <div className={style.title}>Create Product</div>
                    <div className={style.inputField}>
                        <input
                            className={style.inputBox}
                            type="text"
                            value={product.name}
                            name="name"
                            placeholder='Product name'
                            onChange={inputEvent}
                        />
                    </div>
                    <div className={style.inputField}>
                        <input
                            className={style.inputBox}
                            type="text"
                            value={product.description}
                            name="description"
                            placeholder='description'
                            onChange={inputEvent}
                        />
                    </div>
                    <div className={style.inputField}>
                        <input
                            className={style.inputBox}
                            type="text"
                            value={product.avatar}
                            name="avatar"
                            placeholder='Image URL'
                            onChange={inputEvent}
                        />
                    </div>
                    <div className={style.inputField}>
                        <select
                            className={style.inputBox}
                            value={product.category}
                            name="category"
                            placeholder='Category'
                            onChange={inputEvent}
                        >
                            {categories.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={style.inputField}>
                        <input
                            className={style.inputBox}
                            type="number"
                            value={product.price}
                            name="price"
                            placeholder='Price'
                            onChange={inputEvent}
                        />
                    </div>
                    <div className={style.inputField}>
                        <input
                            className={style.inputBox}
                            type="email"
                            value={product.developerEmail}
                            name="developerEmail"
                            placeholder='Developer Email'
                            onChange={inputEvent}
                        />
                    </div>
                    <button type='submit'>
                        SUBMIT
                    </button>
                    <button type='button' onClick={() => navigate(-1)}>
                        BACK
                    </button>

                    {/* <div className={style.inputField}>
                            <label>Password</label>
                            <input className={style.inputBox} type="password"  onChange={(e) => { setPassword(e.target.value) }} autoComplete="on" />
                        </div> */}
                </form>
            </div>
        </div>
    )
}
