import React from 'react';
import heroImg from '../assets/cloth9.jpg';
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="w-full ">
      <div className="max-w-screen-2xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-24 gap-8">
        
        {/* Hero Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Unleash Premium Clothing Quality
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt, veritatis iure dolor at iusto?
          </p>
          <Link to="/products" className="bg-primary text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg w-fit hover:bg-primary/85 transition-all duration-300 cursor-pointer">
            Shop Our Collection
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex-1 mt-12 md:mt-0">
          <img 
            src={heroImg} 
            alt="Hero" 
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
