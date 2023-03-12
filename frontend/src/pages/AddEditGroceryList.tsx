import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddEditGroceryList.css";
import sub from "../assets/sub.svg";

const AddEditGroceryList = () => {
    const { global, setGlobal } = useContext(GlobalContext);
    const [items, setItems] = useState(["item1"]);
    const adding = global.adding;
    const { register, handleSubmit, setValue } = useForm({ shouldUseNativeValidation: true });

    useEffect(() => {
        if (adding) {
            return;
        }

        axios
            .get(`${global.server}/grocerylists/get?list=${global.id}`)
            .then((res) => {
                let listItems = res.data.items.map((item: any, index: number) => `item${index + 1}`);
                setItems(listItems);
                setValue("name", res.data.name);

                for (let i = 0; i < listItems.length; i++) {
                    setValue(listItems[i], res.data.items[i]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [adding]);

    const addItem = () => {
        setItems([...items, "item" + (items.length + 1).toString()]);
    };

    const removeItem = () => {
        setItems(items.slice(0, items.length - 1));
    };

    const saveGroceryList = (data: any) => {
        let groceryList = {
            name: data.name,
            items: items.map((item) => data[item]),
        };

        if (adding) {
            axios
                .post(`${global.server}/grocerylists/new`, { ...groceryList, user_id: global.userID })
                .then((res) => {
                    setGlobal({ ...global, currentPage: "home", id: undefined, adding: undefined });
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            axios
                .post(`${global.server}/grocerylists/edit`, { ...groceryList, id: global.id })
                .then((res) => {
                    setGlobal({ ...global, currentPage: "home", id: undefined, adding: undefined });
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    const deleteList = () => {
        axios
            .post(`${global.server}/grocerylists/delete`, { id: global.id })
            .then((res) => {
                setGlobal({ ...global, currentPage: "home", id: undefined, adding: undefined });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <div className="AddEditListTitle">
                <h1>{adding ? "Add" : "Edit"} a Grocery List</h1>
                <button className="DeleteListButton" onClick={deleteList}>
                    <img src={sub} alt="Remove list" />
                </button>
            </div>
            <form className="AddEditGroceryForm" onSubmit={handleSubmit(saveGroceryList)}>
                <li>
                    <ul>
                        <label htmlFor="name">List name</label>
                        <input id="name" {...register("name")} placeholder="List name"></input>
                    </ul>
                    {items.map((item) => (
                        <ul>
                            <label htmlFor={item}>Item</label>
                            <input id={item} {...register(item)} placeholder="Item"></input>
                        </ul>
                    ))}
                </li>
                <div className="FlexRowContainer">
                    {items.length > 1 ? (
                        <button className="SecondaryButton" type="button" onClick={removeItem}>
                            Remove Item
                        </button>
                    ) : (
                        <></>
                    )}
                    <button className="SubmitButton" type="button" onClick={addItem}>
                        Add Item
                    </button>
                </div>

                <div className="FlexColumnContainer">
                    <button className="SubmitButton" type="submit">
                        Save list
                    </button>
                    <button
                        className="SecondaryButton"
                        type="button"
                        onClick={() => {
                            setGlobal({ ...global, currentPage: "home" });
                        }}
                    >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEditGroceryList;
