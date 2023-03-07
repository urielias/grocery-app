import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import "./HomePage.css";
import "./GlobalStyling.css";
import GroceryListCard from "../components/GroceryListCard";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { GroceryList, Recipe } from "../appTypes";

const HomePage = () => {
    const { global, setGlobal } = useContext(GlobalContext);
    const [ groceryLists, setGroceryLists ] = useState<GroceryList[]>([]);
    const [ recipes, setRecipes ] = useState<Recipe[]>([]);

    useEffect(() => {
        axios.get(`${global.server}/grocerylists?user=${global.userID}`).then((res) => {
            setGroceryLists(res.data.grocery_lists);
        }).catch((err) => {
            console.error(err);
        });
        
        axios.get(`${global.server}/recipes`).then((res) => {
            setRecipes(res.data.recipes);
        }).catch((err) => {
            console.error(err);
        });

    }, [global.userID]);

    return (
        <div>
            <h1>Welcome to the grocery list app!!</h1>
            {
                groceryLists.length > 0 ? <>
                    <h2>This are you current Grocery Lists:</h2>
                    <div className="RowContainer">
                        {
                            groceryLists.map((groceryList, index) => (
                                <GroceryListCard key={index} groceryList={groceryList}  />
                            ))
                        }
                    </div>
                </> : <></>
            }
            <div className="ButtonContainer">
                <button onClick={() => {
                    setGlobal({ ...global, adding: true, currentPage: "list_editor" })
                }}>
                    Add Grocery List
                </button>
            </div>
            {
                recipes.length > 0 ? <>
                    <h2>Recommended Recipes:</h2>
                    <div className="RowContainer">
                        {
                            recipes.map((recipe, index) => (
                                <RecipeCard key={index} recipe={recipe} />
                            ))
                        }
                    </div>
                </> : <></>
            }
        </div>
    );
};


export default HomePage;