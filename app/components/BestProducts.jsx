import Product from "./Product"
import p1 from '../../public/images/p1.png'
import p2 from '../../public/images/p2.png'
import p3 from '../../public/images/p3.png'
import p4 from '../../public/images/p4.png'

export default function BestProductds(){
       const products = [
    { id: 1, image: p4 ,heading:"HAVIT HV-G92 Gamepad"  ,newprice:990,oldprice:1000 ,discount: 30 },
    { id: 2, image: p3 ,heading:"AK-900 Wired Keyboard" ,newprice:1120,oldprice:1160 ,discount: 10 },
    { id: 3, image: p2 ,heading:"IPS LCD Gaming Monitor" ,newprice:520,oldprice:560 ,discount: 20 },
    { id: 4, image: p1 ,heading:"S-Series Comfort Chair " ,newprice:120,oldprice:160 ,discount: 25 },
    // { id: 5, image: p1 ,heading:"HAVIT HV-G92 Gamepad" ,newprice:2000,oldprice:2200 ,discount: 25 },
    // { id: 6, image: p3 ,heading:"HAVIT HV-G92 Gamepad" ,newprice:110,oldprice:160 , },
    // { id: 7, image: p2 ,heading:"HAVIT HV-G92 Gamepad" ,newprice:90,oldprice:110 ,discount: 30 },
  ];
    
    return(
        <div className="w-[90%] mx-auto my-10 space-y-5">
            <div className="flex items-center  gap-4">
                <div className="w-7 h-15 rounded bg-red-500"></div>
                <h1 className="text-red-500 text-2xl font-semibold">This Month</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <p className="font-semibold text-2xl lg:text-5xl text-center sm:text-left">Best Selling Products</p>
                <div className="flex justify-center md:justify-end items-center md:items-end">
                    <button className="bg-red-500 text-white w-40 h-12 cursor-pointer">View All</button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-3 mt-5'>
                       
                                {
                                    products.map((item)=>{
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

        </div>
    )
}