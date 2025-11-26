'use client'
import Link from "next/link"
import { IoSearchOutline } from 'react-icons/io5'
import { GoHeart } from 'react-icons/go'
import { BsCart3 } from 'react-icons/bs'
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux"

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.qty, 0));
  return (
    <nav className="flex justify-around items-center  py-4 bg-[#ffff] shadow border-b border-gray-300 sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Exclusive</h1>

      <ul className="hidden lg:flex justify-between text-lg gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/signup">Signup</Link></li>

      </ul>

      <div className="hidden lg:flex items-center gap-5">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-60 h-9 pl-3 pr-8 text-sm outline-none bg-transparent"
          />
          <IoSearchOutline className="absolute right-2 top-2.5 text-lg text-gray-500" />
        </div>

        <div className="flex items-center gap-4 text-2xl text-gray-700">
          <div className='relative'>
            <Link href="/wishlist" className="hover:text-red-500 transition">
              <GoHeart />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>

          <div className="relative">
            <Link href="/cart" className="hover:text-red-500 transition">
              <BsCart3 />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
      <div className=" lg:hidden text-2xl">
        <RxHamburgerMenu />
      </div>
    </nav>
  )
}
