import React from "react";
import "../../App.css"
// import Img1 from "../../assets/img1.jpg"
import BlogCard from "./BlogCard";
import img4 from "../../assets/img4.jpg"
import img2 from "../../assets/Img2.jpg"
import img5 from "../../assets/Img5.jpg"

const BlogData = [
    {
        id: 1,
        img: img2,
        title: "The 10 best places to visit in india",
        discription: `India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches.discription: 
          "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:discription: "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
           popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",           author:discription: "India offers a diverse range of travel experiences, from historical
          sites and spiritual centers to vibrant cities and natural wonders
           popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:discription: "India offers a diverse range of travel experiences, from historical
       sites and spiritual centers to vibrant cities and natural wonders
       popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:`,
        author: "john doe",
        date: "April,2022"
    },
    {
        id: 1,
        img: img4,
        title: "The 10 best places to visit in india",
        discription: `India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches.discription: 
          "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:discription: "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:discription: "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:discription: "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:`,
        author: "john doe",
        date: "April,2022"
    },
    {
        id: 1,
        img: img5,
        title: "The 10 best places to visit in india",
        discription: `India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches.discription: 
          "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:discription: "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:discription: "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:discription: "India offers a diverse range of travel experiences, from historical
         sites and spiritual centers to vibrant cities and natural wonders
          popular destinations include the Taj Mahal, Golden Temple, and Goa beaches. ",
          author:`,
        author: "john doe",
        date: "April,2022"
    },

]

const BlogComp = () => {
    return (
        <div>
            <div data-aos="fade-up" className="container">
                <h1 id="bord" className="text-cyan-800 font-bold text-6xl font-serif">
                    Our latest Blog
                </h1>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                   {
                        BlogData.map((item, index) => (
                            <BlogCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogComp;