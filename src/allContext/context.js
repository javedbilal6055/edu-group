import React, { useState } from "react";
import { createContext } from "react";

const FormContext = createContext(undefined);

const FormProvider = ({ children }) => {
  const [formData, saveFormData] = useState(null);
  const [multiStepForm, saveMultiStepForm] = useState("");
  const [userLogOut, setUserLogOut] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [supportSingleData, setSupportSingleData] = useState();
  const [userData, setUserData] = useState(null);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const [userDetails, saveUserDetails] = useState(null);

  const updateUserData = (data) => {
    setUserData(data);
  };

  const showAlert = (openText, severityText, messageTxt) => {
    setOpen(openText);
    setSeverity(severityText);
    setMessage(messageTxt);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        saveFormData,
        userDetails,
        saveUserDetails,
        multiStepForm,
        saveMultiStepForm,
        userData,
        setUserData,
        updateUserData,
        userLogOut,
        setUserLogOut,
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
        setSupportSingleData,
        supportSingleData,
        isStudent,
        setIsStudent,
        isTeacher,
        setIsTeacher,
        userRole,
        setUserRole,
        showAlert,
        open,
        setOpen,
        severity,
        message,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
