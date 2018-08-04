import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Programs.css";
import { Button } from "semantic-ui-react";

export default class Programs extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="Buttons">
                    <Link to="/Dashboard/Programs/NewProgram">
                        <Button size="massive">New</Button>
                    </Link>
                    <Link to="/Dashboard/Programs/SavedPrograms">
                        <Button size="massive">Saved</Button>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}
