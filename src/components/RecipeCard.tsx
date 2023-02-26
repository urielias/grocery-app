import React from "react";
import add from "src/assets/add.svg";


const RecipeCard = (props: any) => {
    return <div className = "RecipeCard">
                <div className="RecipeImgContainer">
                     {/* <img className="RecipeImg" src="assets/test_img.jpg" alt="an image of food"> */}
                    <button className="AddRecipeBtn"><img src={add} alt="add recipe to your list"/></button>
                </div>
                    <div className="RecipeCardTitle">Recipe Title</div>
                <div class="RecipeCardTags"> Lunch, easy</div>
            </div>
}

export default RecipeCard;