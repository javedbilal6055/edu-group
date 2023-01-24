import CustomButton from "../Button/CustomButton";
const formHeadings = {
    title: "Schedule Your Free Class",
    description: "Learn from India's best teachers",
    buttonSwitchDesciption: "Inperson tutoring at your home"
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
            "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
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
        "gender": {
            "type": "string",
            "enum": [
                "MALE",
                "FEMALE"
            ]
        },
        "timeSlot": {
            "type": "string",
            "enum": [
                "between 6-9",
                "between 9-12"
            ]
        },
        "hoursPerSession": {
            "type": "integer",
            "enum": [
                1, 1.5, 2
            ]
        },
        "daySlot": {
            "type": "string",
            "enum": [
                "weekends only", "3 days a week", "5 days a week"
            ]
        }
        
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
        "fullAddress": {
            "type": "string",
        },
        "landmark": {
            "type": "string",
        },
        "selectBoard": {
            "type": "string",
            "$ref": "#/definitions/selectBoard",
            "title": "Select your Board"
        },
        "chooseClass": {
            "type": "string",
            "$ref": "#/definitions/chooseClass"

        },
        "chooseSubject": {
            "type": "string",
            "$ref": "#/definitions/chooseSubject"

        },
        "competitiveExam": {
            "type": "string",
            "$ref": "#/definitions/competitiveExam"
        },
        "gender": {
            "type": "string",
            "$ref": "#/definitions/gender"
        },
        "timeSlot": {
            "type": "string",
            "$ref": "#/definitions/timeSlot"
        },
        "hoursPerSession": {
            "type": "string",
            "$ref": "#/definitions/hoursPerSession"
        },
        "daySlot": {
            "type": "string",
            "$ref": "#/definitions/daySlot"
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
        "ui:placeholder": "Your name ?",
        "classNames": "step-1"
    },
    "contactNo": {
        "ui:placeholder": "Enter your Contact no",
        "classNames": "studentOffline-register__mobile-otp step-1",
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
        "classNames": "studentOffline-register__otp-box step-1",
        "ui:disabled": "disabled"
    },
    "City": {
        "ui:placeholder": "Choose Your City",
        "classNames": "studentOffline-register__city step-1",
        "ui:widget": "select"
    },
    "fullAddress": {
        "ui:placeholder": "Enter your full address",
        "classNames": "step-2 hidden-element "
    },
    "landmark": { 
        "ui:placeholder": "Landmark",
        "classNames": "step-2 hidden-element "
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
                        <div className="col-log-6 col-md-6 col-sm-6">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
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

        "classNames": "step-2 hidden-element ",
        "ui:options": {
            "title": "Choose your Class",
            "data": ["Nur", "LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XII", "XII"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-log-6 col-md-6 col-sm-6">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
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
                        <div className="col-log-6 col-md-6 col-sm-6">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
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
                    <div className="row">
                        <div className="col-log-6 col-md-6 col-sm-6">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6">

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
    "gender": {
        "ui:placeholder": "select",
        "classNames": "step-3 hidden-element ",
        "ui:options": {
            "title": "Gender",
            "data": ["MALE", "FEMALE"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-log-6 col-md-6 col-sm-6">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
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
    "timeSlot": {
        "ui:placeholder": "select",
        "classNames": "step-3 hidden-element ",
        "ui:options": {
            "title": "Time Slot",
            "data": ["between 6-9", "between 9-12"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-log-6 col-md-6 col-sm-6">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
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
    "hoursPerSession": {
        "ui:placeholder": "select",
        "classNames": "step-3 hidden-element ",
        "ui:options": {
            "title": "No. of hours",
            "data": [1, 1.5, 2]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-log-6 col-md-6 col-sm-6">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
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
    "daySlot": {
        "ui:placeholder": "select",
        "classNames": "step-3 hidden-element ",
        "ui:options": {
            "title": "Day Slot",
            "data": ["weekends only", "3 days a week", "5 days a week"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-log-6 col-md-6 col-sm-6">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
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
    "titleDescription": {
        "classNames": "step-4 title-description hidden-element",
        "ui:widget": () => {
            return (
                <h2 className="title-description__child">Please choose a password to Create Profile, By Creating profile you will be able to get all updates easily </h2>
            )
        }
    },
    "password": {
        "ui:placeholder": "Enter Password",
        "classNames": "step-4 password-input hidden-element"
    },
    "confirmPassword": {
        "ui:placeholder": "Confirm Password",
        "classNames": "step-4 confirm-password-input hidden-element"
    },
}


export {
    schema,
    UISchema,
    formHeadings
}