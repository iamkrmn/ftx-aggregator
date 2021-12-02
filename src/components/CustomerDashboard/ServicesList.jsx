import React from "react";
import CardList from "./CardList";

const ServicesList = props => {
    return(
        <div className = "services-list">
            <CardList {...props}/>
        </div>
    )
}

export default ServicesList;