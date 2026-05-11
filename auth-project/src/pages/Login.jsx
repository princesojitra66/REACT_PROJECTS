import { useState } from "react";

import { useDispatch } from "react-redux";

import { loginUser } from "../auth/authThunk";

import {
  useNavigate,
  Link,
} from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password
    ) {
      alert("All fields required");
      return;
    }

    try {
      setLoading(true);

      // Forgot Password Login
      const resetPassword =
        localStorage.getItem(
          "resetPassword"
        );

      if (
        resetPassword &&
        formData.password ===
          resetPassword
      ) {

        // Admin Check
        const isAdmin =
          formData.email ===
          "admin@gmail.com";

        // Fake User
        const fakeUser = {
          name: isAdmin
            ? "Admin"
            : "Prince",

          email: formData.email,

          role: isAdmin
            ? "admin"
            : "user",
        };

        // Save Token
        localStorage.setItem(
          "token",
          "fake-jwt-token"
        );

        // Save User
        localStorage.setItem(
          "user",
          JSON.stringify(fakeUser)
        );

        alert("Login Success");

        // Redirect
        if (isAdmin) {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }

        setLoading(false);

        return;
      }

      // Normal Login API
      const result = await dispatch(
        loginUser(formData)
      );

      console.log(result);

      // Admin Login
      if (
        result.payload?.user?.role ===
        "admin"
      ) {
        navigate("/admin");
      }

      // User Login
      else if (
        result.meta.requestStatus ===
        "fulfilled"
      ) {
        navigate("/dashboard");
      }

      // Login Failed
      else {
        alert(
          result.payload?.message ||
            "Login Failed"
        );
      }

      setLoading(false);

    } catch (error) {

      setLoading(false);

      alert("Something went wrong");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-primary bg-gradient">

      <div
        className="card border-0 shadow-lg rounded-4 overflow-hidden"
        style={{
          width: "450px",
        }}
      >

        {/* Top Section */}
        <div className="bg-primary text-white text-center p-4">

          <img
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
            alt="login"
            width="90"
            className="mb-3"
          />

          <h2 className="fw-bold">
            Welcome Back 👋
          </h2>

          <p className="mb-0">
            Login to your account
          </p>

        </div>

        {/* Form Section */}
        <div className="p-4">

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="form-control form-control-lg rounded-3"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            {/* Password */}
            <div className="mb-4">

              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control form-control-lg rounded-3"
                value={
                  formData.password
                }
                onChange={handleChange}
              />

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold"
              disabled={loading}
            >
              {loading
                ? "Loading..."
                : "Login"}
            </button>

          </form>

          {/* Bottom Links */}
          <div className="d-flex justify-content-between mt-4">

            <Link
              to="/register"
              className="text-decoration-none fw-semibold"
            >
              Create Account
            </Link>

            <Link
              to="/forgot-password"
              className="text-decoration-none fw-semibold"
            >
              Forgot Password?
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;