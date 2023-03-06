import React from "react";
import "./RecipeDetailMain.css";
import RecipeDetailImgContainer from "../components/SelectedRecipeCard";
import RecipeDetailTableContainer from "../components/ShoppingListTableContainer";


const ShoppingListMain = (props: any) => {
    return  <div className="ShoppingListMain">
        {/*will need to populate selected recipes and ingredients list dynamically  */}
                <SelectedRecipeCard/>
                <SelectedRecipeCard/>
                <SelectedRecipeCard/>
                <SelectedRecipeCard/>
                <SelectedRecipeCard/>
                <ShoppingListTableContainer/>
            </div>
}

export default ShoppingListMain;