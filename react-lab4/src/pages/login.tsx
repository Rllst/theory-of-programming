import { useLocation, useNavigate } from "react-router-dom";
import { AuthForm } from "../components";
import { useAuth } from "../context/authProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signin } = useAuth();

  const next = () => {
    signin(() => navigate(from, { replace: true }));
  };

  return (
    <div className="page">
      <AuthForm next={next} />
    </div>
  );
};

export default LoginPage;
