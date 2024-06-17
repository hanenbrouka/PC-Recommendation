import React, { useState, useEffect } from "react";
import "./LoginSignUpPage.css";
import { FaUserTie, FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
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
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    setFormErrors(errors);
    setIsSubmit(Object.keys(errors).length === 0);
  };

  useEffect(() => {
    if (isSubmit) {
      signup.mutate(values, {
        onSuccess: () => {
          // Si l'inscription est réussie, rediriger vers la page de connexion
          navigate("/login");
        },
        onError: (error) => {
          console.log(error);
        },
      });
      // Réinitialiser l'état de soumission pour éviter les soumissions multiples
      setIsSubmit(false);
    }
  }, [isSubmit]);

  const validate = (vals) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/; // pour la validation des e-mails

    if (!vals.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!vals.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!vals.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(vals.email)) {
      errors.email = "This is not a valid email format!";
    }
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
            <button type="submit" className="btn-signup">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
