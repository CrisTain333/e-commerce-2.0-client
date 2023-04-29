import { useAuth } from '@/libs/Context/AuthProvider';
import { productData } from '@/libs/common/constant/Data';
import Image from 'next/image';
import React, { useState } from 'react';

const Header = () => {
    const { currentUser } = useAuth();
    const [searchData, setSearchData] = useState<any>(null);
    const [searchValue, setSearchValue] = useState();

    const handleSearch = (e: any) => {
        e.preventDefault();
        const term = e.target.value;
        setSearchValue(term);

        const filteredProduct =
            productData &&
            productData?.filter((product) =>
                product?.name?.toLowerCase()?.includes(term?.toLowerCase())
            );

        setSearchData(filteredProduct);
    };

    return (
        <div>
            <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <a className="flex items-center justify-center font-semibold text-2xl">
                        <img
                            src="https://i.ibb.co/108mmbG/Pngtree-mv-vm-letter-vector-logo-5249394-removebg-preview.png"
                            alt=""
                            className="h-10"
                        />
                        <span className="font-sans font-bold">enzilla</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <form className="w-[50vw]">
                        <div className="flex">
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    value={searchData}
                                    onChange={handleSearch}
                                    className="block p-[1.2rem] w-full z-20 text-sm text-gray-900  rounded-r-lg"
                                    placeholder="Search Mockups, Logos, Design Templates..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                                {/* Search result dropdown */}
                                {searchData && searchData.length !== 0 ? (
                                    <>
                                        {' '}
                                        <div className="bg-gray-50 shadow-md absolute w-full rounded-b-md h-auto top-11 p-2">
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                            <p>Hello</p>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="navbar-end space-x-3">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-white">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="user_Profile"
                                    height={300}
                                    width={300}
                                    className="h-10"
                                    src={currentUser?.profilePicture}
                                />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
