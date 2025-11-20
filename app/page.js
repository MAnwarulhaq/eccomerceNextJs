'use client'

import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Today from "./components/Today";
import Category from "./components/Category";
import BestProductds from "./components/BestProducts";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <>
    <HeroSection/>
    <Today/>
    <Category/>
    <BestProductds/>
    <Banner/>
    </>
  );
}
