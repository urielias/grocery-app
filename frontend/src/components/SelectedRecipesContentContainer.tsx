import React from "react";
import "./SelectedrecipesContentContainer.css";
import SelectedRecipeCategory from "../components/SelectedRecipeCategory";
import CreateListBtn from "../components/CreateListBtn";

const SelectedRecipesContentContainer = (props: any) => {
    return <div className="SelectedRecipesContentContainer">
                <h1 className="RecipeCategoryTitle">Selected Recipes</h1>
                <SelectedRecipeCategory/>
                <CreateListBtn/>
            </div>
}

export default SelectedRecipesContentContainer;