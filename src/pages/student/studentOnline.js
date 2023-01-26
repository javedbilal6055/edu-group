import React, { useContext, useState } from "react";
import HeroBannerForm from "../../components/heroBannerForm/heroBannerForm";
import axiosGet from "../../axios/axiosGet";
import axiosOtpPost from "../../axios/axiosOtpPost";
import { toast } from "react-toastify";
import "./studentOnline.scss";
import { FormContext } from "../../allContext/context";

const StudentOnline = () => {
  const {
    formData,
    saveFormData,
    userDetails,
    saveUserDetails,
    multiStepForm,
    saveMultiStepForm,
    userData,
    setUserData,
    formState,
    setFormState,
  } = useContext(FormContext);

  const buttonGridData = {
    buttonGrid: true,
    pricecalculator: true,
    button1Text: "Price Calculator",
    button2Text: "Schedule Demo",
    button1StyleName: "gridbutton",
    button2StyleName: "gridbutton",
  };
  const buttonSwitchData = {
    buttonSwitch: true,
    switchLeftText: "Home Tuition",
    switchRightText: "Online Tuition",
    switchLeftLink: "/student",
    switchRightLink: "/student-on",
    switchLeftActive: false,
    switchRightActive: true,
  };

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

  const showStep3Divs = () => {
    let step2Divs = document.querySelectorAll(".step-2");
    let step3Divs = document.querySelectorAll(".step-3");
    for (var i = 0; i < step2Divs.length; i++) {
      step2Divs[i].classList.add("hidden-element");
      step2Divs[i].classList.remove("visible-element");
    }
    for (var i = 0; i < step3Divs.length; i++) {
      step3Divs[i].classList.add("visible-element");
      step3Divs[i].classList.remove("hidden-element");
    }
  };
  if (multiStepForm?.status === "step-1-completed") {
    showStep2Divs();
  }
  if (multiStepForm?.status === "step-2-completed") {
    showStep3Divs();
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
          ".studentOnline-register__otp-box .form-control"
        );
        let cityField = thisForm.querySelector(".studentOnline-register__city");

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

        if (otpField != undefined && contactNumber.value != "") {
          otpField.removeAttribute("disabled");
          thisForm.classList.add("otp-sent");
          contactNumber.setAttribute("disabled", true);
          contactNumber.setAttribute("value", contactNumber.value);
          let hintMessageDiv = `<div class="hint-message-div">We have sent OTP to +91 ${contactNumber.value}</div>`;
          e.target.innerText = "Resend OTP";
          contactFieldWrapper.innerHTML =
            contactFieldWrapper.innerHTML + hintMessageDiv;
          cityField.classList.add("studentOnline-register__city-visible");
        }
      }
    } else if (e.target.classList.contains("custom-button__gridbutton")) {
      e.preventDefault();
      let userName = document.getElementById("root_userName");
      let formTitle = document.getElementsByClassName(
        "json-form__headings-title"
      );
      let description = document.getElementsByClassName(
        "json-form__headings-description"
      );
      let switchBtns = document.getElementsByClassName("switch-buttons");
      let btnSwitchDescription = document.getElementsByClassName(
        "json-form__headings-buttonSwitchDesciption"
      );
      let passwordFieldWrapper = document.querySelector(".password-input");
      formTitle[0].classList.add("hidden-element");
      switchBtns[0].classList.add("hidden-element");
      btnSwitchDescription[0].classList.add("hidden-element");
      userName.classList.add("hidden-element");
      if (multiStepForm?.status === "step-1-completed") {
        description[0].innerHTML = `I am ${
          formData?.userName || "name"
        } looking for online classes in ${formData?.City || "city"}`;
      }
      if (multiStepForm?.status === "step-2-completed") {
        const { selectBoard, chooseSubject, chooseClass, City } = formData;
        btnSwitchDescription[0].classList.remove("hidden-element");
        btnSwitchDescription[0].classList.add("rate-description", "mb-4");
        description[0].innerHTML = `A request for Demo Scheduling has been submitted Successfully`;
        btnSwitchDescription[0].innerHTML = `${selectBoard} ${chooseSubject} tutor for class ${chooseClass} in ${City} starts at Rs/-180 per hour`;
        if (!passwordFieldWrapper.classList.contains("password-description")) {
          passwordFieldWrapper.classList.add("password-description");
          let hintMessageDiv = document.createElement("div");
          hintMessageDiv.classList.add("hint-password-div");
          hintMessageDiv.innerHTML =
            "(Password must have at least of 8 characters consisting of one char, one digit and one special character)";
          passwordFieldWrapper.appendChild(hintMessageDiv);
        }
      }

      let confirmPasswordFieldWrapper = document.querySelector(
        ".confirm-password-input"
      );
      let rootPassword = document.getElementById("root_password");
      let rootConfirmPassword = document.getElementById("root_confirmPassword");

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
            confirmPasswordFieldWrapper.appendChild(passwordMatched);
          } else if (rootPassword?.value != rootConfirmPassword?.value) {
            let passwordMatched = document.createElement("div");
            passwordMatched.classList.add("password-matched");
            passwordMatched.innerHTML = "Password Not Matched";
            confirmPasswordFieldWrapper.appendChild(passwordMatched);
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
            confirmPasswordFieldWrapper.appendChild(passwordMatched);
          } else if (rootPassword?.value != rootConfirmPassword?.value) {
            let passwordMatched = document.createElement("div");
            passwordMatched.classList.add("password-matched");
            passwordMatched.innerHTML = "Password Not Matched";
            confirmPasswordFieldWrapper.appendChild(passwordMatched);
          }
        }
      });
    }
  });

  return (
    <div
      className={`${
        multiStepForm?.status === "step-1-completed" && "step-2-design"
      } student-online-wrapper`}
    >
      <HeroBannerForm
        imageName="imgStuOn"
        formType="studentOnline-register"
        buttonText={"Schedule Demo"}
        buttonStyleName={"herobutton"}
        {...buttonSwitchData}
        {...buttonGridData}
      />
    </div>
  );
};

export default StudentOnline;
