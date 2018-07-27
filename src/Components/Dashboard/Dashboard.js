import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="Buttons">
                    <Link to="/Dashboard/Programs">
                        <button>Programs</button>
                    </Link>
                    <Link to="/Dashboard/Tutorials">
                        <button>Tutorials</button>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}
