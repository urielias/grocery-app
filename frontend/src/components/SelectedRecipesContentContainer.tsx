import React from "react";
import "./SelectedrecipesContentContainer.css";
import SelectedRecipeCategory from "../components/SelectedRecipeCategory";
import SelectedRecipesCreateListBtn from "../components/SelectedRecipesCreateListBtn";

const SelectedRecipesContentContainer = (props: any) => {
    return (
        <div className="SelectedRecipesContentContainer">
            <h1 className="RecipeCategoryTitle">Selected Recipes</h1>
            <SelectedRecipeCategory />
            <SelectedRecipesCreateListBtn />
        </div>
    );
};

export default SelectedRecipesContentContainer;
