import React from "react";
import Hero from "../components/Hero";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="homepage">
      <Hero />
      <div className="signup-redirection">
        <NavLink to="/signup">
          <Button title="Sign Up Now !" className="homepage-button" />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
