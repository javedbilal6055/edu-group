import React,{useState} from "react";
import "./pricecalc.scss";
import CustomButton from "../Button/CustomButton";
import JsonForm from "../json-schema-form/JsonForm";
import ReactSpeedometer from "react-d3-speedometer";
import { Modal } from "react-bootstrap";

const PriceCalc = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = (e) => {
        e.preventDefault();
        setModalOpen(true);

    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const buttonGridData = {
        buttonGrid: true,
        pricecalculator:false,
        button1Text: "Reset Estimator",
        button2Text: "Schedule Demo",
        button1StyleName: "popupgridbutton",
        button2StyleName: "popupgridbutton",
    }
  return (
    <>
       <CustomButton buttonText={props.button1Text} styleName={props.button1StyleName} url={props.switchLeftLink} clickEvent={(e) => { openModal(e) }} />       
       <Modal show={isModalOpen} onHide={closeModal} size="lg">

<Modal.Body>

    <div className="container">
        <div className="row" >
            <div className="col-lg-12 col-md-12">
                <JsonForm buttonText="Calculate"  formType="priceCalc" {...buttonGridData} />
            </div>

            <div className="meter">
                <div className="meter-item">
                    <h5 className="meter-lable">Price Range</h5>
                    <h1 className="meter-value">350-400<sub className="meter-value-subt">Rs/Hour </sub></h1>
                <ReactSpeedometer forceRender={true}
                    maxSegmentLabels={1}
                    customSegmentStops={[100, 200, 300, 400, 500]}
                    segmentColors={['#F62681', '#AAA']}
                    needleColor={'#333'}
                    currentValueText={'Current Value: ${value}'}
                    minValue={100}
                    maxValue={500}
                    value={250}
                    textColor={'#AAA'} />
                    </div>
            </div>
        </div>
    </div>




</Modal.Body>

</Modal>
    
    
    </>
  );
};

export default PriceCalc;