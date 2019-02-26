import React, { useState, useEffect } from "react";

function FormInput(props) {
  const {
    edittable,
    autoFocus,
    type,
    name,
    value,
    onChange,
    placeholder
  } = props;
  const [border, setBorder] = useState(edittable);

  useEffect(() => {
    setBorder(edittable);
  }, [edittable]);

  return (
    <input
      placeholder={placeholder}
      className={border ? "form-input" : "form-input_disabled"}
      autoFocus={autoFocus}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default FormInput;
