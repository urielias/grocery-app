import React, { useContext } from "react";
import { GlobalContext } from "../App";
import GroceryListCard from "../components/GroceryListCard";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
    const { global, setGlobal } = useContext(GlobalContext);

    return (
        <div>
            <h1>Welcome to the grocery list app!!</h1>
            <h2>This are you current Grocery Lists:</h2>
            {global.grocery_lists.map((grocery_list, index) => (
                <GroceryListCard title={grocery_list.name} items={grocery_list.items} id={index} />
            ))}
            <h2>Recommended Recipes:</h2>
            {global.recipes.map((recipe) => (
                <RecipeCard />
            ))}
            <button onClick={() => {
                setGlobal({ ...global, adding: true, currentPage: "list_editor" })
            }}>Add Grocery List</button>
        </div>
    );
};


export default HomePage;