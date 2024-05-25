import { useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const AuthRootComponent = () => {
  const location = useLocation();

  return location.pathname === "/login" ? (
    <LoginPage />
  ) : location.pathname === "/register" ? (
    <RegisterPage />
  ) : null;
};

export default AuthRootComponent;
