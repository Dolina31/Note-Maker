import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/notes");
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div className="inputs">
          <Input title="Email" type="text" name="email" />
          <Input title="Password" type="password" name="password" />
        </div>
        <Button title="Submit" className="submit-button" type="submit" />
      </form>
    </div>
  );
};

export default LogIn;
