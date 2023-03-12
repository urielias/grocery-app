import React from "react";
import "./RecipeDetailContentContainer.css";

const RecipeDetailContentContainer = (props: any) => {
    return (
        <div className="RecipeDetailContentContainer">
            <div className="RecipeDetailTitle">
                <h1>Recipe Title</h1>
                <img className="DetailAdd" src={""} alt="add recipe to shopping list" />
            </div>
            <div className="DetailTags">
                {/* will need to make these tags dynamic */}
                Lunch, Easy, Healthy
            </div>
            <div className="RecipeDetailMain">
                <div className="RecipeDetailImgContainer">
                    {/* need to make img dynamic  */}
                    <img className="RecipeDetailImg" src={""} alt="Image of completed recipe" />
                </div>
                <div className="RecipeDetailTableContainer">
                    <h3 className="TableTitle">Ingredients</h3>
                    {/* will need to make elements within table dynamic */}
                    <table className="RecipeDetailIngredients">
                        <tr className="TableRow">
                            <td>ingredient 1</td>
                        </tr>
                        <tr className="TableRow">
                            <td>ingredient 2</td>
                        </tr>
                        <tr className="TableRow">
                            <td>ingredient 3</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetailContentContainer;
