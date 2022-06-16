import React from 'react';
import RemainingDataChart from "./RemainingDataChart";
import ActiveServices from "./ActiveServices";
import DownloadBox from "./DownloadBox";

import './style/RemainingData.css';

export default function RemainingData() {
    return (
        <div id="remaining-data">
            <h2>شارژ باقی مانده سیمکارت</h2>

            <RemainingDataChart/>

            <ActiveServices/>

            <DownloadBox/>
        </div>
    );
};