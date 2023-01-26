

import './sidebar.scss'
import React from 'react';
import headerLogo from '../../../images/logo.PNG';
import { useNavigate } from 'react-router-dom';



const StudentSidebar = (props) => {
        const navigate = useNavigate()
    return (

<div className="sidebar" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    className="fa fa-align-left fa-bars me-2 "></i> <img src={headerLogo} alt="Header Logo" className="brandlogo" /></div>
            <div className="list-group list-group-flush my-3">
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold" onClick={() => props.handleTabChange(1)}><i
                        className="fa fa-project-diagram me-2"></i>Demo Scheduled</p>
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold" onClick={() => props.handleTabChange(2)}><i
                        className="fa fa-chart-line me-2" ></i>My Requests</p>
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold" onClick={() => props.handleTabChange(3)}><i
                        className="fa fa-chart-line me-2" ></i>My Payments</p>        
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold" onClick={() => props.handleTabChange(4)}><i
                        className="fa fa-chart-line me-2" ></i>My Profile</p>
                <p className="list-group-item list-group-item-action bg-transparent text-danger fw-bold" onClick={() => props.handleLogout()}><i
                        className="fa fa-power-off me-2"></i>Logou.,.,.t</p>
            </div>
        </div>

);
};

export default StudentSidebar;