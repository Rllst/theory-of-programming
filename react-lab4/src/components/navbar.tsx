import { Link } from "react-router-dom";
import { useAuth } from "../context/authProvider";

const Navbar = () => {
  const { user, signout } = useAuth();

  return (
    <nav className="px-2 sm:px-4 py-2.5 rounded">
      <ul className="w-full gap-2 flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li className="nav-item">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/news">
            News
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile">
            Profile
          </Link>
        </li>
        {user.isLoggedIn &&
          (
            <button
              onClick={signout}
              className="ml-auto btn-primary"
            >
              Logout
            </button>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
