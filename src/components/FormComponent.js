import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormComponent({ setUserList }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "username") {
      setUser((values) => ({ ...values, [name]: value.slice(0, 16) }));
    } else if (name === "password") {
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        setUser((values) => ({ ...values, [name]: value.slice(0, 8) }));
      }
    } else if (name === "phone") {
      setUser((values) => ({ ...values, [name]: value.slice(0, 16) }));
    } else {
      setUser((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserList((prev) => [...prev, user]);
    navigate("/table");
  };
  return (
    <div className="py-4">
      <div
        className="rounded p-4"
        style={{
          width: "500px",
          minHeight: "700px",
          backgroundColor: "lavender",
          margin: "0px auto",
        }}
      >
        <h1 className="text-center">Register Here</h1>
        <form className="px-5 mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
              value={user.username || ""}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              value={user.password || ""}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={user.email || ""}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              onChange={handleChange}
              value={user.phone || ""}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              name="address"
              rows="3"
              onChange={handleChange}
              value={user.address || ""}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
