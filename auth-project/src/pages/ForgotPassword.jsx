import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [showOTPBox, setShowOTPBox] =
    useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Enter Email");
      return;
    }

    alert(
      "OTP Sent Successfully\n\nStatic OTP: 1234"
    );

    setShowOTPBox(true);
  };

  const handleResetPassword = () => {
    if (otp !== "1234") {
      alert("Invalid OTP");
      return;
    }

    // Save new password locally
    localStorage.setItem(
      "resetPassword",
      newPassword
    );

    alert(
      "Password Reset Successfully"
    );

    navigate("/");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-primary bg-gradient">

      <div
        className="card border-0 shadow-lg rounded-4 p-4"
        style={{ width: "450px" }}
      >

        <h2 className="fw-bold text-center mb-3">
          Forgot Password
        </h2>

        {!showOTPBox ? (
          <form onSubmit={handleSendOTP}>

            <div className="mb-3">
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control form-control-lg"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
              />
            </div>

            <button className="btn btn-primary w-100 btn-lg">
              Send OTP
            </button>

          </form>
        ) : (
          <div>

            <div className="mb-3">

              <input
                type="text"
                placeholder="Enter OTP"
                className="form-control form-control-lg"
                value={otp}
                onChange={(e) =>
                  setOtp(
                    e.target.value
                  )
                }
              />

              <small>
                Static OTP: 1234
              </small>

            </div>

            <div className="mb-3">

              <input
                type="password"
                placeholder="Enter New Password"
                className="form-control form-control-lg"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
              />

            </div>

            <button
              onClick={
                handleResetPassword
              }
              className="btn btn-success w-100 btn-lg"
            >
              Reset Password
            </button>

          </div>
        )}

        <div className="text-center mt-3">

          <Link to="/">
            Back To Login
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;