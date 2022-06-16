import React from "react";

import logo from "../assets/mtn-irancell.svg";

import './style/DownloadBox.css';

export default function DownloadBox() {
    return (
        <div id="download-box">
            <img src={logo} alt="logo" width="75" height="75"/>
            <h3>اپلیکیشن مارو دانلود کن</h3>
        </div>
    );
};