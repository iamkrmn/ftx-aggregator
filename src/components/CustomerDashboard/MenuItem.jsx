import React, { useState } from "react";

const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <div className="item-name"> {props.itemName} </div>
      <div className="price">{props.price}</div>
      <div className="qty">{props.quantity}</div>
      <div className="more" onClick={() => props.setOrder(props.itemId, props.price)}> </div>
    </div>
  );
};

export default MenuItem;
