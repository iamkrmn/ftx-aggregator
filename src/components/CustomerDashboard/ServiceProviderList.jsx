import React, { useState } from "react";
import Card from "./Card";
import MenuItem from "./MenuItem";
import { Menus } from "./../dummyData";
import TimePicker from "react-time-picker";
import axios from "axios";
class ServiceProviderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      providerSelected: "",
      order: {
        total: 0,
      },
      budgetExceeded: false,
      timeSelected: "10:00",
    };
    this.setProviderSelected = this.setProviderSelected.bind(this);
    this.setOrder = this.setOrder.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.setTime = this.setTime.bind(this);
    this.decreaseOrder = this.decreaseOrder.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.setAppContext = this.setAppContext.bind(this);
  }

  componentDidMount() {
    let payload;
    const sub = this.props.subscriptionSelected;

    if (sub) {
      payload = {
        ...payload,
        providerSelected: sub.default.restaurant,
        order: sub.default.list,
        timeSelected: sub.time,
      };
      payload = {
        ...payload,
        order: {
          ...payload.order,
          total: sub.default.total,
        }
      }

      this.setAppContext(payload);
    }
  }

  setProviderSelected(provider) {
    this.setState({
      providerSelected: provider,
      budgetSelected: 0,
      order: {
        total: 0,
      },
    });
  }

  setTime(value) {
    this.setState({
      timeSelected: value,
    });
  }

  setOrder(itemId, price, itemName) {
    let currentOrder = this.state.order;
    const currentQuantity =
      currentOrder[itemId] && currentOrder[itemId].quantity;
    if (!currentQuantity) {
      currentOrder[itemId] = { name: itemName, quantity: 1 };
    } else {
      currentOrder[itemId].quantity = currentQuantity + 1;
    }

    currentOrder.total = parseInt(currentOrder.total) + parseInt(price);
    if (currentOrder.total <= this.state.budgetSelected) {
      this.setState(
        {
          order: currentOrder,
        },
        () => console.log(currentOrder)
      );
    } else {
      this.setState({
        budgetExceeded: true,
      });
    }
  }

  handleSubscribe() {
    let endpoint = "https://7ac2-49-207-218-230.ngrok.io/subscriptions";
    if (!this.state.budgetExceeded && !this.props.editMode) {
      let list = this.state.order;
      const total = this.state.order["total"];
      delete list["total"];
      console.log(list);
      const payload = {
        subscriptionType: "order",
        budget: this.state.budgetSelected,
        default: {
          restaurant: this.state.providerSelected,
          list,
          total: parseInt(total),
        },
        time: this.state.timeSelected,
        customerId: 1,
      };
      try {
        axios.post(endpoint, payload);
      } catch (error) {
        console.log(error);
      }
    }

    if(this.props.editMode && !this.state.budgetExceeded) {
      const subId = this.props.subscriptionSelected.id;
      const epoint = `${endpoint}/${subId}`
      let list2 = this.state.order;
      const total = this.state.order["total"];
      delete list2["total"];

        const payload = {
          custom: {
            restaurant: this.state.providerSelected,
            list: list2,
            total: parseInt(total),
          }
        }
        try{
          axios.patch(epoint, payload);
        }catch(e){
          console.log(e)
        }
    }

  }

  decreaseOrder(itemId, price) {
    let currentOrder = this.state.order;
    const currentQuantity =
      currentOrder[itemId] && currentOrder[itemId].quantity;
    if (currentQuantity > 1) {
      currentOrder[itemId].quantity = currentQuantity - 1;
    } else {
      delete currentOrder[itemId];
    }
    const currentTotal = currentOrder.total - price;
    currentOrder.total = currentTotal;

    this.setState(
      {
        order: currentOrder,
      },
      () => console.log(currentOrder)
    );

    if (currentTotal < this.state.budgetSelected) {
      this.setState({
        budgetExceeded: false,
      });
    }
  }

  handleBudgetChange(e) {
    e.preventDefault();
    this.setState({
      budgetSelected: parseInt(e.target.value),
    });
  }

  setAppContext(props) {
    this.setState({
      providerSelected: props.providerSelected,
      order: props.order,
      timeSelected: props.timeSelected,
    });
  }

  render() {
    return (
      <div className="serviceproviderlist">
        <div className="providers">
          <Card
            footerContent={"Mcd"}
            background={"burger.png"}
            marginTop={"50px"}
            handleCardClick={() => this.setProviderSelected("Mcd")}
          />
          <Card
            footerContent={"Dominos"}
            background={"burger.png"}
            marginTop={"50px"}
            handleCardClick={() => this.setProviderSelected("dominos")}
          />
        </div>
        <div className="menu">
          {!this.state.providerSelected && (
            <span className="empty">Select a restaurant to proceed</span>
          )}

          {this.state.providerSelected && (
            <>
              <div className="name">{this.state.providerSelected}</div>
              {!this.props.editMode && (
                <div className="name">
                  Select your Budget
                  <input
                    type="text"
                    className="budget budget-margin"
                    onChange={this.handleBudgetChange}
                  />
                </div>
              )}

              <div className="menu-items">
                {Menus[this.state.providerSelected].map((item, key) => (
                  <MenuItem
                    itemName={item.itemName}
                    itemId={item.itemId}
                    setOrder={this.setOrder}
                    decreaseOrder={this.decreaseOrder}
                    price={item.price}
                    quantity={
                      this.state.order[key] && this.state.order[key].quantity
                    }
                  />
                ))}
                {this.state.budgetExceeded && (
                  <div className="budget-error">
                    You have exceeded your budget
                  </div>
                )}
              </div>

              <div className="datepicker">
                <span className="margin-right">Select your preferred time</span>
                <TimePicker
                  value={this.state.timeSelected}
                  onChange={this.setTime}
                />
              </div>
              <div className="orderRow">
                <div className="total">Total : {this.state.order.total}</div>

                <input
                  type="button"
                  className="subscribe"
                  value={!this.props.editMode ? "Subscribe" : "Place"}
                  onClick={this.handleSubscribe}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default ServiceProviderList;
