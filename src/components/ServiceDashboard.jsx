import React from "react";
import { Table } from 'react-bootstrap';
import CustomerModal from './CustomerModal';
import { 
    food_headers, 
    appointment_headers, 
    food_data, 
    appointment_data 
} from "./dummyData";

const ServiceDashboard = (props) => {
    return (
        <React.Fragment>
            {/* Order Table */}
        <div className="m-5">
          <Table striped bordered hover>
            <thead>
                <tr>
                {food_headers.map((header, index) => (<th key={`food-${index}`}>{header}</th>))}
                </tr>
            </thead>
            <tbody>
                {food_data.map((item, index) => (<tr>
                    <td>{item.order_id}</td>
                    <td><CustomerModal type='items' details={item.order_details}/></td>
                    <td><CustomerModal details={item.customer_details}/></td>
                    <td><a href="#" className="link-success text-decoration-none">approve</a></td>
                    <td>{item.other_details}</td>
                </tr>))}
            </tbody>
          </Table>
        </div>
        {/* Appointments Table */}
        <div className="m-5">
          <Table striped bordered hover>
            <thead>
                <tr>
                {appointment_headers.map((header, index) => (<th key={`food-${index}`}>{header}</th>))}
                </tr>
            </thead>
            <tbody>
                {appointment_data.map((item, index) => (<tr>
                    <td>{item.customer_name}</td>
                    <td>{item.appointment_date.toDateString()}</td>
                    <td>{item.appointment_date.toTimeString()}</td>
                    <td><a href="#" className="link-success text-decoration-none">approve</a></td>
                    <td><a href="#" className="link-warning text-decoration-none">re-schedule</a></td>
                    <td><a href="#" className="link-danger text-decoration-none">reject</a></td>
                </tr>))}
            </tbody>
          </Table>
          </div>
        </React.Fragment>

    )
}

export default ServiceDashboard;