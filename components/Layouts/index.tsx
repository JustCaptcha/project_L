import React from "react";
import Navigation from '../Navigation/index';

const DefaultLayout = (props) => {
    return (
        <div>
            <Navigation></Navigation>
            {props.children}
        </div>
    );
}

export default DefaultLayout;