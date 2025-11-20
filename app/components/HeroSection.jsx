'use client'
import Image from 'next/image'
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

export default function HeroSection() {
    const discountdata = [
        { id: 1, name: "up to ", dis: 10 },
        { id: 1, name: "up to ", dis: 25 },
        { id: 1, name: "up to ", dis: 40 }
    ]

    const [index, setIndex] = useState(0)
    return (
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-12 md:h-[400px] gap-5 mb-20 ">
            <div className='order-2 md:order-1 col-span-12 md:col-span-3 md:pl-5   flex justify-center md:justify-start items-center md:items-start md:border-r md:border-gray-300 '>
                <ul className="space-y-5 font-[Poppins] text-sm flex  flex-col justify-start items-start mt-5 ">
                    <li className="flex gap-5 ">
                        <span>Women's Fashion</span> <IoIosArrowForward />
                    </li>
                    <li className="flex gap-5 ">
                        <span>Men's Fashion</span> <IoIosArrowForward />
                    </li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </div>


            <div className='relative  order-1 md:order-2 col-span-12 md:col-span-9  bg-black  grid grid-cols-1  md:grid-cols-2     '>
                <div className='  order-2 md:order-1 flex justify-center items-center'>
                    <div className='  text-white space-y-2 md:space-y-5 flex flex-col justify-center md:justify-start items-center md:items-start mb-3'>
                        <Image
                            src="/images/Frame.png"
                            alt='apple logo'
                            width={200}
                            height={200}
                        />


                        <p key={discountdata[index].id} className='text-2xl lg:text-5xl'>{discountdata[index].name} {""} {discountdata[index].dis}% </p>

                        <p className='text-2xl lg:text-5xl'>off Voucher</p>
                        <button className='border-b text-2xl cursor-pointer '>Shop Now</button>
                       
                        <div className=' my-5 flex justify-center items-center  md:absolute  bottom-0 md:bottom-5 md:left-50 lg:left-100 xlg:left-300  space-x-3 '>
                            {
                                discountdata.map((_, indx) => {
                                    // console.log(indx)
                                    return <button
                                        key={indx}
                                        onClick={() => setIndex(indx)}
                                        className={`${index === indx ? "bg-red-500 border-2 border-white" : "bg-gray-500"} w-3 h-3 rounded-full cursor-pointer`}></button>
                                })
                            }
                        </div>
                    </div>

                </div>
                <div className='order-1 md:order-2  flex items-center justify-center'>
                    <Image
                        src="/images/hero.png"
                        alt="Hero"
                        width={900}
                        height={900}
                        className=""
                    />
                </div>


            </div>

        </div>
    )
}
