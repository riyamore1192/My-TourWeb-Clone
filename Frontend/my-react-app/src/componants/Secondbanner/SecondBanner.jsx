import React from "react";
import travelbox from "../../assets/travelobox.avif"
import { MdFlight } from "react-icons/md";
import { LuHotel } from "react-icons/lu";
import { FaWifi } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

const SecondBanner = () => {
    return (
        // <div className="min-h-[40vh]">
        <div className="min-h-[80vh] flex justify-center bg-gray-200 
            backdrop:blur-xl">
            <div className="container">
                <div id="all" className="grid justify-around grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-3 items-center">
                    {/* image section */}
                    <div data-aos="flip-left">
                        <img id="secImg" className="max-w-[450px] h-[350px]
                             drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                            src={travelbox} alt="" />
                    </div>
                    {/* text section */}
                    <div id="border">
                        <h1 data-aos="fade-up"
                            className="text-3xl font-bold sm:text-4xl font-serif"
                        >Explore all corners of the world with us</h1>
                        <p data-aos="fade-up" className="text-2xl leading-7 text-blue-400 font-serif">
                            Discover Your Dream Destination,Explore beautiful places,take a 
                            look in flight schedual,with best food and best hotel rooms, free of cost wifi.
                            Book your adventure, and start your journey today!
                            {" "}</p>
                        {/* icons section */}
                        <div className=" grid grid-cols-2 gap-6  font-serif text-orange-950">
                            <div data-aos="fade-left" className="space-y-6">
                                <div id="icon" className="flex items-center gap-4">
                                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200" />
                                    <p className="text-2xl">Flight</p>
                                </div>
                                <div id="icon" className="flex items-center gap-4">
                                    <LuHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-purple-200" />
                                    <p className="text-2xl">Hotel</p>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="space-y-6">
                                <div id="icon" className="flex items-center gap-4">
                                    <FaWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-red-200" />
                                    <p className="text-2xl">Wi-Fi</p>
                                </div>
                                <div id="icon" className="flex items-center gap-4">
                                    <IoFastFoodOutline className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200" />
                                    <p className="text-2xl">Food</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>

    )
}

export default SecondBanner