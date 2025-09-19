import Navbar from "./navbar";

function AdminDashboard() {
  return (
    <div>
      <Navbar /> {/* Navbar added here */}
      <div className="container mt-4">
        <h1>Admin Dashboard</h1>
        <p>Welcome, Admin! Manage your application here.</p>
      </div>
    </div>
  );
}


export default AdminDashboard;  