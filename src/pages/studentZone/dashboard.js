import React, { useContext, useEffect, useState } from "react";
import "../studentZone/dashboard.scss";

import { BrowserRouter as Router, Route, Redirect, useNavigate } from "react-router-dom";

import StudentSidebar from "../../components/StudentZone/sidebar/sidebar";
import StudentNavbar from "../../components/StudentZone/navbar/navbar";
import axiosGet from "../../axios/axiosGet";
import { toast } from "react-toastify";
import SheduledDemoList from "./sheduledDemoList";
import UserProfile from "../../pages/studentZone/userProfile";
import RequestList from "../../pages/studentZone/requestsList";
import PaymentList from "../../pages/studentZone/paymentsList";
import { FormContext } from "../../allContext/context";



const StudentDashboard = () => {
  const navigate = useNavigate();
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
 

  console.log("asdfghj", userData);
  const [activeTab, setTab] = useState(1);
  const [demoList, setDemoList] = useState([]);
  const [paymentList, setPaymentList] = useState([]);
  const [Redirect, setRedirect] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token === null) {
      console.log("login not found");
      navigate("/home");
    }
    let getRequestData = {
      path: "/students/getRequests",
    };
    let getAllPayments = {
      path: "/transaction/student/getAllTransaction",
    };
    axiosGet(getRequestData)
      .then((res) => {
        console.log("student Request....", res.data);
        setDemoList(res.data);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
      });
    axiosGet(getAllPayments)
      .then((res) => {
        console.log("student Payment", res.data);
        setPaymentList(res.data.data);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
      });
  }, []);

  const initPaymentText = (x) => {
    console.log("Init Payment Data", x);
    navigate(`/paymentPage/${x.transactionId}`);
  };

  const handleTabChange = (tab) => {
    setTab(tab);
  };
  const handleLogout = () => {
    console.log("logout working",);
    let userDataObject = {
      accessToken: "",
      email: "",
      fname: "",
      lname: "",
      role: "",
      userId: "",
      userData: "",
    };
    saveUserDetails(userDataObject);
    localStorage.clear();
    navigate("/");
  };
  const showDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };

  return (
    <div class="d-flex" id="wrapper">
      <StudentSidebar
        handleTabChange={handleTabChange}
        handleLogout={handleLogout}
      />
      <div id="page-content-wrapper">
        <StudentNavbar
          name={userData != null ? userData.firstName : ""}
        />
        <div className="container-fluid px-4">
          {activeTab === 1 ? (
            <>
              <div className="row g-3 my-2">
                <div className="col-md-4 col-sm-6">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{demoList.length}</h3>
                      <p className="fs-5">No of demo scheduled</p>
                    </div>
                    <i className="fa fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                  </div>
                </div>
              </div>
              <SheduledDemoList demoList={demoList} showDate={showDate} />
            </>
          ) : activeTab === 2 ? (
            <>
              <div className="row g-3 my-2">
                <div className="col-md-4 col-sm-6">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{demoList.length}</h3>
                      <p className="fs-5">Total Requests</p>
                    </div>
                    <i className="fa fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                  </div>
                </div>
              </div>
              <RequestList demoList={demoList} showDate={showDate} />
            </>
          ) : activeTab === 3 ? (
            <>
              {/* <div className="row g-3 my-2">
                        <div className="col-md-4 col-sm-6">
                            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                <div>
                                    <h3 className="fs-2">{demoList.length}</h3>
                                    <p className="fs-5">Total Requests</p>
                                </div>
                                <i className="fa fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                            </div>
                        </div>
                    </div> */}
              <PaymentList
                paymentList={paymentList ? paymentList : []}
                initPayment={(x) => initPaymentText(x)}
                showDate={showDate}
              />
            </>
          ) : (
            <UserProfile showDate={showDate} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
