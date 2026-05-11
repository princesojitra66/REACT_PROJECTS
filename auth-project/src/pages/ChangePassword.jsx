import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../auth/authThunk";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
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
      !formData.oldPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      alert("All fields required");
      return;
    }

    if (
      formData.newPassword !==
      formData.confirmPassword
    ) {
      alert(
        "New Password and Confirm Password not match"
      );
      return;
    }

    try {
      setLoading(true);

      const result = await dispatch(
        changePassword({
          oldPassword:
            formData.oldPassword,
          newPassword:
            formData.newPassword,
        })
      );

      console.log(result);

      if (
        result.payload?.success ||
        result.meta.requestStatus ===
          "fulfilled"
      ) {
        alert(
          "Password Changed Successfully"
        );

        navigate("/dashboard");
      } else {
        alert(
          result.payload?.message ||
            "Password Change Failed"
        );
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);

      alert("Something went wrong");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-dark bg-gradient">

      <div
        className="card border-0 shadow-lg rounded-4 overflow-hidden"
        style={{
          width: "500px",
        }}
      >

        {/* Header */}
        <div className="bg-primary text-white text-center p-4">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
            alt="lock"
            width="90"
            className="mb-3"
          />

          <h2 className="fw-bold">
            Change Password
          </h2>

          <p className="mb-0">
            Update your account password
          </p>

        </div>

        {/* Form */}
        <div className="p-4">

          <form onSubmit={handleSubmit}>

            {/* Old Password */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Old Password
              </label>

              <input
                type="password"
                name="oldPassword"
                placeholder="Enter old password"
                className="form-control form-control-lg rounded-3"
                value={
                  formData.oldPassword
                }
                onChange={handleChange}
              />

            </div>

            {/* New Password */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                New Password
              </label>

              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                className="form-control form-control-lg rounded-3"
                value={
                  formData.newPassword
                }
                onChange={handleChange}
              />

            </div>

            {/* Confirm Password */}
            <div className="mb-4">

              <label className="form-label fw-semibold">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                className="form-control form-control-lg rounded-3"
                value={
                  formData.confirmPassword
                }
                onChange={handleChange}
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold"
              disabled={loading}
            >
              {loading
                ? "Updating..."
                : "Change Password"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default ChangePassword;