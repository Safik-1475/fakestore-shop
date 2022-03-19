import React from 'react';

const SingleProduct = (props) => {
    const { rating, title, price, description, category, image } = props.singleProduct
    console.log(props.rating)
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 my-3">
            <div className="card">
                <img src={image} alt="" className='img-responsive w-50 py-5 mx-auto' />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex justify-content-around">
                        <h5 className='text-danger'> $ {price}</h5>

                    </div>
                    <p className="card-text">{description.slice(0, 130)}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;