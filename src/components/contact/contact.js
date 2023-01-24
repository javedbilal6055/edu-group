import React from 'react'
import './contact.scss'
import JsonForm from '../json-schema-form/JsonForm';

const Contact =(props) =>{
    return (
        <div className="container-fluid containerBg">
            <div className="row ">
                <div className=" containerBg_center">
                    <JsonForm buttonText={props.buttonText} buttonStyleName={props.buttonStyleName} formType={props.formType} />
                </div>
            </div>
        </div>
    );
}


export default Contact;