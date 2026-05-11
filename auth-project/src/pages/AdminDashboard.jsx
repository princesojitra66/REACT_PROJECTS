const AdminDashboard = () => {
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  return (
    <div className="container-fluid vh-100 bg-dark d-flex justify-content-center align-items-center">
      <div className="card shadow-lg border-0 rounded-4 p-5 text-center">
        <h1 className="fw-bold text-danger mb-3">
          Admin Dashboard 👑
        </h1>

        <h3>
          Welcome {user?.name || "Admin"}
        </h3>
      </div>
    </div>
  );
};

export default AdminDashboard;