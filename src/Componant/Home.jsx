import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ButtonComp from './ButtonComp';
import Icons from './Icons';
import firstIcon from '/assets/Fast Delivery (HD).png';
import secondIcon from '/assets/Free Stream (HD).png';
import thirdIcon from '/assets/best quality(HD) (1).png';
import fourthIcon from '/assets/24 x 7(HD) (2).png';
import backgroundImg from '/assets/watch_background_2.jpg' ;

const Home = () => {
    let [apiData, setApiData] = useState([]);
    let [loading, setLoading] = useState(false);

    let fetchData = async () => {
        try {
            setLoading(true);
            let final = (await axios.get('https://fakestoreapi.com/products?limit=3')).data;
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

    let imgData = [
        { image: firstIcon, text: 'Fast Delivery' },
        { image: secondIcon, text: 'Free Shipping' },
        { image: thirdIcon, text: 'Best Quality' },
        { image: fourthIcon, text: '24x7 Customer Support' },
    ];

    return (
        <>
            <header className="bg-gray-100 min-h-[40dvw] bg-[url(./assets/watch_background_2.jpg)] bg-cover flex items-center justify-start">
                <div className="max-w-[50vw] flex flex-col items-start justify-center pl-6 pb-[50px] md:pb-0">
                    <h2 className="text-5xl font-bold text-white mb-4">STYLISH WATCHES</h2>
                    <p className="text-lg text-left text-grey-300 mb-8">
                        A watch is a small clock carried or worn by a person. It is also a fashion accessory for men and women. A watch may be one of the few accessories worn by a person.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link to="/contact">
                            <ButtonComp background="#19c880" color="#fff" content="Contact Us" />
                        </Link>
                        <Link to="/about">
                            <ButtonComp background="#5a1b9d" color="#fff" content="About Us" />
                        </Link>
                    </div>
                </div>
            </header>

            <Icons imgData={imgData} />

            <div className="container mx-auto py-16">
                <h3 className="text-3xl font-bold text-center mb-8">Most Popular Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <div className="spinner-border text-gray-500" style={{ width: '3rem', height: '3rem' }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        apiData.map((ele) => (
                            <div key={ele.id}>
                                <Link to={`/shop/singleproduct/${ele.id}`}>
                                    <div className="card bg-white shadow-md rounded-md overflow-hidden p-3">
                                        <img src={ele.image} alt="watch" className="w-full h-64 object-contain" />
                                        <div className="p-4">
                                            <p className="text-lg font-semibold">{Shortened(ele.title, 40)}</p>
                                            <p className="text-gray-600">{ele.category}</p>
                                            <h5 className="text-red-500 font-semibold mt-2">₹ {ele.price}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;
