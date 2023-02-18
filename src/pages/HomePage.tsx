import React, { useContext } from "react";
import { GlobalContext } from "../App";
import GroceryListCard from "../components/GroceryListCard";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
    const { global, setGlobal } = useContext(GlobalContext);

    return (
        <div>
            <h1 className="App">Welcome to the grocery list app!!</h1>
            <h3>This are you current Grocery Lists:</h3>
            {global.grocery_lists.map((grocery_list) => (
                <GroceryListCard title={grocery_list.title} items={grocery_list.items} />
            ))}
            {global.recipes.map((recipe) => (
                <RecipeCard props = {recipe} />
            ))}
        </div>
    );
};


export default HomePage;