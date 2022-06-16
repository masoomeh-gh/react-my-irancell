import React from 'react';

import './App.css';
import RightSide from "./components/RightSide";
import Center from "./components/Center";
import LeftSide from "./components/LeftSide";

function App() {
    return (
        <div id="wrapper">
            <RightSide />
            <Center />
            <LeftSide />
        </div>
    );
}

export default App;
