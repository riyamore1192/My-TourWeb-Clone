import React from "react";
// import Slider from "react-slick";
// import Image1 from "../assets/Samuel.png"
import Image2 from "../assets/img5.jpg"
import Image3 from "../assets/img3.jpg"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const TestimonialData = [
    {
        id: 1,
        name: "Samuel",
        text: `Samuel is a figure who, in the narratives of the Hebrew Bible,
     plays a key role in the transition from the biblical judges 
     to the United Kingdom of Israel under Saul, and again in the 
     monarchy's transition from Saul to David. `,
        // img: Image1
    },
    {
        id: 1,
        name: "Jhon doe",
        text: `A newly retired Warren Schmidt forces himself into seclusion
     after his wife suddenly dies. Faced with the prospect of an uncertain 
     future, he sets out to postpone the marriage of his daughter.`,
        img: Image2
    },
    {
        id: 1,
        name: "Smith",
        text: `John Doe" is a placeholder name used in legal and other
             contexts when a person's true identity is unknown, intentionally 
             concealed, or when a name is needed as an example. It's the male equivalent of "Jane Doe".  `,
        img: Image3
    },
]

const Testiminiol = () => {

    // var setting = {
    //     dots: true,
    //     arrows: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 2000,
    //     cssEase: "linear",
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     pauseOnHover: true,
    //     pauseOnFocus: true,
    //     responsive: [
    //         {
    //             breakpoint: 10000,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: true
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 initialSlide:2
    //             }
    //         },
    //         {
    //             breakpoint: 640,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // }

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   };

    return (
        <div className="">
            <div id="header" className="T-container font-serif md:text-center">
                {/* Hedare sexction */}
                <div className="text-center  max-w-[400px] ">
                    <p className="text-sm bg-clip-text text-cyan-300 font-bold">Testiminiol</p>
                    <h1 className="text-3xl font-bold">Testiminiol</h1>
                    <p className="text-2x1 text-gray-400">{" "}
                        India offers a diverse range of travel experiences, from historical
                        sites and spiritual centers to vibrant cities and natural wonders
                        popular destinations include the Taj Mahal, Golden Temple, and Goa beaches
                    </p>
                </div>
                {/* Testiminol section */}
                <div className="text-black">
                {/* <Slider {...settings}> */}
                        {
                            TestimonialData.map((img, id,text,name) => {
                                   <div key={id} className="my-6">
                                    <div>
                                        <img src={img} alt="" />
                                        <h1>{name}</h1>
                                        <p>{text}</p>
                                    </div>
                                   </div>
                            })
                        }
                 {/* </Slider> */}
                </div>
            </div>
        </div>
    )
}

export default Testiminiol;