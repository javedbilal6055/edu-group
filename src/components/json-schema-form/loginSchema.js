const schema = {
    "title": "Login to your account",    
    "type": "object",
    "properties": {
        
        "userName": {
            "type": "string",
        },
        "password": {
            "type": "string",           
        },       
    }
};
const UISchema = {
    
    "userName": {
        "ui:placeholder": "Your username ...",
        "ui:title" : "User Name"
    },    
    "password": {
        "ui:placeholder": "Your password ...",
        "ui:widget": "password",
        "ui:title" : "Password"
    },
}

export {
    schema,
    UISchema
}