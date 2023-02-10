import React, { createContext, useState, Dispatch, SetStateAction } from "react";
import recipeFile from "./assets/recipes.json";
import HomePage from "./pages/HomePage";

type Page = "home" | "list_editor" | "recipe_detail";

type AppData = {
    grocery_lists: any[],
    recipes: any[],
    currentPage: Page
};

type AppContext = {
    global: AppData,
    setGlobal: Dispatch<SetStateAction<AppData>>
};

export const GlobalContext = createContext<AppContext>({
    global: {
        grocery_lists: [],
        recipes: [],
        currentPage: "home"
    },
    setGlobal: () => {}
});

const PageSwitcher = (props: { page: Page }) => {
    const { page } = props;
    switch (page) {
        case "home":
            return <HomePage />
    }
    return <HomePage />
}


const App = () => {
    const [global, setGlobal] = useState<AppData>({
        grocery_lists: [],
        recipes: recipeFile.recipes,
        currentPage: "home"
    });

    return (
        <GlobalContext.Provider value={{ global, setGlobal }}>
            <PageSwitcher page={global.currentPage} />
        </GlobalContext.Provider>
    );
}

export default App;