import { productData } from '@/libs/common/constant/Data';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';

const ShopProfileData = ({ isOwner }: any) => {
    const [active, setActive] = React.useState(1);
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <div className="w-full flex">
                    <div className="flex items-center" onClick={() => setActive(1)}>
                        <h5
                            className={`font-[600] text-[20px] ${
                                active === 1 ? 'text-red-500' : 'text-[#333]'
                            } cursor-pointer pr-[20px]`}
                        >
                            Shop Products
                        </h5>
                    </div>
                    <div className="flex items-center" onClick={() => setActive(2)}>
                        <h5
                            className={`font-[600] text-[20px] ${
                                active === 2 ? 'text-red-500' : 'text-[#333]'
                            } cursor-pointer pr-[20px]`}
                        >
                            Running Events
                        </h5>
                    </div>

                    <div className="flex items-center" onClick={() => setActive(3)}>
                        <h5
                            className={`font-[600] text-[20px] ${
                                active === 3 ? 'text-red-500' : 'text-[#333]'
                            } cursor-pointer pr-[20px]`}
                        >
                            Shop Reviews
                        </h5>
                    </div>
                </div>
                <div>
                    {isOwner === true && (
                        <div>
                            <Link href="/dashboard">
                                <div
                                    className={`text-center bg-[#ff9900] text-white rounded-md cursor-pointer text-base py-2 w-full px-7 flex justify-center items-center`}
                                >
                                    <span>
                                        <RxDashboard size={20} />
                                    </span>
                                    <span className="ml-2">Dashboard</span>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <br />
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px]  mb-12 border-0">
                {productData &&
                    productData.map((i, index) => (
                        <ProductCard data={i} key={index} isShop={true} />
                    ))}
            </div>
            {productData && productData?.length === 0 && (
                <h5 className="w-full text-center py-5 text-[18px]">This shop has no product!</h5>
            )}
        </div>
    );
};

export default ShopProfileData;
