import React, { useContext, useState } from "react";
import ContentBox from "../../components/contentBox/contentBox";
import HeroBannerForm from "../../components/heroBanner/heroBanner";
import Contact from "../../components/contact/contact";
import RevolutionBox from "../../components/revolutionBox/revolutionBox";
import SliderDesktop from "../../components/slider/sliderDesktop";
import Footer from "../../components/footer/footer";
import { toast } from "react-toastify";
import axiosGet from "../../axios/axiosGet";
import axiosOtpPost from "../../axios/axiosOtpPost";
import "./institution.scss";
import { FormContext } from "../../allContext/context";
const InstitutionPage = () => {
  const [instContent, SetInstContent] = useState(
    require("./institution.content.json")
  );
  console.log("..schema222",instContent);
  const {
    saveUserDetails,
    saveFormData,
    formData,
    multiStepForm,
    saveMultiStepForm,
    userData,
    setUserData,
  } = useContext(FormContext);
  
  const showStep2Divs = () => {
    let step1Divs = document.querySelectorAll(".step-1");
    let step2Divs = document.querySelectorAll(".step-2");
    for (var i = 0; i < step1Divs.length; i++) {
      step1Divs[i].classList.add("hidden-element");
    }
    for (var i = 0; i < step2Divs.length; i++) {
      step2Divs[i].classList.add("visible-element");
      step2Divs[i].classList.remove("hidden-element");
    }
  };

  if (multiStepForm?.institutionStatus === "step-1-completed") {
    showStep2Divs();
  }

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("custom-button__otp-button")) {
      e.preventDefault();
      let thisForm = e.target.closest(".rjsf");
      if (thisForm != undefined && !thisForm.classList.contains("otp-sent")) {
        let contactFieldWrapper = thisForm.querySelector(
          ".contact-field-wrapper"
        );
        let contactNumber = thisForm.querySelector(
          ".contact-field-wrapper .otp-left"
        );
        let otpField = thisForm.querySelector(
          ".studentOffline-register__otp-box .form-control"
        );
        // let cityField = thisForm.querySelector('.studentOffline-register__city');

        let getRequestData = {
          path: `/register/${contactNumber.value}/getOTP`,
        };
        axiosGet(getRequestData)
          .then(async (res) => {
            const data = {
              numbers: contactNumber.value,
              otp: await res.data.OTP,
            };
            saveUserDetails({ otp: data.otp });
            axiosOtpPost(data)
              .then((resp) => {
                toast.success("Otp sent successfully!");
              })
              .catch((err) => {
                toast.error("something went wrong!");
              });
          })
          .catch((err) => {
            toast.error("something went wrong!");
          });

        if (otpField !== undefined && contactNumber.value !== "") {
          otpField.removeAttribute("disabled");
          thisForm.classList.add("otp-sent");
          contactNumber.setAttribute("disabled", true);
          contactNumber.setAttribute("value", contactNumber.value);
          let hintMessageDiv = `<div class="hint-message-div">We have sent OTP to +91 ${contactNumber.value}</div>`;
          e.target.innerText = "Resend OTP";
          contactFieldWrapper.innerHTML =
            contactFieldWrapper.innerHTML + hintMessageDiv;
          // cityField.classList.add('studentOffline-register__city-visible');
        }
      }
    } else if (
      e.target.classList.contains("custom-button__institutionGridbutton")
    ) {
      e.preventDefault();
      let formTitle = document.getElementById("root__title");
      let rootDescription = document.getElementById("root__description");
      let passwordFieldWrapper = document.querySelector(
        ".institution-register__password-input"
      );
      formTitle.classList.add("hidden-element");
      rootDescription.classList.add("hidden-element");
      if (
        multiStepForm?.institutionStatus === "step-1-completed" &&
        !passwordFieldWrapper.classList.contains(
          "institution-register__password-description"
        )
      ) {
        passwordFieldWrapper.classList.add(
          "institution-register__password-description"
        );
        let hintMessageDiv = document.createElement("div");
        hintMessageDiv.classList.add("institution-register__hint-password-div");
        hintMessageDiv.innerHTML =
          "(Password must have at least of 8 characters consisting of one char, one digit and one special character)";
        passwordFieldWrapper.appendChild(hintMessageDiv);
      }
      let confirmPasswordField = document.querySelector(
        ".institution-register__confirm-password-input"
      );
      let rootPassword = document.getElementById("root_instituteUserPassword");
      let rootConfirmPassword = document.getElementById(
        "root_instituteConfirmPassword"
      );

      rootPassword.addEventListener("blur", function (e) {
        e.preventDefault();
        let existingNode = document.querySelector(".password-matched");
        if (existingNode) {
          existingNode.remove();
        }
        if (rootPassword?.value && rootConfirmPassword?.value) {
          if (rootPassword?.value == rootConfirmPassword?.value) {
            let passwordMatched = document.createElement("div");
            passwordMatched.classList.add("password-matched");
            passwordMatched.innerHTML = "Password Matched";
            confirmPasswordField.appendChild(passwordMatched);
          } else if (rootPassword?.value != rootConfirmPassword?.value) {
            let passwordMatched = document.createElement("div");
            passwordMatched.classList.add("password-matched");
            passwordMatched.innerHTML = "Password Not Matched";
            confirmPasswordField.appendChild(passwordMatched);
          }
        }
      });

      rootConfirmPassword.addEventListener("blur", function (e) {
        e.preventDefault();
        let existingNode = document.querySelector(".password-matched");
        if (existingNode) {
          existingNode.remove();
        }
        if (rootPassword?.value && rootConfirmPassword?.value) {
          if (rootPassword?.value == rootConfirmPassword?.value) {
            let passwordMatched = document.createElement("div");
            passwordMatched.classList.add("password-matched");
            passwordMatched.innerHTML = "Password Matched";
            confirmPasswordField.appendChild(passwordMatched);
          } else if (rootPassword?.value != rootConfirmPassword?.value) {
            let passwordMatched = document.createElement("div");
            passwordMatched.classList.add("password-matched");
            passwordMatched.innerHTML = "Password Not Matched";
            confirmPasswordField.appendChild(passwordMatched);
          }
        }
      });
    }
  });

  const { why } = instContent;
  const buttonGridData = {
    buttonGrid: false,
    pricecalculator: false,
    button1Text: "Price Calculator",
    button2Text: "Schedule Demo",
    button1StyleName: "gridbutton",
    button2StyleName: "gridbutton",
  };
  return (
    <div>
      <div className="institution-page">
        <HeroBannerForm
          imageName="imgInst"
          formType="institution-register"
          buttonText={"Submit"}
          buttonStyleName={"institutionGridbutton"}
        />
        <ContentBox
          header={why.header}
          content={why.content}
          isImageRequired={why.isImageRequired}
        />
      </div>
      <RevolutionBox />
      <SliderDesktop />
      <Contact buttonText={"Submit"} buttonStyleName={"login"} />
      <Footer />
    </div>
  );
};

export default InstitutionPage;
