import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, discription, id, author, date }) => {
    return (
        <Link
            to={`/blog/${title}`}
            onClick={() => {
                window.scrollTo(0, 0);
            }}
            state={{ img, title, discription, id, author, date }}
        >
            <div id="box" className="  shadow-amber-900 text-blue-700 transition-all duration-900 hover:shadow-xl">
                <div className="overflow-hidden">
                    <img id="d-img" src={img} alt="" className="mx-auto  h-[50vh] w-full object-cover transition-all 
                duration-700 hover:scale-110" />
                </div>
                <div className="flex justify-between  text-2xl font-serif text-fuchsia-700">
                    <p className="font-bold">{date}</p>
                    <p>by {author}</p>
                </div>
                <div className="space-y-2">
                    <p className="line-clamp-1 text-2xl font-serif  font-bold">{title}</p>
                    <p className="line-clamp-2 text-xl font-serif">{discription}</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;