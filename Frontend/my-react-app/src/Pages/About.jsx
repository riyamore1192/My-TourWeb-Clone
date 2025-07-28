import React from "react";
import "../App.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
// import Location from "../componants/Location";

const About = () => {

    // const googleMapsURL = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=,&zoom=14`;

    return (
        <div className="container font-serif ">
            <div id="about">
                <h1 className=" text-cyan-700 pl-2 text-5xl font-bold">About us</h1><br />
                <p id="ex" className="text-4xl text-cyan-900">Explore the world with ease and adventure</p>
                <p id="ex" className="text-2xl text-cyan-900">We are a group of passionate travel enthusiasts dedicated
                    to making your journey seamless, fun, and unforgettable.
                    Our mission is to help you explore the hidden gems of the
                    world, one trip at a time.</p>
                <section id="ex" className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold text-cyan-900">What We Offer</h2>
                    <ol className="font-bold text-xl">
                        <div className="flex flex-row gap-2">
                            <span><FaArrowAltCircleRight /></span>
                            <li>Customizable Tours</li>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span><FaArrowAltCircleRight /></span>
                            <li>Expert Local Guides</li>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span><FaArrowAltCircleRight /></span>
                            <li>Adventure and Nature Excursions</li>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span><FaArrowAltCircleRight /></span>
                            <li>Seamless Booking Experience</li>
                        </div>
                    </ol>
                    <p className="text-2xl text-cyan-900">Our tours are designed to offer something unique, whether it's an adrenaline rush or a relaxing exploration of hidden wonders.</p>
                </section>
            </div>
            {/* <Location/> */}
            <div className="container">
                <h1 id="about" className=" text-cyan-700 text-5xl font-bold">Loction to Visit</h1>
                <div className="rounded-xl">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1119646.31076289!2d71.
                    78635320618106!3d22.81135391327732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin
                    !4v1743486189166!5m2!1sen!2sin" width="80%" height="350" allowfullscreen=""
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ borderRadius: "20px" }}></iframe>
                </div>
            </div>
        </div>
    )
}

export default About;