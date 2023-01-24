import React, { useState } from "react";
import "./slider.scss";
import "../../../node_modules/slick-carousel/slick.jquery.json";
import Carousel from "react-bootstrap/Carousel";


const SliderDesktop = () => {
  const [sliderContent, setSldierContent] = useState(
    require("../slider/slider.content.json")
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="sliderBg  container-fluid">
      <div className="row">
        <h2 className="sliderBg_header">{sliderContent.heading}</h2>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-2 sliderBg_left"></div>
        <div className="col-lg-8 col-md-8 sliderBg_center">
          <Carousel>
            {sliderContent.slides.map((item) => {
              return (
                <Carousel.Item interval={1000}>
                  <h3 className="sliderBg_center_content">{item.content}</h3>
                  <div className="align-center">
                    <h3 className="sliderBg_center_name">{item.name}</h3>
                    <p className="sliderBg_center_designation">
                      {item.designation}
                    </p>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="col-lg-2 col-md-2 sliderBg_right"></div>
      </div>
    </div>
  );
};

export default SliderDesktop;
