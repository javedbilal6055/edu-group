import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import TeacherSidebar from "../../TeacherZone/sidebar/sidebar.js";
import TeacherNavbar from "../../TeacherZone/navbar/navbar";

const TeacherDashboard = () => {
  const history = useHistory();

  const userDataRedux = useSelector((state) => state.user);

  useEffect(() => {
    console.log(userDataRedux);
    if (userDataRedux === null) {
      console.log("login not found");

      history.push("/home");
    } else if (userDataRedux.role != "teacher") {
      console.log("Not an teacher user");
      history.push("/home");
    }
    console.log(userDataRedux);
  });

  return (
    <>
      <div class="d-flex" id="wrapper">
        <TeacherSidebar />
        <div id="page-content-wrapper">
          <TeacherNavbar
            name={userDataRedux != null ? userDataRedux.firstName : ""}
          />
          <div class="container-fluid px-4">
            <div class="row g-3 my-2">
              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">20</h3>
                    <p class="fs-5">Demo</p>
                  </div>
                  <i class="fa fa-calendar-o fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">10</h3>
                    <p class="fs-5">Converted</p>
                  </div>
                  <i class="fa fa-calendar-check-o fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">2</h3>
                    <p class="fs-5">Running</p>
                  </div>
                  <i class="fa fa-spinner fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">8</h3>
                    <p class="fs-5">Completed</p>
                  </div>
                  <i class="fa fa-check fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
            </div>

            <div class="row my-5">
              <h3 class="fs-4 mb-3">Demo Scheduled</h3>
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
    </>
  );
};

export default TeacherDashboard;
