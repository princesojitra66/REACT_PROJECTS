import { Navigate } from "react-router-dom";

const AdminRoute = ({
  children,
}) => {

  const userData =
    localStorage.getItem("user");

  let user = null;

  try {
    user = userData
      ? JSON.parse(userData)
      : null;
  } catch (error) {
    user = null;
  }

  if (
    !user ||
    user.role !== "admin"
  ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;