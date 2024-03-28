"use client";
import React, { useState } from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoBagHandleSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom'
import DropDown from "../DropDown/DropDown";
import { PiSignInFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaBox } from "react-icons/fa";
import Searchbar from "../Searchbar/Searchbar";
import ThemeBtn from "../Button/ThemeBtn";


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdown = {
        icon: <CiUser className="h-6 w-6" />,
        title: "Account",
        options: [
            {
                title: "Sign in",
                href: "/signin",
                icon: <PiSignInFill className="h-5 w-5" />
            },
            {
                title: "Profile",
                href: "#",
                icon: <CgProfile className="h-5 w-5" />
            },
            {
                title: "Orders",
                href: "#",
                icon: <FaBox className="h-5 w-5" />
            },
        ]
    }
    const links = [
        { text: "Home", url: "index.html" },
        { text: "Catalog", url: "catalog.html" },
        { text: "About Us", url: "about-us.html" },
        { text: "Contact Us", url: "contact-us.html" },
    ];

    const iconLinks = [
        {
            href: "wishlist.html",
            icon: <CiHeart className="h-6 w-6" />,
            text: "Wishlist",
        },
        {
            href: "",
            icon: <IoBagHandleSharp className="h-6 w-6" />,
            text: "Cart",
        },
    ];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <header className=" sticky top-0 z-50  bg-white px-4  dark:bg-gray-800 dark:border-gray-700 pb-1">
                <div className="mx-auto flex h-20 w-full items-center justify-between">
                    <Link to={'/'} className="w-40">
                        <img
                            className="cursor-pointer sm:h-auto sm:w-auto"
                            src="https://imgur.com/gPL3Afi.png"
                            alt="company logo"
                        />
                    </Link>

                    {/* <div className="md:hidden justify-end ">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <RxHamburgerMenu className="w-8 h-8" />
                    </button>
                </div> */}
                    <Searchbar small={false} />
                    <div className="mx-auto gap-10 flex">
                        {iconLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.href}
                                className="flex cursor-pointer flex-col items-center justify-center"
                            >
                                <div className="flex items-center hover:text-orange-500  dark:text-white dark:hover:text-orange-500">
                                    {link.icon} <p className="text-lg px-2 text-pretty font-sans hidden md:flex">{link.text}</p>
                                </div>
                            </Link>
                        ))}
                        <DropDown dropdown={dropdown} />
                        {/* <ThemeBtn className="align-middle items-center "/> */}
                    </div>
                </div>
                <Searchbar small={true} />
            </header>

            {/* {mobileMenuOpen && (
                <section
                    className={`block md:hidden absolute left-0 right-0 z-50 h-auto  w-full bg-white ${mobileMenuOpen ? "none" : "block"
                        }`}
                >
                    <div className="mx-auto">
                        <div className="mx-auto flex w-full justify-center gap-5 py-4">
                            {iconLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.href}
                                    className="flex cursor-pointer flex-col items-center justify-center"
                                >
                                    <div className="flex items-center">
                                        {link.icon} <p className="text-xs px-2 text-pretty font-semibold">{link.text}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <form className="my-4 mx-5 flex h-9 items-center border">
                            <CiSearch className="mx-3 h-4 w-4" />

                            <input
                                className=" w-11/12 outline-none md:block"
                                type="search"
                                placeholder="Search"
                            />
                            <button
                                type="submit"
                                className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300"
                            >
                                Search
                            </button>
                        </form>
                        <ul className="text-center font-medium">
                            {links.map((link, index) => (
                                <li key={index} className="py-2">
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )} */}
        </>
    );
};

export default Header;
