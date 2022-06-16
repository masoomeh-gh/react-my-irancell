import React from 'react';
import RemainingData from "./RemainingData";
import Profile from "./Profile";

export default function LeftSide() {
    return (
        <div id="left-side">
            <Profile />
            <RemainingData />
        </div>
    );
};