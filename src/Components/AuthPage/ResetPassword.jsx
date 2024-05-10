import React, { useState, useEffect } from "react";
// import './LoginForm.css';
import "./LoginSignUpPage.css";
import { FaUserTie } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import NavBar from "../LandingPage/NavBar/NavBar";
import Footer from "../LandingPage/Footer/Footer";

const ResetPassword = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    // console.log(event.target); //This will print input tag in console if we type anything in input

    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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

    // Password
    if (!vals.password) {
      errors.password = "Password is required";
    } else if (vals.password.length > 8) {
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
    <div className="login-page">
      <div className="main-landing-page">
        <div className="wrapper">
          <form action="">
            <h1>Change The Password</h1>
            <div className="inputs">
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
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
