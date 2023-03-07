import React, { useContext, useState } from "react"
import { GlobalContext } from "../App";
import { useForm } from "react-hook-form";
import "./GlobalStyling.css";
import axios from "axios";


const AddEditGroceryList = () => {
    const { global, setGlobal } = useContext(GlobalContext);
    const [ items, setItems ] = useState(["item1"]);
    const adding = global.adding;
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

    const addItem = () => {
        setItems([...items, "item" + (items.length + 1).toString()]);
    }

    const removeItem = () => {
        setItems(items.slice(0, items.length - 1));
    }

    const saveGroceryList = (data: any) => {
        let groceryList = {
            name: data.name,
            items: items.map((item) => data[item])
        }

        if (adding) {
            axios.post(`${global.server}/grocerylists/new`, { ...groceryList, user_id: global.userID }).then((res) => {
                console.log(res.data);
                setGlobal({ ...global, currentPage: "home", id: undefined, adding: undefined });
            }).catch((err) => {
                console.error(err);
            });
        } else {
            axios.post(`${global.server}/grocerylists/edit`, { ...groceryList, id: global.id }).then((res) => {
                console.log(res.data);
                setGlobal({ ...global, currentPage: "home", id: undefined, adding: undefined });
            }).catch((err) => {
                console.error(err);
            });
        }
    }

    return (
        <div>
            <h1>{ adding ? "Add" : "Edit" } a Grocery List</h1>
            <form onSubmit={handleSubmit(saveGroceryList)}>
                <li>
                    <ul>
                        <label htmlFor="name">List name</label>
                        <input id="name" {...register("name")} placeholder="List name"></input>
                    </ul>
                    {
                        items.map((item) => (
                            <ul>
                                <label htmlFor={item}>Item</label>
                                <input id={item} {...register(item)} placeholder="Item"></input>
                            </ul>
                        ))
                    }
                </li>
                <button type="button" onClick={addItem}>Add Item</button>
                {
                    items.length > 1 ? <button type="button" onClick={removeItem}>Remove Item</button> : <></>
                }
                <button type="submit">Save list</button>
            </form>
            <button onClick={() => {
                setGlobal({...global, currentPage: "home"})
            }}>Back</button>
        </div>
    )
}

export default AddEditGroceryList