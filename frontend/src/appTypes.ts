import { Dispatch, SetStateAction } from "react";

export type Page = "login" | "home" | "list_editor" | "recipe_detail" | "recipes" | "recipe_detail";

export type AppData = {
    currentPage: Page;
    server: string;
    userID?: number;
    adding?: boolean;
    id?: number;
    images?: string[];
    new_items?: string[];
};

export type AppContext = {
    global: AppData;
    setGlobal: Dispatch<SetStateAction<AppData>>;
};

export type GroceryList = {
    id: number;
    name: string;
    items: string[];
};

export type Recipe = {
    id: number;
    name: string;
    difficulty: number;
    category: string;
    description?: string;
    ingredients: string[];
    instructions: string;
};
