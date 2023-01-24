import CustomButton from "../Button/CustomButton";
const schema = {
  title: "Register Your Requirements",
  description: "Find India's best teachers",
  type: "object",
  properties: {
    orgName: {
      type: "string",
      title: "",
    },
    instituteUserName: {
      type: "string",
    },
    instituteUserContactNo: {
      type: "string",
      minLength: 10,
    },
    instituteEnterOTP: {
      type: "string",
    },
    email: {
      type: "string",
    },
    institutionTitle: {
      type: "string",
    },
    titleDescription: {
      type: "string",
    },
    instituteUserPassword: {
      type: "string",
    },
    instituteConfirmPassword: {
      type: "string",
    },
  },
};
const UISchema = {
  orgName: {
    "ui:placeholder": "Name of your Organisation",
    classNames: "step-1",
  },
  instituteUserName: {
    "ui:placeholder": "You are Mr ?",
    classNames: "step-1",
  },
  instituteUserContactNo: {
    "ui:placeholder": "Enter your Contact no",
    classNames: "studentOffline-register__mobile-otp step-1",
    "ui:widget": (props) => {
      return (
        <div className="contact-field-wrapper">
          <input
            type="text"
            className="form-control otp-left"
            id="root_contactNo"
            placeholder="Enter your mobile number"
            onChange={(event) => props.onChange(event.target.value)}
          />
          <CustomButton buttonText={"Send OTP"} styleName={"otp-button"} />
        </div>
      );
    },
  },
  instituteEnterOTP: {
    "ui:placeholder": "Enter OTP",
    classNames: "studentOffline-register__otp-box step-1",
    "ui:disabled": "disabled",
  },
  email: {
    "ui:placeholder": "Enter your Email",
    classNames: "step-1",
  },
  institutionTitle: {
    classNames: "step-2 title hidden-element",
    "ui:widget": () => {
      return (
        <h2 className="institution-register__title">
          A request has been submitted Successfully{" "}
        </h2>
      );
    },
  },
  titleDescription: {
    classNames: "step-2 title-description hidden-element",
    "ui:widget": () => {
      return (
        <h2 className="institution-register__description">
          Please choose a password to Create Profile, By Creating profile you
          will be able to get all updates easily{" "}
        </h2>
      );
    },
  },
  instituteUserPassword: {
    "ui:placeholder": "Enter Password",
    classNames: "step-2 institution-register__password-input hidden-element",
  },
  instituteConfirmPassword: {
    "ui:placeholder": "Confirm Password",
    classNames:
      "step-2 institution-register__confirm-password-input hidden-element",
  },
};

export { schema, UISchema };
