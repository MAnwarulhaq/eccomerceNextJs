import Image from "next/image"
import speaker from '../../public/images/speaker.png'

export default function Banner() {
    return (
        <div className="w-[90%] mx-auto h-auto md:h-[400px] my-10  grid grid-cols-1 md:grid-cols-2 bg-black p-5 space-y-4">
            <div className='flex  justify-center items-center'>
                <div className="space-y-7 flex flex-col justify-center md:justify-start items-center md:items-start md:text-left">
                    <p className='text-[#00FF66] font-semibold ' >Categories</p>
                    <div className='text-white text-2xl xl:text-5xl'>
                        <p>Enhance Your </p>
                        <p>Music Experience</p>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='bg-[#ffff] h-15 w-15 rounded-full text-black flex flex-col justify-center items-center'>
                            <p className='font-semibold'>23</p>
                            <p className='text-[10px]'>Houres</p>
                        </div>
                        <div className='bg-[#ffff] h-15 w-15 rounded-full text-black flex flex-col justify-center items-center'>
                            <p className='font-semibold'>05</p>
                            <p className='text-[10px]'>Days</p>
                        </div>

                        <div className='bg-[#ffff] h-15 w-15  rounded-full text-black flex flex-col justify-center items-center'>
                            <p className='font-semibold'>59</p>
                            <p className='text-[10px]'>Minutes</p>
                        </div>
                        <div className='bg-[#ffff] h-15 w-15  rounded-full text-black flex flex-col justify-center items-center'>
                            <p className='font-semibold'>35</p>
                            <p className='text-[10px]'>Seconds</p>
                        </div>
                    </div>
                    <button className='bg-[#00FF66] text-white w-30 h-10 rounded cursor-pointer'>Buy Now!</button>
                </div>

            </div>

            <div className=" relative  w-full h-full flex justify-center items-center">

                <div className="hidden sm:block absolute w-full  h-[300px] top-3 rounded-full  bg-linear-to-tr from-[#303030] to-[#505050]  blur-xl opacity-50 animate-pulse"></div>


                <div className="relative flex justify-center items-center">
                    <Image src={speaker} width={100} height={100} alt="speaker" className=" w-[500px]" />
                </div>
            </div>


        </div>
    )
}