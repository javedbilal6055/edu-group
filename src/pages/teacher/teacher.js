import React, { useState } from "react";
import ContentBox from "../../components/contentBox/contentBox";
import HeroBannerForm from "../../components/heroBanner/heroBanner";
import Contact from "../../components/contact/contact";
import RevolutionBox from "../../components/revolutionBox/revolutionBox";
import SliderDesktop from "../../components/slider/sliderDesktop";
import Footer from "../../components/footer/footer";

const TeacherPage = () => {
  const [instContent, SetInstContent] = useState(
    require("./teacher.content.json")
  );
  const { why } = instContent;
  return (
    <div>
      <div className="teacher-page">
        <HeroBannerForm
          imageName="imgTech"
          formType="teacher-register"
          buttonText={"Submit"}
          buttonStyleName={"login"}
        />
        <ContentBox
          header={why.header}
          content={why.content}
          isImageRequired={why.isImageRequired}
          imgName={why.imgName}
        />
      </div>
    </div>
  );
};

export default TeacherPage;
