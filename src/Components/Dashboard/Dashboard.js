import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./Dashboard.css";

export default class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <Link to="/Dashboard/Programs">
                            <Button size="massive">Programs</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Tutorials">
                            <Button size="massive">Tutorials</Button>
                        </Link>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}
