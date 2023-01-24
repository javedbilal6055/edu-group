import CustomButton from "../Button/CustomButton";
const schema = {
    "title": "Become a Teacher On Edugrep",
    "description": "Fill this form so that we can start the Teacher On-boarding process with you.",
    "type": "object",
    "properties": {
        
        "userName": {
            "type": "string",
        },
        "contactNo": {
            "type": "string",
            "minLength": 10
        },
        "enterOTP": {
            "type": "string",
        },
        "email": {
            "type": "string",
        }
    }
};
const UISchema = {
    
    "userName": {
        "ui:placeholder": "You are Mr ?",
    },
    "contactNo": {
        "ui:placeholder": "Enter your Contact no",
        "classNames": "studentOffline-register__mobile-otp step-1",
        "ui:widget": () => {
            return (
                <div className="contact-field-wrapper">
                    <input type="text"
                        className="form-control otp-left"
                        placeholder="Enter your mobile number"
                    />
                    <CustomButton buttonText={"Send OTP"} styleName={"otp-button"} />
                </div>

            );
        }
    },
    "enterOTP": {
        "ui:placeholder": "Enter OTP",
        "classNames": "studentOffline-register__otp-box step-1",
        "ui:disabled": "disabled"
    },
    "email": {
        "ui:placeholder": "Enter your Email"
    },
}

export {
    schema,
    UISchema
}