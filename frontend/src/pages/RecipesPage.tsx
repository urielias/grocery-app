import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import "./RecipesPage.css";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { Recipe } from "../appTypes";

const RecipesPage = () => {
    const { global, setGlobal } = useContext(GlobalContext);
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        axios
            .get(`${global.server}/recipes`)
            .then((res) => {
                setRecipes(res.data.recipes);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [global.userID]);

    let seenCategories = new Set<string>();

    for (let recipe of recipes) {
        seenCategories.add(recipe.category);
    }

    const categories = Array.from(seenCategories);

    return (
        <div className="RecipesPageMain">
            {categories.map((category) => {
                let filtered = recipes.filter((recipe) => recipe.category == category);
                return (
                    <div>
                        <h1>{category}</h1>
                        <div className="RowContainer">
                            {filtered.map((recipe, index) => (
                                <RecipeCard key={index} recipe={recipe} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RecipesPage;
