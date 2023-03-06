import React from "react";
import "./RecipeDetailImgContainer.css";
import test_img from "../assets/test_img.jpg";

const RecipeDetailImgContainer = (props: any) => {
    return  <div className="RecipeDetailImgContainer">
        {/* need to make img dynamic  */}
                 <img className="RecipeDetailImg" src={test_img} alt="Image of completed recipe"/>

            </div>
}

export default RecipeDetailImgContainer;