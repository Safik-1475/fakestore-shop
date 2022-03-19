import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Allproduct = () => {
    const [allProducts, setProducts] = useState([])
    // console.log(allProducts)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(allProducts)
    return (
        <div>
            <div className="container-fluid">
                <h2 className='text-uppercase my-4'>fakestore shop</h2>
                <div className="row">
                    {
                        allProducts.map(singleProduct =>
                            <SingleProduct singleProduct={singleProduct}
                                key={singleProduct.id}
                            ></SingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Allproduct;