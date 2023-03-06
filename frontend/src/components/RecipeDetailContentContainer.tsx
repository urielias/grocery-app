import React from "react";
import "./RecipeDetailContentContainer.css";
import RecipeDetailTitle from "../components/RecipeDetailTitle";
import RecipeDetailTags from "../components/RecipeDetailTags";
import RecipeDetailMain from "../components/RecipeDetailMain";


const RecipeDetailContentContainer = (props: any) => {
    return <div className="RecipeDetailContentContainer">
              <RecipeDetailTitle/>
              <RecipeDetailTags/>
              <RecipeDetailMain/>
            </div>
}

export default RecipeDetailContentContainer;