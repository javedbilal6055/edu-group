import CustomButton from "../Button/CustomButton";
const formHeadings = {
    title: "Schedule Your Free Class",
    description: "Learn from India's best teachers",
    buttonSwitchDesciption : "Live 1-1 online Classes 20% cheaper"
};
const schema = {
    "definitions": {
        "cities": {
            "type": "string",
            "enum": [
                "Patna",
                "Ranchi",
                "New Delhi",
                "Bengaluru",
                "Hyderabad"
            ]
        },
        "selectBoard": {
            "type": "string",
            "enum": [
                "SSC",
                "CBSE",
                "ICSE",
            ]
        },
        "chooseClass": {
            "type": "string",
            "enum": ["Kg", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"]
        },
        "chooseSubject": {
            "type": "string",
            "enum": [
                "Hindi",
                "English",
                "History",
                "Economics",
                "Geography"
            ]
        },
        "competitiveExam": {
            "type": "string",
            "enum": [
                "Yes",
                "No"
            ]
        },
    },
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
        "City": {
            "type": "string",
            "$ref": "#/definitions/cities"
        },
        "selectBoard": {
            "type": "string",
            "$ref": "#/definitions/selectBoard",
            "title": "Select your Board"
        },
        "chooseSubject": {
            "type": "string",
            "$ref": "#/definitions/chooseSubject"

        },
        "chooseClass": {
            "type": "string",
            "$ref": "#/definitions/chooseClass"

        },
        "competitiveExam": {
            "type": "string",
            "$ref": "#/definitions/competitiveExam"
        },
        "titleDescription" : {
            "type": "string"
        },
        "password": {
            "type": "string",
        },
        "confirmPassword": {
            "type": "string",
        },
    }
};
const UISchema = {

    "userName": {
        "ui:placeholder": "You are Mr ?",
    },
    "contactNo": {
        "ui:placeholder": "Enter your Contact no",
        "classNames": "studentOnline-register__mobile-otp step-1",
        "ui:widget": (props) => {
            return (
                <div className="contact-field-wrapper">
                    <input type="text"
                        className="form-control otp-left"
                        placeholder="Enter your mobile number" label="contactNo" id="root_contactNo"  onChange={(event) => props.onChange(event.target.value)}
                    />
                    <CustomButton buttonText={"Send OTP"} styleName={"otp-button"} />
                </div>

            );
        }
    },
    "enterOTP": {
        "ui:placeholder": "Enter OTP",
        "classNames": "studentOnline-register__otp-box step-1",
        "ui:disabled": "disabled"
    },
    "City": {
        "ui:placeholder": "Choose Your City",
        "classNames": "studentOnline-register__city step-1",
        "ui:widget": "select"
    },

    "selectBoard": {
        "ui:placeholder": "board",
        "classNames": "step-2 hidden-element ",
        "ui:options": {
            "title": "Select Your Board",
            "data": ["SSC", "CBSE", "ICSE",]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <h5 className="lable student-online-label">{title}</h5>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 selectdiv">
                            <select className=""  onChange={(event) => props.onChange(event.target.value)}>
                                <option key="Select" value="Select">Select</option>
                                {
                                    data.map(item => (
                                        <option key={item} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>

                    </div>
                </div>

            );
        }
    },
    "chooseClass": {
        "classNames": "step-2 hidden-element select-std",
        "ui:options": {
            "title": "Select your class",
            "data": ["Kg", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h5 className="lable student-online-label">{title}</h5>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 student-online-radio">

                            {
                                data.map(item => (
                                    <div className="online-radio">
                                        <input type="radio" className="online-radio__input" name="chooseClass" id={item} value={item}  onChange={(event) => props.onChange(event.target.value)} />
                                        <label for={item} className="online-radio__label">{item}</label>
                                    </div>
                                ))
                            }

                        </div>


                    </div>
                </div>

            );
        }
    },
    "chooseSubject": {
        "ui:placeholder": "Subject",
        "classNames": "step-2 hidden-element ",
        "classNames": "step-2 hidden-element ",
        "ui:options": {
            "title": "Choose your Subject",
            "data": ["Hindi", "English", "MATH", "SCIENCE", "All Subject"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <h5 className="lable student-online-label">{title}</h5>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 selectdiv">
                            <select className=""  onChange={(event) => props.onChange(event.target.value)}>
                                <option key="Select" value="Select">Select</option>
                                {
                                    data.map(item => (
                                        <option key={item} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>

                    </div>
                </div>

            );
        }
    },
    "competitiveExam": {
        "ui:placeholder": "Select your board",
        "classNames": "step-2 hidden-element ",
        "ui:options": {
            "title": "Are you considering for competitive exam",
            "data": ["Yes", "No"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <h5 className="lable competitive-radio-label">{title}</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 studentOnline-radio">

                            {
                                data.map(item => (
                                    <div className="radiodiv">
                                        <input type="radio" name="competitiveExam" id={item} value={item}  onChange={(event) => props.onChange(event.target.value)} />
                                        <label for={item} >{item}</label>
                                    </div>
                                ))
                            }

                        </div>


                    </div>
                </div>

            );
        }
    },


    "titleDescription": {
        "classNames": "step-3 title-description hidden-element",
        "ui:widget": () => {
            return (
                <h2 className="title-description__child">Please choose a password to Create Profile, By Creating profile you will be able to get all updates easily </h2>
            )
        }
    },
    "password": {
        "ui:placeholder": "Enter Password",
        "classNames": "step-3 password-input hidden-element"
    },
    "confirmPassword": {
        "ui:placeholder": "Confirm Password",
        "classNames": "step-3 confirm-password-input hidden-element"
    },
}

export {
    schema,
    UISchema,
    formHeadings
}