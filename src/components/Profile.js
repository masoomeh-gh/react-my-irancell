import React from 'react';
import logo from "../assets/mtn-irancell.svg";

import './style/Profile.css';

export default function Profile() {
    return (
        <div id="profile">
            <img src={logo} alt="profile-pic" width="50" height="50"/>
            <div>
                <span>سلام، معصومه قربانی</span>
                <span>+989123456789</span>
            </div>
        </div>
    );
};