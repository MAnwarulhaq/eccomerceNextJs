'use client'

import Image from "next/image"
import { FaStar } from "react-icons/fa6";
import { addToCart } from "../store/slice/Cartslice";
import { useDispatch } from "react-redux";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";

export default function Product({ id, productname, image, newprice, oldprice, discount }) {
    const dispatch = useDispatch()

    function handleAddtoCart() {
        const item = {
            id,
            productname,
            image,
            newprice,
            oldprice,
            discount
        }

        dispatch(addToCart(item))
    }

    return (
        <div key={id} className=" w-65 h-auto bg-[#ffff] shadow ">

            <div className=" relative group flex justify-center items-center bg-gray-200 p-2 h-50">
                <Image
                    src={image}
                    alt={productname}
                    width={80}
                    height={80}
                    className=" w-full h-full object-contain"
                />
                <div className=' absolute top-5 right-2 space-y-3  '>
                    <div className=' bg-[#ffff] size-8 flex justify-center items-center rounded-full '>
                        <button
                            // onClick={handleaddtowishlist}
                        >
                            <IoMdHeartEmpty className='text-lg  cursor-pointer hover:text-red-500' />
                        </button>

                    </div>
                    <div className=' bg-[#ffff] size-8 flex justify-center items-center rounded-full '>
                        
                            <IoEyeOutline className=' text-lg cursor-pointer hover:text-blue-500' />
                        
                    </div>



                </div>
                <button
                    onClick={handleAddtoCart}
                    className="absolute bottom-0 w-full bg-black text-white h-10 border-b rounded-b font-semibold cursor-pointer block sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300
  "
                >
                    Add to Cart
                </button>
            </div>
            <Link href={`/productdetail?id=${id}`}>
            <div className=' space-y-2 h-30 p-3'>
                <h1 className='font-semibold'>{productname} </h1>
                <div className='flex justify-start items-center gap-3'>
                    <p className='text-red-600 text-[20px]'>${newprice}</p>
                    <del>${oldprice}</del>
                </div>
                <div className='flex items-center gap-1'>
                    <FaStar className='text-[#FFAD33]' />
                    <FaStar className='text-[#FFAD33]' />
                    <FaStar className='text-[#FFAD33]' />
                    <FaStar className='text-[#FFAD33]' />
                    (88)
                </div>
                {/* <div className='flex justify-start items-center gap-3'>
            <input type="radio" name="payment" id="cash"
                className="appearance-none w-5 h-5 border rounded-full bg-gray-500  cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-gray-500 checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              />
              <input type="radio" name="payment" id="cash"
                className="appearance-none w-5 h-5 border rounded-full bg-red-500  cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-red-500 checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              />
          </div> */}
            </div>
            </Link>
        </div>
    )
}