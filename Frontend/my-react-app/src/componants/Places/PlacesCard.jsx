import react from "react";
import { FaLocationDot } from "react-icons/fa6";

const PlacesCard = ({ img, title, location, description, price, type }) => {
    return (
        <div id="tour" className=" shadow-gray-600 shadow-lg transition-all duration-500  hover:shadow-xl cursor-pointer">
            <div className="overflow-hidden">
                <img src={img} alt=""
                    className="mx-auto h-[220px] w-200 object-cover transition 
                duration-700 hover:skew-x-2 hover:scale-110"/>
            </div>
            <div id="card" className="text-3xl text-rose-500 font-serif space-y-2 p-3 ">
                <h1 className="font-bold">{title}</h1>
                <div className="flex items-center text-2xl text-indigo-950 gap-4 opacity-70">
                <FaLocationDot />
                    <span>{location}</span>
                </div>
                <p className="line-clamp-2 text-xl text-black">{description}</p>
                <div className="flex  font-serif items-center justify-between border-t-2 y-3 !mt-3">
                    <div className="opacity-70 text-2xl text-blue-500">
                        <p>{type}</p>
                    </div>
                    <div><p className="text-3xl text-blue-500 font-bold">${price}</p></div>
                </div>
            </div>
        </div>
    )
}

export default PlacesCard