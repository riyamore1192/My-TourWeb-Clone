import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const [priceValue, setpriceValue] = useState(40);

    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleBookingClick = () => {
        navigate('/booking'); // Navigate to the login page
    };

    return (
        <div className="bg-black/10 h-full">
            <div className="h-full  flex justify-center items-center gap-3 p-4 bg-primary/10">
                <div id="middle" className="container w-full bg-cover grid grid-cols-1  gap-3 mt-4">
                    {/* text content */}
                    <div data-aos="fade-up" className="text-white font-bold text-5xl font-serif" >
                        The journey Beyond <br /> your imagination
                    </div>
                    {/* form section */}
                    <div id="form" data-aos="fade-up"
                    // className="space-y-4 bg-yellow-50  rounded-lg p-4 h-full  relative mt-4"
                    >
                        <h1 className="text-5xl font-bold font-serif text-white ">Explore the World with Our Amazing Tours</h1>
                        <p className="text-3xl text-white font-semibold font-serif">
                            Discover breathtaking destinations, unforgettable <br />
                            experiences, and personalized tours that will make <br />
                            your travel dreams come true.
                        </p>
                        <br/>
                        {/* <div id="form" className=" grid grid-cols-1 gap-4 sm:grid-cols-3 py-3">
                            <div id="des">
                                <label htmlFor="destination" className="opacity-70 font-serif text-red-600 font-bold text-2xl">Search ur Destination </label>
                                <input type="text" name="destination" id="destination" placeholder="dubai"
                                    className="w-full font-serif bg-grey-100 my-2 range accent-primary focus:outline-primary
                                    focus:outline outline-2 rounded-full p-2" />
                            </div>
                            <div className="DATE">
                                <label htmlFor="destination" className="opacity-70 font-serif text-red-600 text-2xl font-bold">Date</label>
                                <input type="date" name="destination" id="destination" className="w-full font-serif !placeholder-slate-400 
                    bg-grey-100 my-2 rounded-full focus:outline-primary focus:outline outline-2 p-2" />
                            </div>
                            <div id="range">
                                <label htmlFor="destination" className="opacity-70 block font-serif text-red-600 font-bold text-2xl">
                                    <div className="w-full flex justify-between items-center">
                                        <p className="text-2xl">Max Price</p>
                                        <p className="font-bold text-xl">${priceValue}</p>
                                    </div>
                                </label>
                                <input type="range" name="destination" id="destination"
                                    className="appearance-auto  w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                                    min="150"
                                    max="1000"
                                    step="10"
                                    value={priceValue}
                                    onChange={(e) => setpriceValue(e.target.value)} />
                            </div>

                        </div> */}
                        <button to="/booking" onClick={() => handleBookingClick()} id="button" className="bg-blue-950 text-2xl font-serif font-bold  w-50 h-10 text-white
                            hover:scale-105  rounded-full  absolute duration-200 
                            -bottom-7  ">Book now</button>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Hero;