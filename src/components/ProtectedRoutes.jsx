import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutes({user, redirectPath = '/login', children}) {

  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoutes