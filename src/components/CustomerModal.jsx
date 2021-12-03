import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
const CustomerModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      {(props.type === 'items') ? 
        <div>
          <a className="link-primary text-decoration-none" href="#" onClick={handleShow}>Show items</a>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                Order Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.details.map((item, index) => {
            return (<div><span className="p-4">Item: {item.name}</span><span className="p-4">Quantity: {item.quantity}</span></div>);
})}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
          :
          <div> 
          <a className="link-primary text-decoration-none" href="#" onClick={handleShow}>Show details</a>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                Customer Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
          Customer Name: {props.details.name}
          </div>
          <div>
              Customer Address: {props.details.address}
              </div>
              <div>
              Contact: {props.details.phone}
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
          </div>
      }
      </>
    );
  }

export default CustomerModal;