import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { GlobalContext } from "../App";
import "./NavBar.css";
import { Page } from "../appTypes";

const NavBar = (props: { rightNav: boolean }) => {
    const { rightNav } = props;
    const { global, setGlobal } = useContext(GlobalContext);

    const changePage = (page: Page) => {
        setGlobal({ ...global, currentPage: page });
    };

    return (
        <div className="NavBar">
            <span className="LeftNav">
                <button onClick={() => changePage("home")}>
                    <img className="AppLogo" src={logo} alt="Freshly grocery app logo" />
                </button>
            </span>
            {rightNav ? (
                <span className="RightNav">
                    <button onClick={() => changePage("home")}>
                        <p className="NavLink">
                            My Grocery Lists
                        </p>
                    </button>
                    <button onClick={() => changePage("recipes")}>
                        <p  className="NavLink">
                            Browse Recipes
                        </p>
                    </button>
                    <button onClick={() => changePage("login")}>
                        <p className="NavLink">
                            Logout
                        </p>
                    </button>
                </span>
            ) : (
                <></>
            )}
        </div>
    );
};

export default NavBar;
