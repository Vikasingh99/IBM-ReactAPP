import React, { useState } from "react";
import Footer from "../../core/components/layout/Footer";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../redux/auth.thunk";
import { useDispatch, useSelector } from "react-redux";

const loginState = {
  email: "",
  password: "",
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(loginState);
  const { email, password } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(loginUser(formData)).unwrap();

      navigate("/dashboard");
    } catch (error) {
      console.log("Login failed:", error);
    }
  };
  return (
    <>
      {" "}
      <section className="container">
        <h1 className="large text-primary">Log In</h1>

        <p className="lead">
          <i className="fas fa-user"></i> LogIn into Your Account
        </p>

        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>

        <p className="my-1">
          Don't have an account? <Link to="/auth/signup">Sign Up</Link>
        </p>
      </section>
    </>
  );
};
