import React, { useState } from "react";
import "./revolutionBox.scss";
import imgTeacher from "../../images/svg/Teacher.svg";
import imgStudent from "../../images/svg/Student.svg";
import imgClass from "../../images/svg/Class.svg";

const RevolutionBox = () => {
  const [revContent, setRevContnet] = useState(
    require("../revolutionBox/revolutionBox.content.json")
  );

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-11 col-md-12 revBox">
          <h1 className="revBox_header">{revContent.header}</h1>
          <div className="row">
            {revContent.content.map((items) => {
              return (
                <div className="col-md-4 revBox_content">
                  <img
                    className="revBox_content_image"
                    src={
                      items.imageName == "teacher"
                        ? imgTeacher
                        : items.imageName == "student"
                        ? imgStudent
                        : items.imageName == "class"
                        ? imgClass
                        : null
                    }
                  />
                  <h1 className="revBox_content_stats">
                    {items.stats}
                    <sup>+</sup>
                  </h1>
                  <h5 className="revBox_content_desc">{items.desc}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionBox;
