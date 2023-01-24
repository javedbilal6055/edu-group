import React from "react";
import "./contentBox.scss";

import whyTeacher from "../../images/JPEG/whyTeacher.jpg";
import CustomButton from "../Button/CustomButton";

const ContentBox = (Props) => {
  if (!Props.isImageRequired) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 cbox">
            <h1 className="cbox_header">{Props.header}</h1>
            <p className="cbox_content">{Props.content}</p>
            {Props.isButtonRequired ? (
              <CustomButton
                styleName={Props.styleName}
                buttonText={Props.buttonText}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 cboximg">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={whyTeacher} className="cboximg_image" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <h1 className="cboximg_header">{Props.header}</h1>
              <p className="cboximg_content">{Props.content}</p>

              {Props.isButtonRequired ? (
                <CustomButton
                  styleName={Props.styleName}
                  buttonText={Props.buttonText}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ContentBox;
