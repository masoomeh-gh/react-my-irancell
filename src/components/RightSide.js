import React from 'react';
import Branding from './Branding';
import SearchBox from "./SearchBox";
import NavigationMenu from "./NavigationMenu";

export default function RightSide() {
    return (
        <div id="right-side">
            <Branding/>

            <SearchBox/>

            <NavigationMenu/>

        </div>
    );
};