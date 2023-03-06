import React from "react";
import "./ShoppingListContentContainer.css";
import ShoppingListMain from "../components/ShoppingListMain";
import ShoppingListTableContainer from "../components/ShoppingListTableContainer";

const ShoppingListContentContainer = (props: any) => {
    return (
        <div className="ShoppingListContentContainer">
            <div className="ShoppingListTitle">
                <h1>Shopping List</h1>
            </div>
            <ShoppingListMain />
            <ShoppingListTableContainer />
        </div>
    );
};

export default ShoppingListContentContainer;
