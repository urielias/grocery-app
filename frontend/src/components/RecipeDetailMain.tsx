import React from "react";
import "./RecipeDetailMain.css";
import RecipeDetailImgContainer from "../components/RecipeDetailImgContainer";
import RecipeDetailTableContainer from "../components/RecipeDetailTableContainer";


const RecipeDetailMain = (props: any) => {
    return  <div className="RecipeDetailMain">
                <RecipeDetailImgContainer/>
                <RecipeDetailTableContainer/>
            </div>
}

export default RecipeDetailMain;