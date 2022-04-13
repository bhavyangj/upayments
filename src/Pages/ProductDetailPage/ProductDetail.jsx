import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../API'
import { Header } from '../../Components/Header/Header'
import style from './ProductDetail.module.css'
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../API';

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
        <div className={style.product_detail}>
            <Header />
            {product &&
                <div className={style.product}>
                    <button onClick={() => navigate("/")}>Back</button>
                    <div className={style.product_head}>
                        <img src={product.avatar} alt="" />
                        <div className={style.head_side}>
                            <div className={style.name}>{product.name}</div>
                            <div className={style.price}>{product.price}</div>
                        </div>
                        <button
                            className={style.delete_btn}
                            onClick={() => DeleteHandler(product.id)}
                        >❌</button>
                    </div>
                    <hr />
                    <div className={style.description}>
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                </div>}
        </div>
    )
}
