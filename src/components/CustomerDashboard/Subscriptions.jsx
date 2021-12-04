import React from "react";
import Card from "./Card";

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
        <div className="services-list">
            <span className="service-header"> Your active subscriptions </span>
            <div className="card-container">
                {
                    this.props.subscriptions.map((Subscription, key) => 
                        <Card footerContent={"Food"} background={"burger.png"} handleCardClick={() => this.props.setSubscriptionSelected(Subscription)}/> 
                    )
                }
            </div>
        </div>
    );
  }
}

export default Subscriptions;
