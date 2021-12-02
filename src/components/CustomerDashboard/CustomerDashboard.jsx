import React, { useState } from "react";
import HeroSection from "./heroSection";
import Header from "./../Header";
import ServicesList from "./ServicesList";
import { Footer } from "../Footer";
import ServiceProviderList from "./ServiceProviderList";
import Subscriptions from "./Subscriptions";

const CustomerDashboard = (props) => {
  const [serviceSelected, setServiceSelected] = useState("");

  return (
    <React.Fragment>
      <div className="container">
        <Header />

        {!serviceSelected && (
          <>
            <HeroSection />
            <ServicesList
              serviceSelected={serviceSelected}
              setServiceSelected={setServiceSelected}
            />
          </>
        )}

        {serviceSelected && (
          <>
            <ServiceProviderList
              serviceSelected={serviceSelected}
              setServiceSelected={setServiceSelected}
            />
          </>
        )}

        <Subscriptions />

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default CustomerDashboard;
