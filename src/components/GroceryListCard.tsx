import React from "react";

type GroceryListProps = {
    title: string;
    items: string[];
};

const GroceryListCard = (props: GroceryListProps) => {
    const title = props.title;
    const items = props.items;
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
        </div>
    );
};

export default GroceryListCard;
