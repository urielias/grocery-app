import React, { useState } from "react";
import './RecipeCard.css';
import './RecipeCardTabs';
import RecipeCardTabs from "./RecipeCardTabs";
import testImg from '../assets/pork_noodles.png'

const RecipeCard = (props: any) => { 
    return (
        <div className = "recipe-card-container">
            <div className = "cell left-cell">
                <div className = "holder">
                    <h2 className = "headertext">{props.props.name}</h2>
                    <p>Category: {props.props.category}, Difficulty: {props.props.difficulty}</p>
                    <img src={testImg} alt={props.props.name} className="Image" />
                </div>
            </div>
            
            <div className = "cell right-cell">
            <RecipeCardTabs props = {props.props} />
            </div>

        </div>
    )
}

export default RecipeCard;