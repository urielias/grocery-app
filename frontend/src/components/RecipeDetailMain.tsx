import React from "react";
import "./RecipeDetailMain.css";

const RecipeDetailMain = (props: any) => {
    return (
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
    );
};

export default RecipeDetailMain;
