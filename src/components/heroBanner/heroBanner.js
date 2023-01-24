import React, { useEffect, useState } from 'react';
import CustomButton from '../Button/CustomButton';
import './heroBanner.scss';
import PriceCalc from '../ButtonpriceCalc/pricecalc';
import edugrepBanner  from '../../images/JPEG/edugrep_services_banner_m.jpg';
import { useNavigate } from 'react-router-dom';


const HeroBanner =() => {
    const [content, setContent] = useState(require('./heroBanner.content.json'));
    const navigate  = useNavigate();

    const redirectit = (e) => {
        e.preventDefault();
        navigate("/student"); 
      };

    return (
        <section className="heroBanner container-fluid">
            <div className="heroBanner-top">
                <div className="heroBanner-top-left">
                    <h2 className="heroBanner-top-left-title">{content.title}</h2>
                    <p className="heroBanner-top-left-summary">{content.summary}</p>
                </div>
                <div className="heroBanner-top-right">
                     <img src={edugrepBanner} alt="Edugrep Service Banner"  className="heroBanner-top-right-img"/>
                </div>
            </div>
            <div className="heroBanner-bottom">
                 <PriceCalc button1Text = {"Price Calculator"} button1StyleName={"herobutton"} switchLeftLink={""}/>
                 <CustomButton buttonText = {"Schedule a Demo"} styleName={"herobutton"} clickEvent={(e) => redirectit(e)}/>
            </div>
        </section>);
}

export default HeroBanner;