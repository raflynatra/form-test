import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailUserComponent from "./DetailUserComponent";
import { useSelector } from "react-redux";

function TableComponent() {
  const userList = useSelector((state) => state.users.users);
  console.log(userList);

  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const handleClick = (usr) => {
    setShow(true);
    setUser(usr);
  };

  return (
    <div className="p-4">
      <DetailUserComponent show={show} handleClose={handleClose} user={user} />
      <div
        className="rounded p-4"
        style={{ minHeight: "720px", backgroundColor: "lavender" }}
      >
        <h1 className="text-center">User List</h1>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Add User
        </button>
        <table className="table table-striped table-hover table-borderless text-center mt-3">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {userList.map((usr, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.phone}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleClick(usr)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
