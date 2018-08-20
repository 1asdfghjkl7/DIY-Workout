import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./Programs.css";

export default class Programs extends Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <Link to="/Dashboard/Programs/NewProgram">
                            <Button color="orange" size="massive">
                                New
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Programs/SavedPrograms">
                            <Button color="orange" size="massive">
                                Saved
                            </Button>
                        </Link>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}
