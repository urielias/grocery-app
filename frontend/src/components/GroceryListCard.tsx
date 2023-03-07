import React, { useContext } from "react";
import { GlobalContext } from "../App";
import { GroceryList } from "../appTypes";

type GroceryListProps = {
    groceryList: GroceryList
};

const GroceryListCard = (props: GroceryListProps) => {
    const { global, setGlobal } = useContext(GlobalContext);
    const { id, name, items } = props.groceryList;

    const editList = () => {
        setGlobal({ ...global, id: id, adding: false, currentPage: "list_editor" });
    }

    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {
                    items.slice(0, 5).map((item) => (
                        <li>{item}</li>
                    ))
                }
            </ul>
            <button onClick={editList}>Edit</button>
        </div>
    );
};

export default GroceryListCard;
