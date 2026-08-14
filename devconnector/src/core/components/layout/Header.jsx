import React from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../../auth/redux/auth.selector";
import { logoutUser } from "../../../auth/redux/auth.thunk";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate("/auth/login");
  };

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/">Developers</Link>
        </li>

        {isAuthenticated ? (
          <li>
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-link"
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/auth/signup">Register</Link>
            </li>

            <li>
              <Link to="/auth/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
