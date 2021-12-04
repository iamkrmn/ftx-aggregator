/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React from "react";
import baseUrl from "../../baseUrl";
import Card from "./Card";

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  handleCancelSubscription = (e) => {
    e.preventDefault();
    const subId = e.target.getAttribute("data-subscription");
    try {
      axios.patch(`${baseUrl}/subscriptions/${subId}`, { subscriber: "cancelled" })
      setTimeout(() => window.location.reload(), 2000);
    } catch (e) {
      console.log(e);
    }
  }

  handlePauseSubscription = (e) => {
    e.preventDefault();
    const subId = e.target.getAttribute("data-subscription");
    const status = e.target.getAttribute("data-status");
    try {
      if (status === "active") {
        axios.patch(`${baseUrl}/subscriptions/${subId}`, { subscriber: "paused" })
      } else {
        axios.patch(`${baseUrl}/subscriptions/${subId}`, { subscriber: "active" })
      }
      setTimeout(() => window.location.reload(), 2000);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
        <div className="services-list">
            <span className="service-header"> Your active subscriptions </span>
            <div className="card-container">
                {
                    this.props.subscriptions.map((Subscription, index) => {
                      if(Subscription.subscriber === "active" || Subscription.subscriber === "paused") {
                        return (
                        <div key={`sub-${index}`}>
                          <Card 
                          footerContent={"Food"} 
                          background={"burger.png"} 
                          handleCardClick={() => this.props.setSubscriptionSelected(Subscription)}
                          />
                          <a 
                            href="#" 
                            className="p-4 link-danger text-decoration-none" 
                            onClick={(e) => this.handleCancelSubscription(e)}
                            data-subscription={Subscription.id}
                          >
                              Cancel
                          </a>
                          
                          <a 
                            href="#" 
                            className="p-4 link-warning text-decoration-none" 
                            onClick={(e) => this.handlePauseSubscription(e)}
                            data-subscription={Subscription.id}
                            data-status={Subscription.subscriber}
                          >
                              { Subscription.subscriber === "paused" ? "Resume" : "Pause" }
                          </a>
                        </div>
                        ) 
                      }
                    })
                }
            </div>
        </div>
    );
  }
}

export default Subscriptions;
