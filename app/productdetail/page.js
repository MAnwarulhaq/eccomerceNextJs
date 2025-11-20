"use client";

import { useSearchParams } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
export default function ProductDetail() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    return (
        <div className="w-[90%] mx-auto grid grid-cols-2 bg-[#ffff] my-15 gap-">
            <div className="border w-[90%] grid grid-cols-2">
                <div className="border  h-full">

                </div>
                <div className="border bg-amber-600 w-full h-full">

                </div>

            </div>
            <dvi className="space-y-5">
                <h1>Havic HV G-92 Gamepad</h1>
                <div className="flex  gap-3 items-center">
                    <div className="flex items-center">
                        <TiStarFullOutline className="text-orange-400 text-lg" />
                        <TiStarFullOutline className="text-orange-400 text-lg" />
                        <TiStarFullOutline className="text-orange-400 text-lg" />
                        <TiStarFullOutline className="text-orange-400 text-lg" />
                        <TiStarFullOutline className="text-gray-400 text-lg" />


                    </div>
                    <p className="text-gray-400">(150 Reviews)</p>
                    <p>|</p>
                    <p className="text-[#66ffa3] text-lg">In Stock</p>

                </div>
                <p className="text-2xl">$192.00</p>
                <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <hr className="bg-gray-400" />
                <div className="flex  items-center gap-3 ">
                    <p className="text-3xl">Color:</p>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="color" id="cash" value='gray'
                            className="appearance-none w-5 h-5 border rounded-full bg-gray-500  cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-gray-500 checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                        />
                        <input type="radio" name="color" id="cash" value='red'
                            className="appearance-none w-5 h-5 border rounded-full bg-red-500  cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-red-500 checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                        />
                    </div>


                </div>
                <div className="flex items-center  gap-3">
                    <p className="text-2xl">Size:</p>
                    <div className="flex gap-2">
                        {["XS", "S", "M", "L", "XL"].map((size) => (
                            <button
                                key={size}
                                className="size-10 border border-gray-400 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="grid grid-cols-3 border w-50 h-10 text-center ">
                        <div className=" flex items-center justify-center hover:text-white hover:bg-red-600 cursor-pointer">
                             <FaMinus />
                        </div>
                       <div  className="border-l border-r flex justify-center items-center text-lg">
                                <p>{1}</p>
                       </div>
                        
                        <div className=" flex items-center justify-center  hover:text-white hover:bg-red-600 cursor-pointer">
                            <FaPlus className=" " />
                        </div>
                        
                    </div>
                    <button className="bg-red-600 text-white w-40 h-10 cursor-pointer">Buy Now</button>
                </div>

            </dvi>

        </div>
    );
}
