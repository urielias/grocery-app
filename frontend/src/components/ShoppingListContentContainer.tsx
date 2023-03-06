import React from "react";
import "./ShoppingListContentContainer.css";
import RecipeDetailMain from "../components/ShoppingListMain";
import RecipeDetailMain from "../components/ShoppingListTableContainer";


const RecipeDetailContentContainer = (props: any) => {
    return <div className="ShoppingListContentContainer">
               <div className="ShoppingListTitle">
                    <h1>Shopping List</h1>
                </div>
              <ShoppingListMain/>
              <ShoppingListTableContainer/>
            </div>
}

export default ShoppingListContentContainer;