
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { CiCamera, CiHeadphones, CiMobile4, CiMonitor } from "react-icons/ci";
import { IoWatchOutline } from 'react-icons/io5';
import { VscGame } from 'react-icons/vsc';

export default function Category() {
      const category = [
        { icon: <CiMobile4 />, heading: "Phones" },
        { icon: <CiMonitor />, heading: "Computers" },
        { icon: <IoWatchOutline />, heading: "SmartWatch" },
        { icon: <CiCamera />, heading: "Camera" },
        { icon: <CiHeadphones />, heading: "HeadPhones" },
        { icon: <VscGame />, heading: "Gaming" },
    ]
    return (
        <div className="w-[90%] mx-auto my-10 space-y-5">
            <div className="flex items-center  gap-4">
                <div className="w-7 h-15 rounded bg-red-500"></div>
                <h1 className="text-red-500 text-2xl font-semibold">Categories</h1>
            </div>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-5  ">
                <p className='font-semibold text-2xl md:text-3xl'>Browse By Category</p>
                <div className=' flex justify-center items-center gap-3'>
                    <div className='size-8 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'
                        // onClick={prevItem}
                    >
                        <GoArrowLeft className='text-lg' />
                    </div>
                    <div className='size-8 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'
                        // onClick={nextItem}
                    >
                        <GoArrowRight className='text-lg' />

                    </div>
                </div>

            </div>
             <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-5'>

                {category.map((item, index) => (
                    <div key={index} className="border border-gray-300 rounded flex flex-col justify-center items-center w-full   h-40 hover:bg-red-500 hover:text-white  cursor-pointer space-y-5">
                        <div className='text-3xl'> {item.icon}</div>
                        <p>{item.heading}</p>
                    </div>
                ))}








            </div>
             <hr  className='mt-10 text-gray-300'/>
        </div>
    )
}