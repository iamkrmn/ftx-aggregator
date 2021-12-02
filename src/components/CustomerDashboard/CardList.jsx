import React from "react";
import Card from "./Card";

const CardList = props => {
    return(
        <div className = "card-container"> 
            <Card /> 
            <Card />
            <Card />
        </div>
    )
};

export default CardList;