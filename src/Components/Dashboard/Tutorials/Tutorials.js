import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class Tutorials extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="Buttons">
                    <Link
                        to={{
                            pathname: "Tutorials/Chest"
                        }}
                    >
                        <Button>chest</Button>
                    </Link>
                    <Link
                        to={{
                            pathname: "Tutorials/Quads"
                        }}
                    >
                        <Button>quads</Button>
                    </Link>
                    <Link
                        to={{
                            pathname: "Tutorials/Hamstrings"
                        }}
                    >
                        <Button>hamstrings</Button>
                    </Link>
                    <Link
                        to={{
                            pathname: "Tutorials/Triceps"
                        }}
                    >
                        <Button>triceps</Button>
                    </Link>
                    <Link
                        to={{
                            pathname: "Tutorials/Biceps"
                        }}
                    >
                        <Button>biceps</Button>
                    </Link>
                    <Link
                        to={{
                            pathname: "Tutorials/Back"
                        }}
                    >
                        <Button>back</Button>
                    </Link>
                    <Link
                        to={{
                            pathname: "Tutorials/Shoulders"
                        }}
                    >
                        <Button>shoulders</Button>
                    </Link>
                    <Link
                        to={{
                            pathname: "Tutorials/Abs"
                        }}
                    >
                        <Button>abs</Button>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}
