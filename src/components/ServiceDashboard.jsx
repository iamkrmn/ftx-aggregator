import React from "react";
import { Table } from "react-bootstrap";
import CustomerModal from "./CustomerModal";
import {
  food_headers,
  food_data,
} from "./dummyData";

const ServiceDashboard = (props) => {
  return (
    <React.Fragment>
      {/* Order Table */}
      <div className="container">
        <div className="m-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                {food_headers.map((header, index) => (
                  <th key={`food-${index}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {food_data.map((item, index) => (
                <tr>
                  <td>{item.order_id}</td>
                  <td>
                    <CustomerModal type="items" details={item.order_details} />
                  </td>
                  <td>
                    <CustomerModal details={item.customer_details} />
                  </td>
                  <td>
                    <a href="#" className="link-success text-decoration-none">
                      approve
                    </a>
                  </td>
                  <td>{item.other_details}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceDashboard;
