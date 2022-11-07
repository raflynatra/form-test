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
          minHeight: "550px",
          backgroundColor: "lavender",
          margin: "0px auto",
        }}
      >
        <h1 className="text-center">Register Here</h1>
        <form className="px-5 mt-4" onSubmit={handleSubmit}>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
              value={user.username || ""}
              required
            />
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              value={user.password || ""}
              required
            />
            <label for="floatingInput">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={user.email || ""}
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              type="number"
              className="form-control"
              name="phone"
              onChange={handleChange}
              value={user.phone || ""}
              required
            />
            <label for="floatingInput">Phone Number</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              className="form-control"
              name="address"
              rows="3"
              onChange={handleChange}
              value={user.address || ""}
              required
            ></textarea>
            <label for="floatingTextarea">Address</label>
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
