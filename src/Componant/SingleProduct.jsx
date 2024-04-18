import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const final = (await axios.get(`https://fakestoreapi.com/products/${id}`)).data;
            setProduct(final);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const cartItem = (product) => {
        const cartProducts = JSON.parse(localStorage.getItem('cartProduct')) || [];
        const isProductExist = cartProducts.find((item) => item.id === product.id);

        if (!isProductExist) {
            const updatedCart = [...cartProducts, product];
            localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
            alert('Product added to cart:', product);
        } else {
            alert('Product already exists in the cart:', product);
        }
    };

    const renderRatingStars = () => {
        const stars = [];
        const rating = product.rating ? product.rating.rate : 0;
        const totalStars = 5;

        for (let i = 0; i < totalStars; i++) {
            if (i < rating) {
                stars.push(
                    <svg
                        key={i}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
            } else {
                stars.push(
                    <svg
                        key={i}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
            }
        }

        return stars;
    };

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-14 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={product.title} className="lg:w-1/3 w-full lg:h-auto h-64 object-contain object-center rounded" src={product.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                            <div className="flex mb-4">
                                <div className="flex items-center">
                                    <div className="flex">
                                        {renderRatingStars()}
                                        <span className="text-gray-600 ml-3">{product.rating && product.rating.count} Reviews</span>
                                    </div>
                                </div>
                            </div>
                            <p className="leading-relaxed">{product.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">$ {product.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => cartItem(product)}>Add to Cart</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
