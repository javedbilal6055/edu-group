import React, { useState } from "react";
import ContentBox from "../../components/contentBox/contentBox";


const AboutPage = () => {
  const [instContent, SetInstContent] = useState(
    require("./about.content.json")
  );
  const { why } = instContent;
  return (
    <div>
      <div className="teacher-page">
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

export default AboutPage;
