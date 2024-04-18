import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Shop = () => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const final = (await axios.get('https://fakestoreapi.com/products')).data;
            setApiData(final);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const Shortened = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

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

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 lg:px-8">
                    {loading ? (
                        Array.from({ length: 8 }, (_, index) => (
                            <div key={index} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg">
                                <Skeleton height={200} />
                                <div className="p-6">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        <Skeleton />
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        <Skeleton />
                                    </p>
                                    <div className="flex items-center justify-between mt-4">
                                        <h3 className="text-gray-800 font-bold">
                                            <Skeleton width={80} />
                                        </h3>
                                        <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                            <Skeleton width={100} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        apiData.map((ele) => (
                            <div key={ele.id} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg">
                                <Link to={`/shop/singleproduct/${ele.id}`}>
                                    <img src={ele.image} alt="watch" className="w-full h-64 object-contain" />
                                </Link>
                                <div className="p-6">
                                    <h2 className="text-lg font-semibold text-gray-800">{Shortened(ele.title, 35)}</h2>
                                    <p className="text-gray-600 mt-2">{ele.category}</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <h3 className="text-gray-800 font-bold">₹ {ele.price}</h3>
                                        <button onClick={() => cartItem(ele)} className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Add to Cart</button>
                                    </div>
                                    
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Shop;
