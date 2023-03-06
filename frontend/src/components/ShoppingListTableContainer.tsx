import React from "react";
import "./ShoppingListTableContainer.css";

const ShoppingListTableContainer = (props: any) => {
    return  <div className="ShoppingListTableContainer">
        {/* Will need to dynamically build these tables, just added dummy content for now */}

    <h3 className="TableTitle">Produce</h3>
    <table className="ShoppingListIngredients">
        <tr className="TableRow">
            <td>ingredient 1</td> 
        </tr>
        <tr className="TableRow">
            <td>ingredient 2</td> 
        </tr>
        <tr className="TableRow">
            <td>ingredient 3</td> 
        </tr>
    </table>

    <h3 className="TableTitle">Dairy</h3>
    <table className="ShoppingListIngredients">
        <tr className="TableRow">
            <td>ingredient 1</td> 
        </tr>
        <tr className="TableRow">
            <td>ingredient 2</td> 
        </tr>
        <tr className="TableRow">
            <td>ingredient 3</td> 
        </tr>
    </table>

    <h3 className="TableTitle">Meat</h3>
    <table className="ShoppingListIngredients">
        <tr className="TableRow">
            <td>ingredient 1</td> 
        </tr>
        <tr className="TableRow">
            <td>ingredient 2</td> 
        </tr>
        <tr className="TableRow">
            <td>ingredient 3</td> 
        </tr>
    </table>


</div>
}

export default ShoppingListTableContainer;