import React from "react";
import { Modal } from "react-bootstrap";

function DetailUserComponent({ show, handleClose, user }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <strong>Username:</strong>
            <p>{user.username}</p>
          </div>
          <div className="col">
            <strong>Password:</strong>
            <p>{user.password}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <strong>Email:</strong>
            <p>{user.email}</p>
          </div>
          <div className="col">
            <strong>Phone:</strong>
            <p>{user.phone}</p>
          </div>
        </div>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default DetailUserComponent;
