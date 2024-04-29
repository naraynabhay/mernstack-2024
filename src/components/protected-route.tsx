import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;
  adminOnly?: boolean;
  admin?: boolean;
  redirect?: string;
  farmer?:boolean;
  farmerOnly?:boolean;
}

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminOnly,
  admin,
  farmer,
  farmerOnly,
  redirect = "/",
}: Props) => {
  if (!isAuthenticated) return <Navigate to={redirect} />;

  if (adminOnly && !admin) return (
    <Navigate to={redirect} />
  );


  if (!farmer && farmerOnly) return <Navigate to={redirect} />;



  return children ? children : <Outlet />;
};

export default ProtectedRoute;
