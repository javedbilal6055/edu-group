import React, { useEffect, useState } from 'react';
import ContentBox from '../../contentBox/contentBox';
import HeroBannerForm from '../../heroBannerForm/heroBannerForm';
import Contact from '../../contact/contact';
import RevolutionBox from '../../revolutionBox/revolutionBox';
import SliderDesktop from '../../slider/sliderDesktop'
import Footer from '../../footer/footer'
import HowItWorkBox from '../../howItWork/howItWork';
import CustomButton from '../../Button/CustomButton';
import axiosPost from "../../../axios/axiosPost";
import axiosGet from "../../../axios/axiosGet";
import './studentOffline.scss';
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../../state/index";
import { bindActionCreators } from "redux";
import axiosOtpPost from '../../../axios/axiosOtpPost';
import { toast } from 'react-toastify';


    
   

const StudentOffline = () => {

    const [stepNumber, setStepNumber] = useState(1);
    var formDataRedux = useSelector((state) => state.jsonForm);
    var userDataRedux = useSelector((state) => state.user);
    const multiStepFormRedux = useSelector((state) => state.multiStepForm);

    const [formState, setFormState] = useState(formDataRedux);
    const [testState, setTestState] = useState(0);
    
    console.log("JSON Form state is", formDataRedux);
    console.log("User state is ", userDataRedux);
    console.log("multistep steps",multiStepFormRedux);


    const dispatch = useDispatch();
    const { saveUserDetails, saveFormData } = bindActionCreators(actionCreators, dispatch);


    useEffect(() => {
       
    }, [])
    
    const showStep2Divs = ()=>{
        let step1Divs = document.querySelectorAll('.step-1');
        let step2Divs = document.querySelectorAll('.step-2');   
            for (var i = 0; i < step1Divs.length; i++) {
                step1Divs[i].classList.add('hidden-element');
            }
            for (var i = 0; i < step2Divs.length; i++) {
                step2Divs[i].classList.add('visible-element');
                step2Divs[i].classList.remove('hidden-element');
            }      
        
    }

    const showStep3Divs = () => {
        let step2Divs = document.querySelectorAll('.step-2');   
        let step3Divs = document.querySelectorAll('.step-3');
        for (var i = 0; i < step2Divs.length; i++) {
            step2Divs[i].classList.add('hidden-element');
            step2Divs[i].classList.remove('visible-element');
        }    
        for (var i = 0; i < step3Divs.length; i++) {
            step3Divs[i].classList.add('visible-element');
            step3Divs[i].classList.remove('hidden-element');
        }   
    }
    
    const showStep4Divs = () => {
        let step3Divs = document.querySelectorAll('.step-3');
        let step4Divs = document.querySelectorAll('.step-4');
        for (var i = 0; i < step3Divs.length; i++) {
            step3Divs[i].classList.add('hidden-element');
            step3Divs[i].classList.remove('visible-element');
        }    
        for (var i = 0; i < step4Divs.length; i++) {
            step4Divs[i].classList.add('visible-element');
            step4Divs[i].classList.remove('hidden-element');
        }   
    }
    if(multiStepFormRedux.status === 'step-1-completed') {
        showStep2Divs();      
    }
    if(multiStepFormRedux.status === 'step-2-completed') {
        showStep3Divs();
    }
    if(multiStepFormRedux.status === 'step-3-completed') {
        showStep4Divs();
    }

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('custom-button__otp-button')) {
            e.preventDefault();
            let thisForm = e.target.closest('.rjsf');
            if (thisForm != undefined && !thisForm.classList.contains('otp-sent')) {
                let contactFieldWrapper = thisForm.querySelector('.contact-field-wrapper');
                let contactNumber = thisForm.querySelector('.contact-field-wrapper .otp-left');
                let otpField = thisForm.querySelector('.studentOffline-register__otp-box .form-control');
                let cityField = thisForm.querySelector('.studentOffline-register__city');

                let getRequestData = {
                    path: `/register/${contactNumber.value}/getOTP`
                };
                axiosGet(getRequestData).then(async res => {
                    const data = {
                        numbers: contactNumber.value,
                        otp: await res.data.OTP
                    }
                    saveUserDetails({otp: data.otp})
                    axiosOtpPost(data).then(resp => {
                        toast.success('Otp sent successfully!')
                    }).catch(err => {
                        toast.error('something went wrong!')
                    });
                }).catch(err => {
                    toast.error('something went wrong!')
                })

                if (otpField != undefined && contactNumber.value != '') {
                    otpField.removeAttribute('disabled');
                    thisForm.classList.add('otp-sent');
                    contactNumber.setAttribute('disabled', true);
                    contactNumber.setAttribute('value', contactNumber.value);
                    let hintMessageDiv = `<div class="hint-message-div">We have sent OTP to +91 ${contactNumber.value}</div>`;
                    e.target.innerText = "Resend OTP";
                    contactFieldWrapper.innerHTML = contactFieldWrapper.innerHTML + hintMessageDiv;
                    cityField?.classList.add('studentOffline-register__city-visible');
                }

            }
        } else if (e.target.classList.contains('custom-button__gridbutton')) {
            e.preventDefault();
            let formTitle = document.getElementsByClassName('json-form__headings-title');
            let description = document.getElementsByClassName('json-form__headings-description')
            let switchBtns = document.getElementsByClassName('switch-buttons');
            let btnSwitchDescription = document.getElementsByClassName('json-form__headings-buttonSwitchDesciption');
            let passwordFieldWrapper = document.querySelector('.password-input');
            formTitle[0].classList.add('hidden-element');
            switchBtns[0].classList.add('hidden-element')
            btnSwitchDescription[0].classList.add('hidden-element');
            if(multiStepFormRedux.status === 'step-1-completed') {
                description[0].classList.add('mb-5')
                description[0].innerHTML = `I am ${formDataRedux.userName || "name"} looking for online classes in ${formDataRedux.City || "city"}`
            }
            if(multiStepFormRedux.status === 'step-2-completed') {
                description[0].classList.add('last-two-step-headings')
                description[0].innerHTML = `Please select your preferences . This will help us to assign you the best teacher`
            }
            if(multiStepFormRedux.status === 'step-3-completed') {
                const {selectBoard, chooseSubject, chooseClass, City} = formDataRedux;
                btnSwitchDescription[0].classList.remove('hidden-element')
                btnSwitchDescription[0].classList.add('rate-description', 'mb-4')
                description[0].innerHTML = `A request for Demo Scheduling has been submitted Successfully`;
                btnSwitchDescription[0].innerHTML = `${selectBoard} ${chooseSubject} tutor for class ${chooseClass} in ${City} starts at Rs/-180 per hour`;
                if(!passwordFieldWrapper.classList.contains('password-description')) {
                passwordFieldWrapper.classList.add('password-description');
                let hintMessageDiv = document.createElement("div")
                hintMessageDiv.classList.add('hint-password-div');
                hintMessageDiv.innerHTML = "(Password must have at least of 8 characters consisting of one char, one digit and one special character)";
                passwordFieldWrapper.appendChild(hintMessageDiv)
                }
            }

            let confirmPasswordFieldWrapper = document.querySelector('.confirm-password-input');
            let rootPassword = document.getElementById('root_password');
            let rootConfirmPassword = document.getElementById('root_confirmPassword')

            rootPassword.addEventListener('blur', function(e) {
                e.preventDefault();
                let existingNode = document.querySelector('.password-matched')
                if(existingNode) {
                    existingNode.remove()
                }
                if(rootPassword?.value && rootConfirmPassword?.value) {
                    if(rootPassword?.value == rootConfirmPassword?.value) {
                        let passwordMatched = document.createElement('div');
                        passwordMatched.classList.add('password-matched');
                        passwordMatched.innerHTML = "Password Matched"
                        confirmPasswordFieldWrapper.appendChild(passwordMatched)
                    }
                    else if(rootPassword?.value != rootConfirmPassword?.value) {
                        let passwordMatched = document.createElement('div');
                        passwordMatched.classList.add('password-matched');
                        passwordMatched.innerHTML = "Password Not Matched"
                        confirmPasswordFieldWrapper.appendChild(passwordMatched)
                    }
                }
            })
      
            rootConfirmPassword.addEventListener('blur', function(e) {
                e.preventDefault();
                let existingNode = document.querySelector('.password-matched')
                if(existingNode) {
                    existingNode.remove()
                }
                if(rootPassword?.value && rootConfirmPassword?.value) {
                    if(rootPassword?.value == rootConfirmPassword?.value) {
                        let passwordMatched = document.createElement('div');
                        passwordMatched.classList.add('password-matched');
                        passwordMatched.innerHTML = "Password Matched"
                        confirmPasswordFieldWrapper.appendChild(passwordMatched)
                    }
                    else if(rootPassword?.value != rootConfirmPassword?.value) {
                        let passwordMatched = document.createElement('div');
                        passwordMatched.classList.add('password-matched');
                        passwordMatched.innerHTML = "Password Not Matched"
                        confirmPasswordFieldWrapper.appendChild(passwordMatched)
                    }
                }
            })
        }
    })

    const buttonGridData = {
        buttonGrid: true,
        pricecalculator: true,
        button1Text: "Price Calculator",
        button2Text: "Schedule Demo",
        button1StyleName: "pricegridbutton",
        button2StyleName: "gridbutton",
    }

    const buttonSwitchData = {
        buttonSwitch: true,
        switchLeftText: "Home Tuition",
        switchRightText: "Online Tuition",
        switchLeftLink: "/student",
        switchRightLink: "/student-on",
        switchLeftActive: true,
        switchRightActive: false
    }
    return (
        <div>
            <HeroBannerForm imageName="imgStuOff" formType="studentOffline-register" buttonText={"Schedule Demo"} buttonStyleName={"herobutton"}  {...buttonGridData} {...buttonSwitchData} />
            <HowItWorkBox />
            <RevolutionBox />
            <SliderDesktop />
            <Contact buttonText={"Submit"} buttonStyleName={"login"} />
            <Footer />
        </div>
    );
}

export default StudentOffline;