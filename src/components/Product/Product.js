import React from 'react';
import "./Product.css"
const Product = (props) => {
    const {img, name, price, seller, ratings} =  props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'> {name} </h4>
                <p>Price:<small> ${price} </small></p>
                <p>Seller:<small> {seller} </small></p>
                <p>Ratings:<small> {ratings} Starts</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='cart-btn'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;