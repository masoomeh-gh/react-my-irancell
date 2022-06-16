import React from 'react';

import './style/NavigationMenu.css';

export default function NavigationMenu() {
    return (
        <div id="navigation-menu">
            <ul>
                <li>
                    <div>
                        <i className="bi bi-house-door"></i>
                        صفحه اصلی
                    </div>
                </li>
                <li>
                    <div>
                        <i className="bi bi-plus-square"></i>
                        شارژ سیمکارت
                    </div>
                </li>
                <li>
                    <div>
                        <i className="bi bi-globe"></i>
                        اینترنت
                    </div>
                </li>
                <li>
                    <div>
                        <i className="bi bi-bar-chart-line"></i>
                        کارکرد و فروش
                    </div>
                </li>
                <li>
                    <div>
                        <i className="bi bi-upc-scan"></i>
                        خدمات
                    </div>
                </li>
                <li>
                    <div>
                        <i className="bi bi-grid"></i>
                        مدیریت خدمات
                    </div>
                </li>
                <li>
                    <div>
                        <i className="bi bi-sim"></i>
                        مدیریت سیمکارت
                    </div>
                </li>
                <li>
                    <div>
                        <i className="bi bi-house-door"></i>
                        سوالات متداول
                    </div>
                </li>
                <li>
                    <div>
                        <i className="bi bi-geo-alt"></i>
                        ارتباط با ما
                    </div>
                </li>
            </ul>
        </div>
    );
};