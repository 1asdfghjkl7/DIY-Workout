import React, { Component } from "react";
import Routes from "./Routes";
import Navbar from "./Components/Navbar/Navbar";

export default class DIYWorkout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Routes />
            </React.Fragment>
        );
    }
}
