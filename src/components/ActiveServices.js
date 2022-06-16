import React from "react";

import logo from "../assets/mtn-irancell.svg";

import './style/ActiveServices.css';

export default function ActiveServices() {
    return (
        <div id="active-services">
            <h3>خدمات فعال</h3>
            <ul>
                <li>
                    <img src={logo} alt="something" width="25" height={25}/>
                    <div>
                        <span>بسته پیامک یک هفتگی</span>
                        <span>تا تاریخ 31 خرداد 1400</span>
                    </div>
                </li>

                <li>
                    <img src={logo} alt="something" width="25" height={25}/>
                    <div>
                        <span>بسته پیامک یک هفتگی</span>
                        <span>تا تاریخ 31 خرداد 1400</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};