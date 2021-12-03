import React, {useState} from "react";
import Card from "./Card";
import MenuItem from "./MenuItem";


class ServiceProviderList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            providerSelected: "",
            order: {
                total: 0,
            },
        }
        this.setProviderSelected = this.setProviderSelected.bind(this);
        this.setOrder = this.setOrder.bind(this);
    }

    setProviderSelected(provider){
        this.setState({
            providerSelected: provider,
        })
    }

    setOrder(itemId, price) {
        let currentOrder = this.state.order;
        const currentQuantity = currentOrder[itemId] &&  currentOrder[itemId].quantity;
        if(!currentQuantity) {
            currentOrder[itemId] = { quantity : 1};
        } else {
            currentOrder[itemId].quantity = currentQuantity + 1;
        }

        currentOrder.total = parseInt(currentOrder.total) + parseInt(price);

        this.setState({
            order : currentOrder,
        }, () => console.log(currentOrder))
    }

    render() {
        return(
            <div className="serviceproviderlist">
                <div className="providers">
                    <Card footerContent={"Mcd"} background={"burger.png"} marginTop={"50px"} handleCardClick={ () => this.setProviderSelected("Mcd")}/>
                    <Card footerContent={"Dominos"} background={"burger.png"}  marginTop={"50px"} handleCardClick={ () => this.setProviderSelected("dominos")}/>
                </div>
                <div className="menu">
                    {
                        !this.state.providerSelected && 
                        <span className="empty">Select a restaurant to proceed</span>
                    }
    
                    {
                        this.state.providerSelected && <>
                        <div className="name"> 
                            {this.state.providerSelected}
                        </div>
                        <div className="menu-items">
                            <MenuItem itemName={"Mc Aloo Tikki"} itemId={"0"} setOrder={this.setOrder} price={"100"} quantity={this.state.order[0] && this.state.order[0].quantity}/>
                            <MenuItem itemName={"Paneer wrap  "} itemId={"1"} setOrder={this.setOrder} price={"150"} quantity={this.state.order[1] && this.state.order[1].quantity}/>
                            <MenuItem itemName={"Peri Peri fries"} itemId={"2"} setOrder={this.setOrder} price={"180"} quantity={this.state.order[2] && this.state.order[2].quantity}/>
                            <MenuItem itemName={"Mc Flurry (M)"} itemId={"3"} setOrder={this.setOrder} price={"200"} quantity={this.state.order[3] && this.state.order[3].quantity}/>
                        </div>
                        <div className="orderRow">
                            <div className="total">
                                Total : {this.state.order.total}
                            </div>

                            <input type="button" className="subscribe" value="Subscribe"/>
                        </div>
                        

                        </>
                    }
                </div>
            </div>
        )
    }
}

export default ServiceProviderList;