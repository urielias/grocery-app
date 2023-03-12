import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import "./HomePage.css";
import GroceryListCard from "../components/GroceryListCard";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { GroceryList, Recipe } from "../appTypes";

const bgColors = [
    "#066E7F",
    "#067F71",
    "#00B26B",
    "#0AC948",
    "#0ABF12"
];

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
        <div className="HomePageMain">
            <div>
                {
                    groceryLists.length > 0 ? <>
                        <h1>This are you current Grocery Lists:</h1>
                        <div className="RowContainer">
                            {
                                groceryLists.map((groceryList, index) => (
                                    <GroceryListCard key={index} groceryList={groceryList} bgColor={bgColors[index % bgColors.length]} />
                                ))
                            }
                        </div>
                    </> : <></>
                }
                <div className="ButtonContainer">
                    <button className="SubmitButton" onClick={() => {
                        setGlobal({ ...global, adding: true, currentPage: "list_editor" })
                    }}>
                        Add Grocery List
                    </button>
                </div>
            </div>
            <div>
                {
                    recipes.length > 0 ? <>
                        <h1>Recommended Recipes:</h1>
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
        </div>
    );
};


export default HomePage;