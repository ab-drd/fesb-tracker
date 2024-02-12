import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BiUser, BiShareAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = () => {
    axios
      .post("http://localhost:4200/login", {
        fesbAccount: username,
        password: password,
      })
      .then((response) => {
        window.localStorage.setItem("token", response.data.accessToken);
        console.log(response.data.accessToken);
        navigate("/home");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
    setUsername("");
    setPassword("");
  };
  return (
    <div className="login">
      <FaGraduationCap className="icon-logo" />
      

      <form className="form">
        <div className="username">
          <BiUser className="input-icon" />
          <input
            type="text"
            placeholder="FESB korisnički račun"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="password">
          <BiShareAlt className="input-icon" />
          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className="error-message">{errorMessage}</span>
      </form>
      <div className="button-holder">
        <button
          className="btn btn-color btn-login"
          type="submit"
          onClick={() => login()}
        >
          Prijavi se
        </button>
        <p className="help-text">Pomoć</p>
      </div>
    </div>
  );
}

export default Login;
