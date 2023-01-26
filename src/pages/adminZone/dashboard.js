import React, { useContext, useEffect, useState } from "react";
import "./dashboard.js";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useNavigate,
} from "react-router-dom";
import AdminSidebar from "../../components/AdminZone/sidebar/sidebar";
import AdminNavbar from "../../components/AdminZone/navbar/navbar";
import { FormContext } from "../../allContext/context.js";
const AdminDashboard = () => {
  const {
    formData,
    saveFormData,
    userDetails,
    saveUserDetails,
    multiStepForm,
    saveMultiStepForm,
    userData,
    setUserData,
    formState,
    setFormState,
  } = useContext(FormContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData);
    if (userData === null) {
      console.log("login not found");

      navigate("/home");
    } else if (userData?.role != "admin") {
      console.log("Not an Admin user");
      navigate("/home");
    }

    console.log("....", userData);
  });

  return (
    <div class="d-flex" id="wrapper">
      <AdminSidebar />
      <div id="page-content-wrapper">
        <AdminNavbar
          name={userData != null ? userData?.firstName : ""}
        />
        <div class="container-fluid px-4">
          <div class="row g-3 my-2">
            <div class="col-md-3">
              <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2">720</h3>
                  <p class="fs-5">Students</p>
                </div>
                <i class="fa fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2">4920</h3>
                  <p class="fs-5">Teachers</p>
                </div>
                <i class="fa fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2">3899</h3>
                  <p class="fs-5">Leads</p>
                </div>
                <i class="fa fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2">%25</h3>
                  <p class="fs-5">Sucess Rate</p>
                </div>
                <i class="fa fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
              </div>
            </div>
          </div>

          <div class="row my-5">
            <h3 class="fs-4 mb-3">Recent Leads</h3>
            <div class="col">
              <table class="table bg-white rounded shadow-sm  table-hover">
                <thead>
                  <tr>
                    <th scope="col" width="50">
                      #
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">MobileNo</th>
                    <th scope="col">Mode</th>
                    <th scope="col">Class</th>
                    <th scope="col">Subject</th>
                    <th scope="col">City</th>
                    <th scope="col">Locality</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Amitabh</td>
                    <td>+91 8292712983</td>
                    <td>Offline</td>
                    <td>VII</td>
                    <td>All Subject</td>
                    <td>Patna</td>
                    <td>Jagdeopath</td>
                    <td>18/02/2022</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mukesh</td>
                    <td>+91 7543587456</td>
                    <td>Online</td>
                    <td>XII</td>
                    <td>PHY,CHE</td>
                    <td>New Delhi</td>
                    <td>N/A</td>
                    <td>18/02/2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
