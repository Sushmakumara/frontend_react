import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
// import navigate

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate(); // initialize navigate

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (role === "admin") {
      if (email === "admin@example.com" && password === "admin123") {
        alert("Admin login successful!");
        navigate("/admin"); // redirect to admin page
      } else {
        alert("Invalid admin credentials");
      }
    } else if (role === "user") {
      if (email === "user@example.com" && password === "user123") {
        alert("User login successful!");
        navigate("/dashboard"); // redirect to user dashboard
      } else {
        alert("Invalid user credentials");
      }
    } else {
      alert("Select a valid role");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "role") setRole(value);
  };

  const formStyle: React.CSSProperties = {
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "700px", 
    minHeight: "450px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const forgotStyle: React.CSSProperties = {
    display: "block",
    marginTop: "5px",
    textAlign: "right",
    fontSize: "0.9rem",
    textDecoration: "underline",
    color: "#0d6efd",
    cursor: "pointer",
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div style={formStyle}>
        {/* Sign In / Sign Up Buttons */}
        <div style={buttonGroupStyle}>
          <button className="btn btn-outline-primary w-45">Sign In</button>
          <button className="btn btn-primary w-45">Sign Up</button>
        </div>

        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handleInputChange}
              required
            />
            <span style={forgotStyle} onClick={() => alert("Redirect to reset password")}>
              Forgot Password?
            </span>
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="role" className="form-label">Select Role</label>
            <select
              id="role"
              name="role"
              className="form-select"
              value={role}
              onChange={handleInputChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
