import React, { useState } from "react";
import './App.css';
import main from './assets/main.svg';
import arrow from './assets/arrow.svg';
import small from './assets/small.svg';
import icon from './assets/Icon.svg';
import share from './assets/share.svg';
import heart from './assets/Heart.svg';
import Rating from './Rating';


const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
       <div className="flex items-center gap-x-1 font-semibold Class	Description
cursor-pointer overflow-x-auto whitespace-nowrap">
    <span className="text-sm">Home</span>
    <img src={arrow} alt="" className="w-4 h-4 " />
    <span className="text-sm">Categories</span>
    <img src={arrow} alt="" className="w-4 h-4" />
    <span className="text-sm">Photo Frames</span>
    <img src={arrow} alt="" className="w-4 h-4" />
    <span className="text-sm">Coloured Square, 4*6</span>
  </div> <br />
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex gap-4">
  {/* Small Images on the Left */}
  <div className="flex flex-col gap-2">
    {[...Array(8)].map((_, idx) => (
      <img
        key={idx}
        src={small}
        alt={`Thumbnail ${idx + 1}`}
        className="w-14 h-14 rounded border"
      />
    ))}
  </div>

  {/* Main Image on the Right */}
  <div className="flex-1">
    <img
      src={main}
      alt="Main Product"
      className="w-full h-auto rounded"
    /> <br />
    <p className="text-black-900">
            Lorem ipsum dolor sit amet consectetur. Morbi ut et magna sed. Aliquam quam adipiscing at elementum ac erat bibendum sed. Nec donec vestibulum convallis fermentum. Neque lectus massa condimentum in.
             
  
          
          </p>
          <br />

          <p className="text-sm text-gray-500">Delivery and Gift wrap prices not included</p>

          <button className="text-sm bg-gray-200 rounded-lg mt-9 mb-2 text-black-500">Item No: 86893166</button>
          
  </div>
  
</div>


        {/* Right Product Info Section */}
        <div className="md:w-1/2 space-y-4">
         <div className="flex justify-between items-center">
    <h2 className="text-4xl font-semibold mt-6">Name of product</h2>
    <div className="flex gap-2">
      <img src={share} alt="Share" className="w-5 h-5  cursor-pointer transtion-transform duration-300 ease-in-out hover:scale-75" />
      <img src={heart} alt="Wishlist" className="w-5 h-5  cursor-pointer transtion-transform duration-300 ease-in-out hover:scale-75" />
    </div>
  </div>
  <p className="text-gray-600">Description, size, colour, type</p>
          <div className="text-xl font-bold">
            Rs. 99/- Only<del className="text-gray-500">198</del>{" "} <br />
            <div className="inline text-green-600 text-sm">OFF <span className="text-green text-2xl">50% </span>Save</div>
          </div>
          <p className="text-sm text-gray-500">Price incl. of all taxes</p>
          <div className="text-yellow-500 text-lg"><Rating/></div>

          <hr />

          <div className="flex justify-between items-center">
    <h3 className="text-xl font-medium">Choose Size <br />13*18 cm</h3>
    
    <img src={arrow} alt="" className="w-5 h-5  cursor-pointer transtion-transform duration-300 ease-in-out hover:scale-75" />
  </div>
  <div className=" w-full sm:w-fit pb-4">

          <div className="flex items-center gap-2 sm:gap-[90px] flex-wrap sm:flex-nowrap w-full sm:w-fit">
  {/* Quantity Counter */}
  <div className="flex items-center bg-gray-200 rounded-[30px] gap-2 px-6 py-1 sm:px-12 ">
    <button
      className="px-3 py-1 rounded-[30px]"
      onClick={() => handleQuantityChange(-1)}
    >
      <h3>-</h3>
    </button>
    <input
      type="text"
      readOnly
      value={quantity}
      className="w-12 text-center font-semibold bg-gray-200 outline-none"
    />
    <button
      className="px-3 py-1 rounded-[30px]"
      onClick={() => handleQuantityChange(1)}
    >
      <h2>+</h2>
    </button>
  </div>

  {/* Add to Cart Button */}
  <button className="px-8 py-2 text-sm sm:px-14 sm:py-2 sm:text-base bg-button text-white rounded-[30px] transition-transform duration-300 ease-in-out hover:bg-black
">
    ADD TO CART
  </button>
</div> <br />


          <div className=" gap-4">
            
             
            <button className="px-2 py-2 bg-button text-white w-full rounded-[30px] transition-transform duration-300 ease-in-out hover:bg-black">BUY NOW</button>
          </div></div>

          <div className=" flex justify-end"> <img src={share} alt="" className="w-5 h-5 cursor-pointer mt-[90px] transtion-transform duration-300 ease-in-out hover:scale-75 " /></div>
       
        </div>
      </div>


      
      {/* Product Tabs */}
      <div className="flex-1 ml-[1px] md:ml-[70px]">
      <div className="grid  gap-6 mb-8 ">
        <hr />
        <div className="flex justify-between items-center">
      
    <h3 className="text-xl font-medium">Product Details</h3>
    <img src={icon} alt="" className="w-5 h-5  cursor-pointer transtion-transform duration-300 ease-in-out hover:scale-75" />
  </div><hr />
         <div className="flex justify-between items-center">
    <h3 className="text-xl font-medium">Measurements</h3>
    <img src={icon} alt="" className="w-5 h-5 cursor-pointer transtion-transform duration-300 ease-in-out hover:scale-75" />
  </div> <hr />
      </div>

      <h3 className="text-xl font-semibold mb-4 ">Customer Reviews</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="border p-4 rounded shadow-sm">
            <h4 className="font-medium">Great Product</h4>
            <div className="text-yellow-500 mb-2"><Rating/></div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Morbi ut et magna sed.
            </p>
            <p className="text-xs text-gray-400 mt-2">lorem, india</p>
          </div>
        ))}
      </div></div>
    </div>
  );
};

export default Product;
