import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar2.css";
import logo from "../../assets/logo2.png"
import { FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleLoginClick = () => {
      navigate('/login'); // Navigate to the login page
    };
  

    return (

        <div className="navbar ">
            <label onClick={toggleMenu} >
                <CgMenu id="btn" className={menuOpen ? "hidden" : ""} />
            </label>


            <div className="logo">
                <img src={logo} />
            </div>
            <nav>
                <ul className={`nav-list ${menuOpen ? "open" : ''} font-serif`} >
                    <li> <NavLink to="/" onClick={() => window.scrollTo(0, 0)}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >
                        Home</NavLink>
                    </li>
                    <li> <NavLink to="/blog" onClick={() => window.scrollTo(0, 0)}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >
                        Blogs</NavLink>
                    </li>
                    <li> <NavLink to="/places" onClick={() => window.scrollTo(0, 0)}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >
                        Best Place</NavLink>
                    </li>
                    <li> <NavLink to="/about" onClick={() => window.scrollTo(0, 0)}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        About</NavLink>
                    </li>
                    <button id="Navlogin" to="/login" onClick={() => handleLoginClick() }
                     className="text-xl font-bold rounded-full bg-amber-600 ">
                        Login Now</button>

                        {/* <li><NavLink to="/cart" className="cart-trolly">
                        <FaShoppingCart className="cart-icon" />
                    </NavLink></li> */}
                </ul>
            </nav>
        </div>

    )
}

export default Navbar;