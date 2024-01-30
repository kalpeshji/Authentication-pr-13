import React, { useState } from 'react'
import '../Asset/css/style.css'
import img1 from '../Asset/image/img-1.webp';
import img2 from '../Asset/image/img-2.webp';
import img3 from '../Asset/image/img-3.webp';
import img4 from '../Asset/image/img-4.webp';

export default function Product() {
    const [products, setProduct] = useState([
        { name: 'NB NICKY BOY ', dsc: 'Men Printed Round Neck Cotton Blend Light Blue T-Shirt', price: 99, img: img1 },
        { name: 'SMARTEES', dsc: 'Men Typography Round Neck Cotton Blend Black T-Shirt', price: 149, img: img2 },
        { name: 'BLIVE', dsc: 'Men Round Neck Cotton Blend Dark Green T-Shirt', price: 99, img: img3 },
        { name: 'NB NICKY BOY ', dsc: 'Men Colorblock Hooded Neck Cotton Blend White T-Shirt', price: 129, img: img4 }
    ])
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex flex-wrap">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div className="w-3">
                                <div className="product-card">
                                    <div className="d-flex justify-center">
                                        <img src={product.img} alt={product.name} />
                                    </div>
                                    <h2 className='title'>{product.name}</h2>
                                    <p className='dsc'>{product.dsc}</p>
                                    <p className='price'>Price : {product.price}</p>
                                    <button className='btn btn-primary me-2'>Buy Now</button>
                                    <button className='btn btn-primary '>Add To Cart</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        'Products Not Found!'
                    )}
                </div>
            </div>
        </>
    )
}
