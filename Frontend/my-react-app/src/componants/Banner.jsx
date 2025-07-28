import React from "react";

const Banner = ({img}) => {
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
    };
    return (
        <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}></div>
    )
}

export default Banner
