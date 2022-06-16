import React from 'react';

import './style/UsageChart.css';

import {Line} from 'react-chartjs-2';

import {random} from 'Faker'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    tension: .5,
    fill: true,
    pointRadius: 0,
    ticks: {
        reverse: false,
        stepSize: 1000
    }
};

const labels = ['7/1', '7/10', '7/18', '7/25', '7/28'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => random.number(4000) + 1000),
            borderColor: 'rgb(255,221,0)',
        }
    ],
}

export default function UsageChart() {
    return (
        <div id="usage-chart">
            <h2>نمودار میزان مصرف کل</h2>
            <div>
                <Line id="line-chart" options={options} data={data}/>
            </div>
        </div>
    );
};