import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import navlogo from '/assets/icon (2).png'
import { TiShoppingCart } from "react-icons/ti";
import ButtonComp from './ButtonComp';


const Navbar = ({ isLogedin, setIsLogedin, userName }) => {
    console.log('----', userName)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <nav className={`${ isScrolled ?
                'bg-transparent backdrop-blur-md shadow-xl fixed top-0 left-0 right-0'
                :
                'bg-white'}`} >

                <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <NavLink to="/">
                        <img src={navlogo} width="100em" alt="icon" />
                    </NavLink>
                    <ul className="flex items-center space-x-4">
                        <li>
                            <NavLink to="/" activeClassName="font-bold">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop" activeClassName="font-bold">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="font-bold">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="font-bold">Contact us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" activeClassName="font-bold" className='text-4xl'>
                                <TiShoppingCart />
                            </NavLink>
                        </li>
                        <li>
                            {isLogedin ? (
                                <>
                                    <span>{userName}</span>
                                    <NavLink to="/" onClick={() => setIsLogedin(false)}> <ButtonComp background="#5a1b9d" color="#fff" content="Logout" /></NavLink>
                                </>
                            ) : (
                                <NavLink to="/login" activeClassName="font-bold">
                                    <ButtonComp background="#19c880" color="#fff" content="Login" /></NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar