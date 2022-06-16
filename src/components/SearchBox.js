import React from 'react';

import './style/SearchBox.css';

export default function SearchBox() {
    return (
        <div id="search-box-holder">
            <div className="search-input-holder">
                <input className="search-input" type="text" placeholder="جستجو"/>
                <i className="bi bi-search"></i>
            </div>
        </div>
    );
};