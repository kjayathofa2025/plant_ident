import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For redirect after form submission

const Create = () => {
  // Define states for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState("user");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const history = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});
    setSuccessMessage("");

    // Prepare data to send
    const userData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      role,
    };

    try {
      const response = await axios.post("users", userData); // Update URL to match your backend route
      setSuccessMessage("User created successfully!");
      history.push("/dashboard"); // Redirect to the admin dashboard
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors); // Assuming Laravel validation errors
      } else {
        setErrors({ general: "An unexpected error occurred" });
      }
    }
  };

  return (
    <div>
      <h2>Add New User/Agent</h2>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      {/* Display validation errors */}
      {errors.general && <div className="alert alert-danger">{errors.general}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="form-control"
          />
          {errors.password_confirmation && (
            <div className="text-danger">{errors.password_confirmation}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-control"
          >
            <option value="user">User</option>
            <option value="agent">Agent</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
};

export default Create;
