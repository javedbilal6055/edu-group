import React from "react";
import "./heroBannerForm.scss";
import JsonForm from "../json-schema-form/JsonForm";
import imgInst from "../../images/JPEG/institute.jpg";
import imgTech from "../../images/PNG/teacher.PNG";
import imgStuOff from "../../images/JPEG/studentOffline.jpg";
import imgStuOn from "../../images/JPEG/studentOnline.jpg";

const HeroBannerForm = (props) => {
  var buttonGridData = {};
  var buttonSwitchData = {};
  if (props.buttonGrid) {
    buttonGridData = {
      buttonGrid: props.buttonGrid,
      pricecalculator: props.pricecalculator,
      button1Text: props.button1Text,
      button2Text: props.button2Text,
      button1StyleName: props.button1StyleName,
      button2StyleName: props.button2StyleName,
    };
  }
  if (props.buttonSwitch) {
    buttonSwitchData = {
      buttonSwitch: props.buttonSwitch,
      switchLeftText: props.switchLeftText,
      switchRightText: props.switchRightText,
      switchLeftLink: props.switchLeftLink,
      switchRightLink: props.switchRightLink,
      switchLeftActive: props.switchLeftActive,
      switchRightActive: props.switchRightActive,
    };
  }
  return (
    <div className="container-fluid hbForm">
      <div className="row">
        <div className="hbForm_left">
          {props.imageName == "imgInst" ? (
            <img src={imgInst} className="hbForm_left_img"></img>
          ) : props.imageName == "imgTech" ? (
            <img src={imgTech} className="hbForm_left_img"></img>
          ) : props.imageName == "imgStuOff" ? (
            <img src={imgStuOff} className="hbForm_left_img"></img>
          ) : props.imageName == "imgStuOn" ? (
            <img src={imgStuOn} className="hbForm_left_img"></img>
          ) : (
            "none"
          )}
        </div>
        <div className="hbForm_right">
          <JsonForm
            formType={props.formType}
            buttonText={props.buttonText}
            buttonStyleName={props.buttonStyleName}
            {...buttonGridData}
            {...buttonSwitchData}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBannerForm;
