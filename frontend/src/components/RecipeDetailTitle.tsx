import React from "react";
import "./RecipeDetailTitle.css";
import add from "../assets/add.svg";

const RecipeDetailTitle = (props: any) => {
    return  <div className="RecipeDetailTitle">
                <h1>Recipe Title</h1>
                 <img className="DetailAdd" src={add} alt="add recipe to shopping list"/>
            </div>
}

export default RecipeDetailTitle;