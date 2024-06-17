import React, { useState, useEffect } from "react";
import "../AuthPage/LoginSignUpPage.css";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Data/useLogin";
import { queryClient } from "../..";
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const login = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valider les champs de formulaire
    const errors = validate(values);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);

      // Appel à l'API de connexion
      login.mutate(values, {
        onSuccess: (result) => {
          queryClient.setQueryData(["me"], result.data);
          Cookies.set("token", result.data.token, { expires: 7 });

          // Redirection après connexion réussie
          navigate("/");
        },
        onError: (error) => {
          console.log(error);
          setFormErrors({ submit: "Erreur lors de la connexion. Veuillez réessayer." });
        },
      });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully");
    }
  }, [formErrors, isSubmit]);

  const validate = (vals) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (!vals.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(vals.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!vals.password) {
      errors.password = "Password is required";
    } else if (vals.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }

    return errors;
  };

  return (
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
                placeholder="Password"
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

          {formErrors.submit && <p className="error">{formErrors.submit}</p>}

          <button type="submit" className="btn-login">
            Login
          </button>
          <button
            type="button"
            className="btn-signup"
            onClick={() => navigate("/signup")}
          >
            Sign UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
