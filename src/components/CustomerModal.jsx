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
            Order Details: {props.details}
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
          Customer Name: {props.details.name}
              Customer Address: {props.details.address}
              Contact: {props.details.phone}
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