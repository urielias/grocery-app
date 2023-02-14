import React, { useContext } from "react";
import { GlobalContext } from "../App";

type GroceryListProps = {
    title: string;
    items: string[];
    id: number;
};

const GroceryListCard = (props: GroceryListProps) => {
    const { global, setGlobal } = useContext(GlobalContext);
    const { title, items, id } = props;

    const editList = () => {
        setGlobal({ ...global, list_id: id, adding: false, currentPage: "list_editor" });
    }

    return (
        <div>
            <h2>{title}</h2>
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
