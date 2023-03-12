import React, { useContext } from "react";
import { GlobalContext } from "../App";
import { GroceryList } from "../appTypes";
import add from "../assets/add.svg";
import "./GroceryListCard.css";

type GroceryListProps = {
    groceryList: GroceryList;
    bgColor: string;
};

const GroceryListCard = (props: GroceryListProps) => {
    const { global, setGlobal } = useContext(GlobalContext);
    const { id, name, items } = props.groceryList;
    const { bgColor } = props;

    const editList = () => {
        setGlobal({ ...global, id: id, adding: false, currentPage: "list_editor" });
    };

    return (
        <div className="GroceryListCardMain" style={{ backgroundColor: bgColor }}>
            <h2>{name}</h2>
            
            <ul>
                {items.slice(0, 5).map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <button className="EditListButton" onClick={editList}>
                <img src={add} alt="add recipe to your list" />
            </button>
        </div>
    );
};

export default GroceryListCard;
