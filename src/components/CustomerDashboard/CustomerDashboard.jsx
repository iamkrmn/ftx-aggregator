import React from "react";
import HeroSection from "./heroSection";
import Header from "./../Header";
import ServicesList from "./ServicesList";
import { Footer } from "../Footer";

const CustomerDashboard = (props) => {
    return (
        <React.Fragment>
            <div className="container">                
                <Header />
                <HeroSection /> 
                <ServicesList />  
                <Footer />             
            </div>
        </React.Fragment>
    )
}

export default CustomerDashboard;