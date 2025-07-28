import react from "react";

import "../../App.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/Img2.jpg"
import img3 from "../../assets/Img3.jpg"
import img4 from "../../assets/Img4.jpg"
import img5 from "../../assets/Img5.jpg"
import img6 from "../../assets/Img6.jpg"
import PlacesCard from "./PlacesCard";


const Place = () => {

    const PlaceData = [
        {
            img:img1,
            title :"Boat",
            location : "USA",
            description : "A boat tour is a short, touristic trip on a small boat lakes, canals, or even the ocean.",
            price : 6700,
            type:"Cultural Relax"
          },{
            img:img2,
            title :"Taj Mahal",
            location : "India",
            description : "The Taj Mahal is a white marble mausoleum in Agra built by Mughal emperor Shah Jahan in memory of his wife, Mumtaz Mahal,",
            price : 6700,
            type:"Cultural Relax"
          },{
            img:img3,
            title :"Underwater",
            location : "US",
            description : "the gateway to a universe of wonders beneath the waves, where colorful fish,",
            price : 6200,
            type:"Cultural Relax"
          },   
          {
            img:img4,
            title :"Sydney",
            location : "USA",
            description : "Australia's largest city and the capital of New South Wales, is renowned for its iconic harbor",
            price : 6700,
            type:"Cultural Relax"
          },
          {
            img:img5,
            title :"Los Angeles",
            location : "United States",
            description : "United States, known as the due to its prominent role in the movie and television industry, ",
            price : 6700,
            type:"Cultural Relax"
          },
          {
            img:img6,
            title :"Los Angeles",
            location : "California",
            description : " California, is a sprawling city known as and the Entertainment Capital of the World",
            price : 6200,
            type:"Cultural Relax"
          },
    ]
    return (
        <div className="bg-gray-200 py-10">
            <div className="container">
               
                <h1 id="bord" className="text-cyan-800 font-bold text-6xl font-serif">
                Best Places to visit
                </h1>
                <hr id="line"/>
                <div id="place" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        PlaceData.map((item,index) => (
                            <PlacesCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Place;