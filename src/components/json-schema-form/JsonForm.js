import React, { useContext, useEffect, useState } from "react";
import "./JsonForm.scss";

import CustomButton from "../Button/CustomButton";
import SwitchButtons from "../switchButtons/SwitchButtons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPut from "../../axios/axiosPut";
import axiosPost from "../../axios/axiosPost";
import { FormContext } from "../../allContext/context";
import PriceCalc from "../ButtonpriceCalc/pricecalc";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
const JsonForm = (props) => {
  const navigate = useNavigate();
  let contactUsData = require("./contactUsSchema");
  let institutionRegisterData = require("./institutionRegisterSchema");
  let teacherRegisterData = require("./teacherRegisterSchema");
  let studentOfflineData = require("./studentOfflineSchema");
  let studentOnlineData = require("./studentOnlineSchema");
  let loginFormData = require("./loginSchema");

  let PriceCalcFormData = require("./priceCalcSchema");
  const {
    saveUserDetails,
    userDetails,
    saveFormData,
    formData,
    multiStepForm,
    saveMultiStepForm,
    userData,
    setUserData,
    isModalOpen, setModalOpen
  } = useContext(FormContext);
  const [schemaData, setSchemaData] = useState(contactUsData);

  console.log("JSON Form state is", formData);
  console.log("User state is ", userDetails);
  /* Redux store related code */

  useEffect(() => {
    /* To hide the json form submit button and display custom button*/

    let rjsfButtons = document.querySelectorAll(
      ".rjsf .btn:not(.custom-button__otp-button)"
    );

    for (let i = 0; i < rjsfButtons.length; i++) {
      let element = rjsfButtons[i];
      element.style.display = "none";
    }

    /* To change form data based on props */
    if (props.formType === "institution-register") {
      setSchemaData(institutionRegisterData);
    } else if (props.formType === "studentOnline-register") {
      setSchemaData(studentOnlineData);
    } else if (props.formType === "studentOffline-register") {
      setSchemaData(studentOfflineData);
    } else if (props.formType === "teacher-register") {
      setSchemaData(teacherRegisterData);
    } else if (props.formType === "login") {
      setSchemaData(loginFormData);
    } else if (props.formType === "priceCalc") {
      setSchemaData(PriceCalcFormData);
    } else if (props.formType === "contact-us") {
      setSchemaData(contactUsData);
    }
  });
  var buttonGridData = {};
  var buttonSwitchData = {};
  if (props.buttonGrid) {
    buttonGridData = {
      buttonGrid: props.buttonGrid,
      pricecalculator: props.pricecalculator,
      button1Text: props.button1Text,
      button2Text: props.button2Text,
      button1StyleName: props.button1StyleName,
      button2StyleName: props.button2StyleName,
    };
  }
  if (props.buttonSwitch) {
    buttonSwitchData = {
      buttonSwitch: props.buttonSwitch,
      switchLeftText: props.switchLeftText,
      switchRightText: props.switchRightText,
      switchLeftLink: props.switchLeftLink,
      switchRightLink: props.switchRightLink,
      switchLeftActive: props.switchLeftActive,
      switchRightActive: props.switchRightActive,
    };
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    //console.log("Submit Event");
    switch (props.formType) {
      case "login":
        loginFormSubmit(props.formType);
        break;
      case "studentOffline-register":
        studentOfflineFormSubmit();
        break;
      case "studentOnline-register":
        studentOnlineFormSubmit();
        break;
      case "contact-us":
        contactFormSubmit();
        break;
      case "institution-register":
        institueRegister();
        break;
      default:
        return false;
    }
  };

  const handleFormChange = (formData) => {
    if (formData) {
      saveFormData(formData);
    }
  };

  // To handle form submissions
  const loginFormSubmit = async (type) => {
    console.log("login frm....",type);
    const postRequestData = {
      path: "/register/login",
      data: {
        username: formData?.userName,
        password: formData?.password,
      },
    };
    let loginRequest = await axiosPost(postRequestData);
    console.log("login response....",loginRequest);
    if (loginRequest.data.access_token != undefined) {
      let response = loginRequest.data;
      let userDataObject = {
        accessToken: response.access_token || "",
        email: response.data.email || "",
        fname: response.data.fname || "",
        lname: response.data.lname || "",
        role: response.data.role || "",
        userId: response.data.userId,
        userData: response.data,
      };
      localStorage.setItem("access_token", loginRequest.data.access_token);
      saveUserDetails(userDataObject);
      if (userDataObject.role === "admin") {
        navigate("/adminZone");
      } else if (userDataObject.role === "teacher") {
        navigate("/teacherZone");
      } else if (userDataObject.role === "institute") {
        navigate("/instituteZone");
      } else if (userDataObject.role === "student") {
        navigate("/studentZone");
      }
    }
    else {
      console.log("Database Error");
      setModalOpen(false)
      navigate("/");
    }
  };

  const contactFormSubmit = async (e) => {
    const postRequestData = {
      path: "/enquiry/create",
      data: {
        name: formData?.name,
        mobile: formData?.mobile,
        email: formData?.email,
        message: formData?.message,
      },
    };
    let contactSubmit = await axiosPost(postRequestData);
    toast.success(contactSubmit.data);
    saveFormData(null);
  };

  const institueRegister = async (e) => {
    console.log("institute register clicked");
    const storedOtp = userData?.otp;
    const instituteDataId = userData?.userId;
    if (multiStepForm.institutionStatus === "not-submitted") {
      if (storedOtp !== formData?.instituteEnterOTP) {
        toast.error("Otp is incorrect!");
      } else {
        console.log("Step 1");
        toast.success("Otp verified successfully!");
        // STEP - 1 CODE HERE

        const postRequestData = {
          path: "/register/createUser",
          data: {
            fname: formData?.instituteUserName,
            lname: formData?.instituteUserName,
            mobile: formData?.instituteUserContactNo,
            password: null,
            email: formData?.email,
            role: "",
            address: {},
            orgName: formData?.orgName,
            isMobileVerified: false,
            registered: false,
          },
        };
        let loginRequest = await axiosPost(postRequestData);
        if (loginRequest.data.access_token !== undefined) {
          let response = loginRequest.data;
          let userDataObject = {
            accessToken: response.access_token || "",
            data: response.data,
          };
          saveUserDetails({
            ...userDataObject,
            instituteDataId: userDataObject.data,
          });
          localStorage.setItem(
            "institute_access_token",
            userDataObject.accessToken
          );
          // IF STEP 1 IS SUCCESS
          saveMultiStepForm({
            ...multiStepForm,
            institutionStatus: "step-1-completed",
          });
        }
      }
    }
    if (multiStepForm.institutionStatus === "step-1-completed") {
      console.log("Step 2");
      // STEP - 2 CODE HERE
      const updateRequestData = {
        path: `/register/updateUser/${instituteDataId}`,
        data: {
          password: formData.instituteUserPassword,
        },
        type: "institute",
      };
      let updateUserRequest = await axiosPut(updateRequestData);
      if (updateUserRequest) {
        toast.success("Profile Created Successfully!");
      }
    }
  };

  const studentOnlineFormSubmit = async (e) => {
    const storedOtp = userData?.otp;
    const userId = userData?.userId;
    if (multiStepForm.status === "not-submitted") {
      if (storedOtp !== formData?.enterOTP) {
        toast.error("Otp is incorrect!");
      } else {
        console.log("Step 1");
        toast.success("Otp verified successfully!");
        // STEP - 1 CODE HERE

        const postRequestData = {
          path: "/register/createUser",
          data: {
            fname: formData?.userName,
            lname: formData?.userName,
            mobile: formData?.contactNo,
            password: null,
            email: null,
            role: "student",
            address: {
              city: formData?.City,
            },
            orgName: null,
            isMobileVerified: false,
            registered: false,
          },
        };
        let loginRequest = await axiosPost(postRequestData);
        if (loginRequest.data.access_token != undefined) {
          let response = loginRequest.data;
          let userDataObject = {
            accessToken: response.access_token || "",
            data: response.data,
          };
          saveUserDetails(userDataObject);
          localStorage.setItem("access_token", userDataObject.accessToken);
          //             // IF STEP 1 IS SUCCESS
          multiStepForm({ status: "step-1-completed" });
        }
      }
    }
    if (multiStepForm.status === "step-1-completed") {
      const postStudentRequestData = {
        path: "/students/createRequest",
        data: {
          online: true,
          offline: false,
          class: formData?.chooseClass,
          board: formData?.selectBoard,
          subject: formData?.chooseSubject,
          hoursPerSession: formData?.hoursPerSession,
          sessionsPerWeek: 0,
          teacherPref: "male",
          description: "string",
          status: "pending",
          lastComments: "",
          competitiveExam: formData?.competitiveExam === "Yes" ? true : false,
          assignedTeacherId: 0,
          address: {},
          timeSlot: formData?.daySlot,
        },
      };
      let studentPostRequest = await axiosPost(postStudentRequestData);
      const updateRequestData = {
        path: `/register/updateUser/${userId}`,
        data: {
          fname: formData?.userName,
          lname: formData?.userName,
          mobile: formData?.contactNo,
          // userId: userId,
          password: "",
          email: null,
          // role: "student",
          address: {
            streetAdress1: formData?.fullAddress,
            streetAdress2: "",
            locality: "",
            landMark: formData?.landmark,
            city: formData?.City,
            state: "",
            pinCode: "",
          },
          orgName: "",
          isMobileVerified: true,
          registered: true,
        },
      };
      let updateUserRequest = await axiosPut(updateRequestData);

      if (updateUserRequest) {
        saveMultiStepForm({ status: "step-2-completed" });
      }
    }
    if (multiStepForm?.status === "step-2-completed") {
      const updateRequestData = {
        path: `/register/updateUser/${userId}`,
        data: {
          password: formData?.password,
        },
      };
      let updateUserRequest = await axiosPut(updateRequestData);
      if (updateUserRequest) {
        toast.success("Profile Created Successfully!");
      }
    }
  };

  const studentOfflineFormSubmit = async (e) => {
    console.log("Schedule demo clicked");
    const storedOtp = userData?.otp;
    const userId = userData?.userId;
    if (multiStepForm.status === "not-submitted") {
      if (storedOtp !== formData.enterOTP) {
        toast.error("Otp is incorrect!");
      } else {
        console.log("Step 1");
        toast.success("Otp verified successfully!");
        // STEP - 1 CODE HERE

        const postRequestData = {
          path: "/register/createUser",
          data: {
            fname: formData?.userName,
            lname: formData?.userName,
            mobile: formData?.contactNo,
            password: null,
            email: null,
            role: "student",
            address: {
              city: formData?.City,
            },
            orgName: null,
            isMobileVerified: false,
            registered: false,
          },
        };
        let loginRequest = await axiosPost(postRequestData);
        if (loginRequest.data.access_token != undefined) {
          let response = loginRequest.data;
          let userDataObject = {
            accessToken: response.access_token || "",
            data: response.data,
          };
          saveUserDetails(userDataObject);
          localStorage.setItem("access_token", userDataObject.accessToken);
          // IF STEP 1 IS SUCCESS
          saveMultiStepForm({ status: "step-1-completed" });
        }
      }
    }
    if (multiStepForm?.status === "step-1-completed") {
      console.log("Step 2");
      // STEP - 2 CODE HERE
      multiStepForm({ status: "step-2-completed" });
    }
    if (multiStepForm?.status === "step-2-completed") {
      const postStudentRequestData = {
        path: "/students/createRequest",
        data: {
          online: false,
          offline: true,
          class: formData?.chooseClass,
          board: formData?.selectBoard,
          subject: formData?.chooseSubject,
          hoursPerSession: formData?.hoursPerSession,
          sessionsPerWeek: 0,
          teacherPref: "male",
          description: "string",
          status: "pending",
          lastComments: "",
          competitiveExam: formData?.competitiveExam == "Yes" ? true : false,
          assignedTeacherId: 0,
          address: {},
          timeSlot: formData?.daySlot,
        },
      };
      let studentPostRequest = await axiosPost(postStudentRequestData);
      const updateRequestData = {
        path: `/register/updateUser/${userId}`,
        data: {
          fname: formData?.userName,
          lname: formData?.userName,
          mobile: formData?.contactNo,
          // userId: userId,
          password: "",
          email: null,
          // role: "student",
          address: {
            streetAdress1: formData?.fullAddress,
            streetAdress2: "",
            locality: "",
            landMark: formData?.landmark,
            city: formData?.City,
            state: "",
            pinCode: "",
          },
          orgName: "",
          isMobileVerified: true,
          registered: true,
        },
      };
      let updateUserRequest = await axiosPut(updateRequestData);

      if (updateUserRequest) {
        multiStepForm({ status: "step-3-completed" });
      }
    }
    if (multiStepForm.status === "step-3-completed") {
      const updateRequestData = {
        path: `/register/updateUser/${userId}`,
        data: {
          password: formData?.password,
        },
      };
      let updateUserRequest = await axiosPut(updateRequestData);
      if (updateUserRequest) {
        toast.success("Profile Created Successfully!");
      }
    }
  };
  return (
    <>
      <div className={`json-form custom-form row ${props.formType}`}>
        {schemaData.formHeadings != undefined ? (
          <div className="json-form__headings">
            {schemaData.formHeadings.title != undefined ? (
              <h2 className="json-form__headings-title">
                {schemaData.formHeadings.title}
              </h2>
            ) : (
              ""
            )}
            {schemaData.formHeadings.description != undefined ? (
              <h3 className="json-form__headings-description">
                {schemaData.formHeadings.description}
              </h3>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        {props.buttonSwitch ? (
          <div>
            <SwitchButtons {...buttonSwitchData} />
            {schemaData.formHeadings != undefined ? (
              <div>
                <div className="json-form__headings">
                  {schemaData.formHeadings.buttonSwitchDesciption !=
                  undefined ? (
                    <h3 className="json-form__headings-buttonSwitchDesciption">
                      {schemaData.formHeadings.buttonSwitchDesciption}
                    </h3>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <Form
          schema={schemaData.schema}
          uiSchema={schemaData.UISchema}
          formData={formData}
          validator={validator}
          onChange={({ formData }) =>
            handleFormChange(formData)
          } /*onSubmit={e => setFormData(e.formData)} */
        />
        {props.buttonGrid ? (
          // <ButtonGrid {...buttonGridData} clickEvent={(e) => handleFormSubmit(e)}/>

          //Button grid start
          <div className="button-grid">
            {props.pricecalculator ? (
              <PriceCalc {...buttonGridData} />
            ) : (
              <CustomButton
                buttonText={props.button1Text}
                styleName={props.button1StyleName}
                url={props.switchLeftLink}
                onclick={() => this.handleClick}
              />
            )}

            <CustomButton
              buttonText={props.button2Text}
              styleName={props.button2StyleName}
              url={props.switchRightLink}
              clickEvent={(e) => handleFormSubmit(e)}
            />
          </div>
        ) : (
          //Button grid end
          <CustomButton
            buttonText={props.buttonText}
            styleName={props.buttonStyleName}
            isSubmit
            clickEvent={(e) => handleFormSubmit(e)}
          />
        )}
      </div>
    </>
  );
};

export default JsonForm;
