import React from "react";
import "./SelectedRecipeCard.css";
import sub from "../assets/sub.svg";
import test_img from "../assets/test_img.jpg";


const SelectedRecipeCard = (props: any) => {
    return (
        // need to make recipe cards dynamic
        <div className = "SelectedRecipeCard">
            <div className="RecipeImgContainer">
                <img className="RecipeImg" src={test_img} alt="an image of food" />
                <button className="SubRecipeBtn"><img src={sub} alt="remove recipe from your list"/></button>
            </div>
                <div className="RecipeCardTitle">Recipe Title</div>
            <div className="RecipeCardTags"> Lunch, easy</div>
        </div>
    )
}

export default SelectedRecipeCard;