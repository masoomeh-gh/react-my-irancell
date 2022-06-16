import React from 'react';

import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './style/RemainingDataChart.css';

export default function RemainingDataChart() {
    return (
        <div id="remaining-data-chart">
            <div style={{
                width: 150,
                height: 150,
            }}>
                <CircularProgressbar value={80} text={`6000 تومان`} styles={{
                    path: {
                        stroke: `#ffdd00`,
                        transform: 'scaleX(-1)',
                        transformOrigin: 'center center',
                    },
                    trail: {
                        stroke: '#eeeeee',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    text: {
                        fontSize: '16px'
                    }
                }}/>
            </div>
            <button>سیمکارتت رو شارژ کن!</button>
        </div>
    );
};