import React, { useState } from "react";
import HeroSection from "./heroSection";
import Header from "./../Header";
import ServicesList from "./ServicesList";
import { Footer } from "../Footer";
import ServiceProviderList from "./ServiceProviderList";
import Subscriptions from "./Subscriptions";
import axios from "axios";

class CustomerDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceSelected: null,
      subscriptions: null,
      subscriptionSelected: null,
    };
    this.setSubscriptions = this.setSubscriptions.bind(this);
    this.setServiceSelected = this.setServiceSelected.bind(this);
    this.setSubscriptionSelected = this.setSubscriptionSelected.bind(this);
  }

  setSubscriptionSelected(sub) {
    this.setState({ subscriptionSelected: sub });
  }

  setSubscriptions(payload) {
    this.setState({ subscriptions: payload }, () =>
      console.log(this.state.subscriptions)
    );
  }

  setServiceSelected(value) {
    this.setState({
      serviceSelected: value,
    });
  }

  getSubscriptions() {
    const baseUrl = "https://7ac2-49-207-218-230.ngrok.io/customers/1";
    let response = axios
      .get(baseUrl, {})
      .then((response) => this.setSubscriptions(response.data.subscriptions));
  }

  componentDidMount() {
    this.getSubscriptions();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container1">
          <Header />

          {!this.state.serviceSelected && (
            <>
              <HeroSection />
              <ServicesList
                serviceSelected={this.state.serviceSelected}
                setServiceSelected={this.setServiceSelected}
              />
            </>
          )}

          {this.state.serviceSelected && (
            <>
              <ServiceProviderList
                serviceSelected={this.state.serviceSelected}
                setServiceSelected={this.setServiceSelected}
              />
            </>
          )}

          {this.state.subscriptions && !this.state.subscriptionSelected && (
            <>
              <Subscriptions subscriptions={this.state.subscriptions} setSubscriptionSelected={this.setSubscriptionSelected} />
            </>
          )}

          {this.state.subscriptions && this.state.subscriptionSelected && (
            <>
              <ServiceProviderList
                serviceSelected={this.state.serviceSelected}
                setServiceSelected={this.setServiceSelected}
                editMode={true}
                subscriptionSelected={this.state.subscriptionSelected}
                
              />
            </>
          )}

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default CustomerDashboard;
