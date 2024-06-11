import React, { useState, useEffect } from "react";
import "../AuthPage/LoginSignUpPage.css";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useLogin from "../../Data/useLogin";
import { queryClient } from "../..";
import Cookies from 'js-cookie';



function Login() {
  const navigate = useNavigate();
  const handleSignSubmit = () => {
    navigate("/signup");
  };
  const handleProfilSubmit = () => {
    navigate("/user-profil");
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const login = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login.mutate(values, {
      onSuccess(result) {
        queryClient.setQueriesData(["me"], result.data);

        Cookies.set("token", result.data.token, { expires: 7 });

        if (result.data === "sucess") navigate("/");
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

    return errors;
  };
  return (
    <div>
      <div className="login-page">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="inputs">
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
                  placeholder="Passeword"
                  onChange={handleChange}
                  required
                />
                <FaLock className="icon" />
              </div>
              <p>{formErrors.password}</p>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <br></br>
              <a href="/forgot-password" className="blue">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-login" onClick={handleSubmit}>
              Login
            </button>
            <button
              type="button"
              className="btn-signup"
              onClick={handleSignSubmit}
            >
              Sign UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
