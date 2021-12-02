import React from "react";
import { Table } from "react-bootstrap";
import {
  food_headers,
  appointment_headers,
  food_data,
  appointment_data,
} from "./dummyData";

const AppointmentDashboard = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        {/* Appointments Table */}
        <div className="m-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                {appointment_headers.map((header, index) => (
                  <th key={`food-${index}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {appointment_data.map((item, index) => (
                <tr>
                  <td>{item.customer_name}</td>
                  <td>{item.appointment_date.toDateString()}</td>
                  <td>{item.appointment_date.toTimeString()}</td>
                  <td>
                    <a href="#" className="link-success text-decoration-none">
                      approve
                    </a>
                  </td>
                  <td>
                    <a href="#" className="link-warning text-decoration-none">
                      re-schedule
                    </a>
                  </td>
                  <td>
                    <a href="#" className="link-danger text-decoration-none">
                      reject
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppointmentDashboard;
