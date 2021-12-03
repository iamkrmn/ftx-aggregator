import React from "react";
import Card from "./Card";

const CardList = props => {

    const handleFoodClick = () => {
        props.setServiceSelected("Food");
    }

    const handleGymClick = () => {
        props.setServiceSelected("Gym");
    }

    const handleGroceryClick = () => {
        props.setServiceSelected("Grocery");
    }

    return(
        <div className = "card-container"> 
            <Card footerContent={"Food"} background={"burger.png"} handleCardClick={handleFoodClick}/> 
            <Card footerContent={"Health & Fitness"} background={"dumbell.png"} handleClick={handleGymClick}/>
            <Card footerContent={"Groceries"} background={"grocery.png"} handleClick={handleGroceryClick}/>
        </div>
    )
};

export default CardList;