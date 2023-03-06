import React from "react";
import "./RecipeDetailTableContainer.css";

const RecipeDetailTableContainer = (props: any) => {
    return  <div className="RecipeDetailTableContainer">
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
}

export default RecipeDetailTableContainer;