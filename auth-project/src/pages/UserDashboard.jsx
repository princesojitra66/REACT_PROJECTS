import { Link } from "react-router-dom";

const UserDashboard = () => {
  const userData = localStorage.getItem("user");

  let user = null;

  try {
    user = userData
      ? JSON.parse(userData)
      : null;
  } catch (error) {
    user = null;
  }

  return (
    <div className="container-fluid min-vh-100 bg-light p-0">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow px-4 py-3">

        <div className="container-fluid">

          <h2 className="fw-bold text-white m-0">
            My Dashboard
          </h2>

          <button
            className="btn btn-light rounded-pill fw-semibold px-4"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </button>

        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">

        <div className="row g-4">

          {/* Left Profile Card */}
          <div className="col-lg-4">

            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

              {/* Top Background */}
              <div
                className="bg-primary bg-gradient"
                style={{ height: "120px" }}
              ></div>

              <div className="text-center px-4 pb-4">

                {/* Profile Image */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="User"
                  className="rounded-circle border border-4 border-white shadow"
                  width="120"
                  height="120"
                  style={{
                    marginTop: "-60px",
                    objectFit: "cover",
                  }}
                />

                <h3 className="fw-bold mt-3">
                  {user?.name || "User"}
                </h3>

                <p className="text-muted">
                  {user?.email ||
                    "No Email"}
                </p>

                <span className="badge bg-primary px-4 py-2 fs-6 rounded-pill">
                  {user?.role || "user"}
                </span>

                <div className="d-grid mt-4">
                  <Link
                    to="/change-password"
                    className="btn btn-primary rounded-pill fw-semibold"
                  >
                    Change Password
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* Right Dashboard Cards */}
          <div className="col-lg-8">

            <div className="row g-4">

              {/* Card 1 */}
              <div className="col-md-6">

                <div className="card border-0 shadow rounded-4 p-4 h-100">

                  <div className="d-flex align-items-center justify-content-between">

                    <div>
                      <h5 className="fw-bold text-primary">
                        Total Projects
                      </h5>

                      <h1 className="fw-bold">
                        12
                      </h1>
                    </div>

                    <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "24px",
                      }}
                    >
                      📁
                    </div>

                  </div>

                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6">

                <div className="card border-0 shadow rounded-4 p-4 h-100">

                  <div className="d-flex align-items-center justify-content-between">

                    <div>
                      <h5 className="fw-bold text-success">
                        Messages
                      </h5>

                      <h1 className="fw-bold">
                        28
                      </h1>
                    </div>

                    <div className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "24px",
                      }}
                    >
                      💬
                    </div>

                  </div>

                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6">

                <div className="card border-0 shadow rounded-4 p-4 h-100">

                  <div className="d-flex align-items-center justify-content-between">

                    <div>
                      <h5 className="fw-bold text-danger">
                        Notifications
                      </h5>

                      <h1 className="fw-bold">
                        5
                      </h1>
                    </div>

                    <div className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "24px",
                      }}
                    >
                      🔔
                    </div>

                  </div>

                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6">

                <div className="card border-0 shadow rounded-4 p-4 h-100">

                  <div className="d-flex align-items-center justify-content-between">

                    <div>
                      <h5 className="fw-bold text-warning">
                        Earnings
                      </h5>

                      <h1 className="fw-bold">
                        ₹25K
                      </h1>
                    </div>

                    <div className="bg-warning text-white rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "24px",
                      }}
                    >
                      💰
                    </div>

                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Section */}
            <div className="card border-0 shadow-lg rounded-4 p-4 mt-4">

              <h4 className="fw-bold mb-3">
                Recent Activity
              </h4>

              <div className="list-group">

                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                  ✅ Logged into dashboard
                </div>

                <div className="list-group-item border-0 bg-light rounded-3 mb-2">
                  🔒 Updated password
                </div>

                <div className="list-group-item border-0 bg-light rounded-3">
                  📁 Created new project
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserDashboard;