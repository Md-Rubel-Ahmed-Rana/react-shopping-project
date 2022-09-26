import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("products.json")
        .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find((product) => product.id === id);
            if(addedProduct){
                addedProduct.quantity = 1;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        // const exists = products.find((product) => product.id === selectedProduct.id)
        const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
             <div className="products-container">
                {
                    products.map((product) => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart= {handleAddToCart}
                    />)
                }
             </div>
             <div className="cart-container">
                <Cart cart={cart} />
             </div>
        </div>
    );
};

export default Shop;