import React, { useState } from "react";
import HeroSection from "./heroSection";
import Header from "./../Header";
import ServicesList from "./ServicesList";
import { Footer } from "../Footer";
import ServiceProviderList from "./ServiceProviderList";
import Subscriptions from "./Subscriptions";
import axios from "axios";
import baseUrl from "../../baseUrl";

class CustomerDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceSelected: null,
      subscriptions: null,
      subscriptionSelected: null,
      walletBalance: null,
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
    const url = `${baseUrl}/customers/1`;
    let response = axios.get(url, {}).then((response) => {
      this.setState(
        {
          walletBalance: response.data.walletBalance,
        },
        () => this.setSubscriptions(response.data.subscriptions)
      );
    });
  }

  componentDidMount() {
    this.getSubscriptions();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container1">
          <Header walletBalance={this.state.walletBalance} />

          {!this.state.serviceSelected && !this.state.subscriptionSelected && (
            <>
              <HeroSection />
              <ServicesList
                serviceSelected={this.state.serviceSelected}
                setServiceSelected={this.setServiceSelected}
                bal={this.state.walletBalance}
              />
            </>
          )}

          {this.state.serviceSelected && (
            <>
              <ServiceProviderList
                serviceSelected={this.state.serviceSelected}
                setServiceSelected={this.setServiceSelected}
                bal={this.state.walletBalance}
              />
            </>
          )}

          {this.state.subscriptions && !this.state.subscriptionSelected && (
            <>
              <Subscriptions
                subscriptions={this.state.subscriptions}
                setSubscriptionSelected={this.setSubscriptionSelected}
              />
            </>
          )}

          {this.state.subscriptions && this.state.subscriptionSelected && (
            <>
              <ServiceProviderList
                serviceSelected={this.state.serviceSelected}
                setServiceSelected={this.setServiceSelected}
                editMode={true}
                subscriptionSelected={this.state.subscriptionSelected}
                bal={this.state.walletBalance}
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
