import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CustomerModal from "./CustomerModal";
import {
  food_headers,
} from "./dummyData";
import axios from "axios";
import baseUrl from "../baseUrl";

const ServiceDashboard = (props) => {
  // const socket = io("http://localhost:3000");
  const [data, setData] = useState([]);
  // socket.on("connect", () => console.log("connected"));
  // socket.on("order.create", (payload) => {
  //   console.log(payload);
  // })

  async function getData() {
    try {
      const orders = await axios.get(`${baseUrl}/orders`);
      return orders;
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData().then((data) => {
       console.log(data.data);
      setData([...data.data]);
    });
  }, [])
  return (
    <React.Fragment>
      {/* Order Table */}
      <div className="container">
        <div className="m-5">
          <Table striped bordered hover className="shadow">
            <thead>
              <tr>
                {food_headers.map((header, index) => (
                  <th key={`food-${index}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={`order-${index}`}>
                  <td>{item.id}</td>
                  <td>
                    <CustomerModal type="items" details={item.items} />
                  </td>
                  <td>
                    <CustomerModal details={item.customer} />
                  </td>
                  <td>{item.restaurant}</td>
                  <td>{item.status}</td>
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
