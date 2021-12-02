import React from "react";

const Card = props => {
    return(
        <div className = "service-card" onClick={props.handleCardClick} style={{ backgroundImage: `url(${props.background})` }}> 
            <div className="card-content">
                {props.footerContent}
            </div>
        </div>
    )
}

export default Card;
