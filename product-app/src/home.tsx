import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
      <h1>Welcome to Product Management App</h1>
      <p>Select an option to continue</p>
      <div className="mt-4">
        <Link to="/" className="btn btn-primary me-2">Login</Link>
        <Link to="/dashboard" className="btn btn-success me-2">User Dashboard</Link>
        <Link to="/admin" className="btn btn-warning">Admin Dashboard</Link>
      </div>
    </div>
  );
}

export default Home;