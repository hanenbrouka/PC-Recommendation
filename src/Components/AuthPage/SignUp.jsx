import React, { useState, useEffect } from "react";
// import './LoginForm.css';
import "./LoginSignUpPage.css";
import { FaUserTie } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import axios from "axios";
import useSignup from "../../Data/useSignup";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const signup = useSignup();
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(event.target); //This will print input tag in console if we type anything in input

    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signup.mutate(values, {
      onSuccess() {
        navigate("/");
      },
      onError(error) {
        console.log(error);
      },
    });
    setFormErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [formErrors]);

  const validate = (vals) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/; //for e-mail validation purposes

    if (!vals.firstName) {
      errors.firstName = "first name is required!";
    }
    if (!vals.lastName) {
      errors.lastName = "last name is required!";
    }
    // E-mail
    if (!vals.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(vals.email)) {
      errors.email = "This is not a valid email format!";
    }

    // Password
    if (!vals.password) {
      errors.password = "Password is required";
    } else if (vals.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }

    if (!vals.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (vals.confirmPassword !== vals.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div className="signup-page">
      <div className="main-landing-page">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="inputs">
              <div className="input-box">
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
                <FaUserTie className="icon" />
              </div>
              <p>{formErrors.firstName}</p>
              <div className="input-box">
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
                <FaUserTie className="icon" />
              </div>
              <p>{formErrors.lastName}</p>

              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <IoIosMail className="icon" />
              </div>
              <p>{formErrors.email}</p>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
                <FaLock className="icon" />
              </div>
              <p>{formErrors.password}</p>

              <div className="input-box">
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
                <FaLock className="icon" />
              </div>
            </div>

            <button type="submit" className="btn-signup">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
