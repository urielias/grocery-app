import React, { useState } from "react";
import './RecipeCard.css';
import './RecipeCardTabs';
import RecipeCardTabs from "./RecipeCardTabs";
import testImg from '../assets/pork_noodles.png'

const RecipeCard = (props: any) => { 
    return (
        <>
        <div className = "RecipeCardTitle">
            <h2>{props.props.name}</h2>
            <p>Category: {props.props.category}, Difficulty: {props.props.difficulty}</p>
        </div>

        <div className="ImageColumn">
            <div className="ImageContainer">
                    <img src={testImg} className="Image" />
            </div>

            <div className="TabContainer">
                <RecipeCardTabs props = {props.props} />
            </div>
        </div>
        </>
    )
}

export default RecipeCard;