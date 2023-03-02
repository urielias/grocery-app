import React from "react";
import logo from "src/assets/logo.svg";
import "./NavBar.css";

const NavBar = (props: any) => {
    return   <div className= "NavBar"> 
                <span className="LeftNav">
                    <img src={logo} alt="Freshly grocery app logo"/> 
                </span>
                <span className="RightNav"> 
                    <a href="" className="NavLink">Browse</a>
                    <a href="" className="NavLink">Selected Recipes</a>
                    <a href="" className="NavLink">Shopping List</a>
                </span>
            </div>
}

export default NavBar;