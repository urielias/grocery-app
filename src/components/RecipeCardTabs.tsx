import React, { useState } from "react";
import './RecipeCardTabs.css';

const RecipeCardTabs = (props: any) => {

    // Create Tabs with React
    // https://www.youtube.com/watch?v=WkREeDy2WQ4

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    }

    // console.log("RecipeCardTabs");
    
    return (
    
    <div className="RecipeCardContainer">
        
        <div className="TabContainer">
            <div
            className={toggleState === 1 ? "Tab Tab-Selected" : "Tab"}
            onClick={() =>toggleTab(1)}
            >Ingredients</div>

            <div
            className={toggleState === 2 ? "Tab Tab-Selected" : "Tab"}
            onClick={() =>toggleTab(2)}
            >Instructions</div>

            <div 
            className={toggleState === 3 ? "Tab Tab-Selected" : "Tab"}
            onClick={() =>toggleTab(3)}
            >Equipment</div>
        </div>

        <div className="TabContentContainer">
            <div className={toggleState === 1 ? "TabContent TabContent-Selected" : "TabContent"}>
                <h2>Ingredients</h2>
                <hr/>
                {props.props.ingredients.map((ingredients: string )=>
                (
                    <p>{ingredients}</p>
                ))}
               
            </div>

            <div className={toggleState === 2 ? "TabContent TabContent-Selected" : "TabContent"}>
            <h2>Instructions</h2>
                <hr/>
                <p>{props.props.instructions}</p>
            </div>

            <div className={toggleState === 3 ? "TabContent TabContent-Selected" : "TabContent"}>
            <h2>Equipment</h2>
                <hr/>
                {/* map equipment  */}

                <p> blender</p>
                <p> stove</p>
                <p> knife</p>
            </div>
        </div>
    </div>
    )
}

export default RecipeCardTabs;