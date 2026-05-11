import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../auth/authThunk";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(registerUser(formData));

    alert("Register Success");
  };
    return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-success bg-gradient">
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ width: "400px" }}>
        <h1 className="text-center fw-bold mb-2">
          Create Account 🚀
        </h1>

        <p className="text-center text-muted mb-4">
          Register your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="form-control form-control-lg"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control form-control-lg"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control form-control-lg"
              onChange={handleChange}
            />
          </div>
              <button className="btn btn-success btn-lg w-100 rounded-3">
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <Link
            to="/"
            className="text-decoration-none"
          >
            Already Have Account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;