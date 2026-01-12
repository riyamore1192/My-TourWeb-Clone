import React from "react";
import { data, useLocation, useNavigate } from "react-router-dom";
import BlogComp from "../componants/blog/BlogComp";
import "../App.css"

const Blogdetail = () => {

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location, "useLocation");

  // Check if state exists
  if (!location.state) {
    // Optional: redirect back to /blog if state is missing
    navigate("/blog");
    return null; // render nothing while redirecting
  }
  const { img, title, date, discription, author } = location.state;

  return (
    <div id="detail" className="min-h-[550px] font-serif">
      <div className="h-[50vh] w-[70vw] overflow-hidden">
        <img src={img} alt=""
          className="h-[300px] w-full object-cover transition duration-700 hover:scale-110" />
      </div>
      <div className="container ">
        <p className="text-3xl font-bold text-amber-800">{" "}Written by {author} on date {date}</p>
        <p className="text-2xl font-bold text-blue-950">{title}</p>
        <p className="text-xl text-black">{discription}</p>
      </div>
      <BlogComp />
    </div>

  )
}

export default Blogdetail; 