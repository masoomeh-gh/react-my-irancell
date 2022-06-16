import React from 'react';
import Banner from "./Banner";
import SpecialPackageTable from "./SpecialPackageTable";
import UsageChart from "./UsageChart";

export default function Center() {
    return (
        <div id="center">
            <h2>صفحه اصلی</h2>

            <Banner/>

            <UsageChart />

            <SpecialPackageTable />
        </div>
    );
};