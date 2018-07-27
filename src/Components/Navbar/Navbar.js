import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link
                    to="/Dashboard"
                    // onClick={() => {
                    //     window.location.reload();
                    // }}
                >
                    Dashboard
                </Link>
            </nav>
        );
    }
}
