import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <div className="accountBalance">
        <div className="balText"> Wallet : {props.walletBalance}</div>
      </div>
    </div>
  );
};


export default Header;