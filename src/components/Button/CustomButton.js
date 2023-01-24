import React from "react";
import "./CustomButton.scss";

const CustomButton = (Props) => {
  const link = Props.url || "#";
  const isSubmit = Props.isSubmit || false;
  return (
    <div className="custom-button ">
      <a
        href={link}
        className={`btn custom-button__${Props.styleName}`}
        onClick={Props.clickEvent}
      >
        {Props.buttonText}
      </a>
    </div>
  );
};

export default CustomButton;
