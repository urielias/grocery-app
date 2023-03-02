import React from "react";
import "./RecipeCard.css";
import add from "../assets/add.svg";
import test_img from "../assets/test_img.jpg";


const RecipeCard = (props: any) => {
    return (
        <div className = "RecipeCard">
            <div className="RecipeImgContainer">
                <img className="RecipeImg" src={test_img} alt="an image of food" />
                <button className="AddRecipeBtn"><img src={add} alt="add recipe to your list"/></button>
            </div>
                <div className="RecipeCardTitle">Recipe Title</div>
            <div className="RecipeCardTags"> Lunch, easy</div>
        </div>
    )
}

export default RecipeCard;