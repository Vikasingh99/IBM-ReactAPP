import React, { useState } from "react";
import Footer from "../../core/components/layout/Footer";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/auth.thunk";

const signupState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

export const Signup = () => {
  const navigate = useNavigate();
  // useDispatch,
  const dispatch = useDispatch();

  //useSelector
  // const auth = useSelector((state) => state.auth);

  // useState: this hook is used to manage the state of the component. It returns an array with two elements.
  // element: the current state value and a function to update that state.
  const [formData, setFormData] = useState(signupState);

  //destructuring the form data object to get the individual values of name, email, password and password2.
  const { name, email, password, password2 } = formData;

  // Used to handle changes in an input field,
  // usually to update the state/value.
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Used to handle form submission,
  // usually to process the form data.
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(registerUser(formData));
  };

  return (
    <>
      {" "}
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>

        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>

        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />

            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength={8}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength={8}
              required
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Register" />
        </form>

        <p className="my-1">
          Already have an account? <Link to="/auth/login">Log In</Link>
        </p>
      </section>
    </>
  );
};
