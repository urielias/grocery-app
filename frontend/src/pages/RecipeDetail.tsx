import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import "./RecipeDetail.css";
import { Recipe } from "../appTypes";
import axios from "axios";
import add from "../assets/add.svg";

const RecipeDetail = () => {
    const { global, setGlobal } = useContext(GlobalContext);
    const [recipeData, setRecipeData] = useState<Recipe>();

    useEffect(() => {
        axios
            .get(`${global.server}/recipes/get?id=${global.id}`)
            .then((res) => {
                setRecipeData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [global.server, global.id]);

    const addToGroceryList = () => {
        setGlobal({
            ...global,
            adding: true,
            id: undefined,
            currentPage: "list_editor",
            new_items: recipeData?.ingredients,
        });
    };

    return (
        <div className="RecipeDetailContentContainer">
            <div className="RecipeDetailTitle">
                <h1>{recipeData?.name}</h1>
                <button onClick={addToGroceryList}>
                    <img className="DetailAdd" src={add} alt="add recipe to shopping list" />
                </button>
            </div>
            <h3 className="DetailTags">{`${recipeData?.category}, Difficulty: ${recipeData?.difficulty}`}</h3>
            <div className="RecipeDetailMain">
                <div className="RecipeDetailImgContainer">
                    <img
                        className="RecipeDetailImg"
                        src={
                            global.images
                                ? global.images[Math.floor(Math.random() * global.images.length)]
                                : ""
                        }
                        alt="Completed recipe"
                    />
                </div>
                <div className="RecipeDetailTableContainer">
                    <h2 className="TableTitle">Ingredients:</h2>
                    <table className="RecipeDetailIngredients">
                        {recipeData && recipeData.ingredients ? (
                            recipeData.ingredients.map((ingredient) => {
                                return (
                                    <tr className="TableRow">
                                        <td>{ingredient}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </table>
                </div>
            </div>
            <div className="RecipeDescription">{recipeData?.instructions}</div>
        </div>
    );
};

export default RecipeDetail;
