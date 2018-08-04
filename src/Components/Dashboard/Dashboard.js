import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./Dashboard.css";

export default class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="Buttons">
                    <Link to="/Dashboard/Programs">
                        <Button size="massive">Programs</Button>
                    </Link>
                    <Link to="/Dashboard/Tutorials">
                        <Button size="massive">Tutorials</Button>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}
