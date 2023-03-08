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
                        <a href="" className="NavLink">
                            My Grocery Lists
                        </a>
                    </button>
                    <button onClick={() => changePage("home")}>
                        <a href="" className="NavLink">
                            Browse Recipes
                        </a>
                    </button>
                    <button>
                        <a href="" className="NavLink">
                            Logout
                        </a>
                    </button>
                </span>
            ) : (
                <></>
            )}
        </div>
    );
};

export default NavBar;
