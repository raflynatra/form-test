import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormComponent() {
  const dispatch = useDispatch();
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

    dispatch({ type: "addUser", payload: user });
    navigate("/table");
  };
  return (
    <div className="py-4">
      <div
        className="rounded p-4"
        style={{
          width: "500px",
          minHeight: "550px",
          backgroundColor: "lavender",
          margin: "0px auto",
        }}
      >
        <h1 className="text-center">Register Here</h1>
        <form className="px-5 mt-4" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              placeholder="name@example.com"
              type="text"
              name="username"
              onChange={handleChange}
              value={user.username || ""}
              required
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              placeholder="name@example.com"
              type="password"
              name="password"
              onChange={handleChange}
              value={user.password || ""}
              required
            />
            <label htmlFor="floatingInput">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              placeholder="name@example.com"
              type="email"
              name="email"
              onChange={handleChange}
              value={user.email || ""}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              placeholder="name@example.com"
              type="number"
              name="phone"
              onChange={handleChange}
              value={user.phone || ""}
              required
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="address"
              rows="3"
              onChange={handleChange}
              value={user.address || ""}
              required
            ></textarea>
            <label htmlFor="floatingTextarea">Address</label>
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
