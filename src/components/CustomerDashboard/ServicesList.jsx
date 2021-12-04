import React from "react";
import CardList from "./CardList";

const ServicesList = props => {
    return(
        <div className = "services-list">
            <span className="service-header">Choose a Subscription to proceed </span>
            <CardList {...props}/>
        </div>
    )
}

export default ServicesList;