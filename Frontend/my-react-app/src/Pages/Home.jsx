import React from "react";
// import bckimg from "../assets/bck.jpg"
import Hero from "../componants/Hero";
// import "../App.css";
import Banner from "../componants/Banner";
import video from "../assets/back-video.mp4"
import Place from "../componants/Places/Places";
import bckImg from "../assets/bck.jpg"
import Blog from "./Blog";
import secImg from "../assets/secondImage.jpg"
import SecondBanner from "../componants/Secondbanner/SecondBanner";
// import Testiminiol from "../componants/Testimonial";

const Home = () => {
    return (
        <div>
            <div className="relative h-[100vh]">
                <video autoPlay loop muted
                    className="absolute right-0 top-0 h-[100vh]
            w-400 opacity-90 object-cover z-[-1]">
                    <source src={video} />
                </video>
                <Hero />
            </div>
            <Place/>
            <Banner img={bckImg}/>
            <Blog />
            <Banner img={secImg}/>
            <SecondBanner/>
            {/* <Testiminiol /> */}
        </div>
    )
}

export default Home;