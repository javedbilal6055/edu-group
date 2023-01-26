import React, { useState } from "react";
import ContentBox from "../../components/contentBox/contentBox";
import HeroBanner from "../..//components/heroBanner/heroBanner";
import Contact from "../../components/contact/contact";
import RevolutionBox from "../../components/revolutionBox/revolutionBox";
import SliderDesktop from "../../components/slider/sliderDesktop";
import Footer from "../../components/footer/footer";

const Homepage = () => {
  const [homeContent, setHomeContent] = useState(
    require("./home.content.json")
  );
  const { about } = homeContent;
  return (
    <div>
      <div className="home-page">
        <HeroBanner />
        <ContentBox
          header={about.header}
          content={about.content}
          isButtonRequired={about.isButtonRequired}
          styleName={about.styleName}
          buttonText={about.buttonText}
          isImageRequired={about.isImageRequired}
        />
      </div>
    </div>
  );
};

export default Homepage;
