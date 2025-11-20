'use client'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import p1 from '../../public/images/p1.png'
import p2 from '../../public/images/p2.png'
import p3 from '../../public/images/p3.png'
import p4 from '../../public/images/p4.png'

import Product from './Product';
import { useEffect, useState } from 'react';

export default function Today() {
     const products = [
    { id: 1, image: p4 ,heading:"HAVIT HV-G92 Gamepad"  ,newprice:990,oldprice:1000 ,discount: 30 },
    { id: 2, image: p3 ,heading:"AK-900 Wired Keyboard" ,newprice:1120,oldprice:1160 ,discount: 10 },
    { id: 3, image: p2 ,heading:"IPS LCD Gaming Monitor" ,newprice:520,oldprice:560 ,discount: 20 },
    { id: 4, image: p1 ,heading:"S-Series Comfort Chair " ,newprice:120,oldprice:160 ,discount: 25 },
    { id: 5, image: p1 ,heading:"HAVIT HV-G92 Gamepad" ,newprice:2000,oldprice:2200 ,discount: 25 },
    { id: 6, image: p3 ,heading:"HAVIT HV-G92 Gamepad" ,newprice:110,oldprice:160 , },
    { id: 7, image: p2 ,heading:"HAVIT HV-G92 Gamepad" ,newprice:90,oldprice:110 ,discount: 30 },
  ];

    const [startIndex,setStartIndex] = useState(0)
    // const [itemShow,setItemShow] = useState(4)
     const [itemShow, setItemShow] = useState(1);

    const visebileProduct = products.slice(startIndex,startIndex + itemShow)
    const nextItem = ()=>{
        if(startIndex+itemShow < products.length){
            setStartIndex((prev) => prev + 1)
        }

    }

    const prevItem = ()=>{
        if( startIndex > 0){
            setStartIndex( prev => prev - 1)
        }
    }
   

// useEffect(() => {
//     if (window.innerWidth > 768) {
//         setItemShow(4);
//     } else if (window.innerWidth > 480) {
//         setItemShow(2);
//     } else {
//         setItemShow(1);
//     }
// }, []);

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setItemShow(4);
    } else if (width >= 640) {
      setItemShow(2); 
    } else {
      setItemShow(1); 
    }
  };


  handleResize();

  
  window.addEventListener("resize", handleResize);

  
  return () => window.removeEventListener("resize", handleResize);
}, []);


    return (
        <div className="w-[90%] mx-auto  mb-10 mt-30  ">
            <div className="flex items-center  gap-4">
                <div className="w-7 h-15 rounded bg-red-500"></div>
                <h1 className="text-red-500 text-2xl font-semibold">Today’s</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5  '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <p className='text-2xl md:text-4xl font-semibold'>Flash Sales</p>
                    <div className='flex justify-between'>
                        <div>
                            <p className='font-semibold'>Days</p>
                            <p className='text-2xl font-bold'>03</p>
                        </div>
                        <p className='text-[#E07575] text-4xl'>:</p>
                        <div>
                            <p className='font-semibold'>Hours</p>
                            <p className='text-2xl font-bold'>23</p>
                        </div>
                        <p className='text-[#E07575] text-4xl'>:</p>
                        <div>
                            <p className='font-semibold'>Minutes</p>
                            <p className='text-2xl font-bold'>03</p>
                        </div>
                        <p className='text-[#E07575] text-4xl'>:</p>
                        <div>
                            <p className='font-semibold'>Seconds</p>
                            <p className='text-2xl font-bold'>56</p>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center md:justify-end items-center mt-5 gap-3'>
                    <div className='size-8 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'
                    onClick={prevItem}
                    >
                        <GoArrowLeft className='text-lg'/>
                    </div>
                    <div className='size-8 bg-gray-200 rounded-full flex justify-center items-center curp'
                    onClick={nextItem}
                    >
                        <GoArrowRight   className='text-lg'/>

                    </div>
                </div>
                 
               
            </div>
            <div className='flex flex-wrap justify-center md:justify-between items-center gap-3 mt-5'>
           
                    {
                        visebileProduct.map((item)=>{
                            return(
                                 <Product 
                                 key={item.id}
                             id={item.id} 
                             image = {item.image} 
                             productname={item.heading} 
                             newprice={item.newprice} 
                             oldprice={item.oldprice} 
                             discount={item.discount}/>
                            )
                            
                        })
                    }

            </div>
            <div className='flex justify-center items-center mt-10'>
                <button className='w-60 h-12 bg-red-500 hover:bg-red-600 text-white cursor-pointer'>View All Products</button>
            </div>
           
            <hr  className='mt-10 text-gray-300'/>

        </div>
    )
}