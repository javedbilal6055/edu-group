import './navbar.scss'
import React from 'react';
const StudentNavbar = (props) => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light  py-4 px-4">
            <div class="d-flex align-items-center">
                
                <h2 class="fs-2 m-0">Demo Scheduled</h2>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle  fw-bold" href="#" id="navbarDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user me-2"></i>{props.name != null ? props.name : ''}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Logout ....</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default StudentNavbar  ;
