import React from "react";

const TextInput = ({ label, name, type, onChange, value }) => {
  return (
    <div className="input-field">
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default TextInput;
