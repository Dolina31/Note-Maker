import React from "react";

const Input = ({ name, type, title }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{title}</label>
      <input type={type} id={name} name={name} />
    </div>
  );
};

export default Input;
