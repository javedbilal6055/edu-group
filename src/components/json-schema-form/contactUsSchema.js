const schema = {
    "title": "CONTACT US",
    "type": "object",
    "required": [
        "name",
        "mobile"
    ],
    "properties": {
        "name": {
            "type": "string",
            "title": "Your name",
        },
        "mobile": {
            "type": "number",
            "title": "Your Mobile no.",
            "minLength": 10
        },
        "email": {
            "type": "string",
            "title": "Your Email"
        },
        "message": {
            "type": "string",
            "title": "Your Message"
        }
    }
};
const UISchema = {
    "message": {
        "ui:widget": "textarea",
        "ui:placeholder": "Type here..."
    },
    "name": {
        "ui:placeholder": "John Snow",
        "ui:emptyValue": "",
    },
    "mobile": {
        "ui:placeholder": "+91 996352..."
    },
    "email": {
        "ui:widget": "email",
        "ui:placeholder": "johnsnow101@hotmail.com"
    },
    "password": {
        "ui:placeholder": "Password"
    }
}

export {
    schema,
    UISchema
}