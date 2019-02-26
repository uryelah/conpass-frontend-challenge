import React from "react";

function FormButton(props) {
  const { text, onClick } = props;
  return (
    <button className="form-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default FormButton;
