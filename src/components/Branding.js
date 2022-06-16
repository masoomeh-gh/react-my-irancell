import React from "react";

import './style/Branding.css';
import logo from '../assets/mtn-irancell.svg';

export default function Branding() {
    return (
        <div id="branding">
            <img src={logo} width="50" height="50" alt="irancell-logo"/>
            <span className="branding-title">ایرانسل من</span>
        </div>
    );
};

