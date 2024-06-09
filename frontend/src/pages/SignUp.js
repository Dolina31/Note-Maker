import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/notes");
  };
  return (
    <div className="signup-page">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="inputs">
          <Input title="Email" type="text" name="email" />
          <Input title="UserName" type="text" name="username" />
          <Input title="Password" type="password" name="password" />
          <Input
            title="Confirm Password"
            type="password"
            name="confirm password"
          />{" "}
        </div>
        <Button title="Submit" className="submit-button" />
      </form>
    </div>
  );
};

export default SignUp;
