import React, { useState } from 'react';
import ContentBox from '../../contentBox/contentBox';
import HeroBannerForm from '../../heroBannerForm/heroBannerForm';
import Contact from '../../contact/contact';
import RevolutionBox from '../../revolutionBox/revolutionBox';
import SliderDesktop from '../../slider/sliderDesktop'
import Footer from '../../footer/footer'


const TeacherPage = () => {
    const [instContent, SetInstContent] = useState(require('./teacher.content.json'));
    const {why} = instContent;
    return (
        <div>
        <div className="teacher-page">
            <HeroBannerForm imageName="imgTech" formType="teacher-register" buttonText={"Submit"} buttonStyleName={"login"} />
            <ContentBox header={why.header} content ={why.content} isImageRequired={why.isImageRequired}
                imgName={why.imgName} />
        </div>
        <RevolutionBox />
        <SliderDesktop/>
        <Contact  buttonText={"Submit"} buttonStyleName={"login"}/>
        <Footer />
        </div>
    );
}

export default TeacherPage 
