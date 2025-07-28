import React from "react";
import footervideo from "../../assets/Footer.mp4";
import logo from "../../assets/logo2.png";
import "../../App.css"
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";


// const navigate = useNavigate("");

// const home = () => {
//     navigate("/")
// }

// const place = () => {
//     navigate("/places")
//}


const FooterLink = [
    {
        id:1,
        title: "Home",
        link: "/"
    },
    {
        id:2,
        title: "About",
        link: "/about"
    },
    {
        id:3,
        title: "Best-Places",
        link: "/best-places"
    },
    {
        id:4,
        title: "Blogs",
        link: "/blog"
    },
]

const Footer = () => {
    return (
        <div className="relative h-full overflow-hidden">
            <video autoPlay loop muted className="absolute right-0 top-0 h-full 
            w-full object-cover z-[-1]" >
                <source src={footervideo} type="video/mp4" />
            </video>
            <div className="w-[90vw] h-[70vh]">
                <div id="footer" className="grid  md:grid-cols-3 py-5  bg-yellow-50
                   backdrop:backdrop-blur-sm  rounded-2xl">
                <div id="one" className="font-serif">
                        <h1 className="flex items-center gap-3 text-xl 
                    sm:text-3xl font-bold text-justify sm:text-left">
                            <img src={logo} alt="" className="h-[23vh] sm:h-20vh ml-3" />
                        </h1>
                        <h2>Ready to Explore?</h2>
                        <p>Book your next adventure with us and discover the world like never before.</p>
                        <br />
                        <p>Contact us</p>
                        <div className="flex items-center font-bold gap-3 mt-3">
                            <FaLocationArrow />
                            <p>Gujrat,india</p>
                        </div>
                        <div className="flex items-center font-bold  gap-3 mt-3">
                            < FaMobileScreen />
                            <p>+658585793</p>
                        </div>
                        <br />
                    </div>
                    {/* Footer links */}
                    <div className="grid  grid-cols-1 sm:grid-cols-2 col-span-2 md:pl-10">
                        {/* first link section */}
                        <div id="LINK">
                            <div className="flex flex-col gap-4 font-serif px-4">
                                <h1 className="text-3xl font-bold text-justify sm:text-left mb-3">Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLink.map(({ title, link, id }) => (
                                        <li  key={id} className="cursor-pointer text-3xl font-bold hover:!text-red duration-300
                                         space-x-1 text-gray-700">
                                            <Link to={link} onClick={() => {
                                                window.scrollTo(0, 0);
                                            }}></Link>
                                            <span>&#11162;</span>
                                            <span>{title}</span>
                                        </li>
                                    ))}
                                    {/* <li to="/" onClick={() => home()}>Home</li> */}
                                    {/* <li to="/places" onClick={() => place()}>Blogs</li> */}
                                </ul>
                            </div>
                        </div>
                        {/* Second link section */}
                        <div id="social">
                            <div className="flex flex-col gap-6 font-serif ">
                                <h1 className="text-3xl font-bold text-justify sm:text-left mb-3">
                                    Social media Links</h1>
                                <div className="flex items-center flex-col gap-5 mt-6">
                                    <a href="#">
                                        <FaInstagramSquare className="text-5xl" />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className="text-5xl" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-5xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;