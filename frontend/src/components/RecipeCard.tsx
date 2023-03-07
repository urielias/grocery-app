import React from "react";
import "./RecipeCard.css";
import add from "../assets/add.svg";
import test_img from "../assets/test_img.jpg";
import { Recipe } from "../appTypes";

type RecipeCardProps = {
    recipe: Recipe
}


const RecipeCard = (props: RecipeCardProps) => {
    const { name, category, difficulty } = props.recipe;
    return (
        <div className = "RecipeCard">
            <div className="RecipeImgContainer">
                <img className="RecipeImg" src={test_img} alt="an image of food" />
                <button className="AddRecipeBtn"><img src={add} alt="add recipe to your list"/></button>
            </div>
                <div className="RecipeCardTitle">{name}</div>
            <div className="RecipeCardTags">{`${category}, Difficulty: ${difficulty}`}</div>
        </div>
    )
}

export default RecipeCard;