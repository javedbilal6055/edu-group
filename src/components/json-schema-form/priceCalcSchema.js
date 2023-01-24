const schema = {
    "title":"Price Estimator",    
    "type": "object",
    "properties": {
        
        "City": {
            "type": "string",
        },
        "selectBoard": {
            "type": "string",
        },
        "chooseClass": {
            "type": "string",
        },
        "chooseSubject": {
            "type": "string",
        },
        "competitiveExam": {
            "type": "string", 
        }, 
        "session":{ 
            "type": "string",
        }, 
        "hours":{ 
            "type": "string",
        },      
    }
};
const UISchema = {
    
    "City": {
       
        "ui:options": {
            "title": "City",
            "data": ["Pata", "Delhi", "Mumbai",]
        },
        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-log-3 col-md-3 col-sm-3">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
                            <select className="">
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
    
    "selectBoard": {
        
        "ui:options": {
            "title": "Board",
            "data": ["SSC", "CBSE", "ICSE",]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-log-3 col-md-3 col-sm-3">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
                            <select className="">
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

        
        "ui:options": {
            "title": " Class",
            "data": ["Nur", "LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XII", "XII"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-log-3 col-md-3 col-sm-3">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
                            <select className="">
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
        
        "ui:options": {
            "title": "Subject",
            "data": ["Hindi", "English", "MATH", "SCIENCE", "All Subject"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-log-3 col-md-3 col-sm-3">
                            <h5 className="lable">{title}</h5>
                        </div>
                        <div className="col-log-6 col-md-6 col-sm-6 selectdiv">
                            <select className="">
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
       
        "ui:options": {
            "title": "",
            "data": ["School Syllabus", "Competitive Exam","Both"]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
                <div className="container">
                    <div className="row">
                        
                        <div className="col-log-12 col-md-12 col-sm-12">

                            {
                                data.map(item => (
                                    <div className="radiodiv">
                                        <input type="radio" id={item} value={item} />
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
    "session": {
       
        "ui:options": {
            "title": "No of Sessions required per week",
            "data": ["1", "2","3","4","5","6","7"],
            // "value":"5",
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data, value } = options;
            
            return (
                
                <div className="container">
                    <div className="row">
                    
                        <div className="col-log-12 col-md-12 col-sm-12 slidebar">
                         <h5>{title}</h5>
                            <ul className="slidebarul">
                        {
                                data.map(item => (
                                   
                                       
                                        <li className="slidebarli" for={item} >{item}</li>
                                    
                                ))
                            }
                            </ul>
                         <input type="range" min="1" max="7" class="slider" onChange={(e) => console.log(e.target.value)}/>
                            

                        </div>


                    </div>
                </div>

            );
        }
    },
    "hours": {
       
        "ui:options": {
            "title": "No. of hours required per session",
            "data": ["1", "1.5","2",]
        },

        "ui:widget": (props) => {
            const { options } = props;
            const { title, data } = options;
            return (
              
       
                
                <div className="container">
                    <div className="row">
                    
                        <div className="col-log-12 col-md-12 col-sm-12 slidebarhour">
                         <h5>{title}</h5>
                            <ul className="slidebarhourul">
                        {
                                data.map(item => (
                                   
                                       
                                        <li className="slidebarhourli" for={item} >{item}</li>
                                            
                                ))
                            }
                            </ul>
                         <input type="range" min="1" max="3" class="slider" onChange={(e) => console.log(e.target.value)}></input>
                            

                        </div>


                    </div>
                </div>

           

            );
        }
    },
}

export {
    schema,
    UISchema
}