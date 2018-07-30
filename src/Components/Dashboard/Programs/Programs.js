import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Programs.css";

export default class Programs extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="Buttons">
                    <Link to="/Dashboard/Programs/NewProgram">
                        <button>New</button>
                    </Link>
                    <Link to="/Dashboard/Programs/SavedPrograms">
                        <button>Saved</button>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}
