import React, { Component } from "react";
import API from "../../APIManager/APIManager";
import { Button, Input, Label } from "semantic-ui-react";
import "./NewProgram.css";
export default class NewProgram extends Component {
    render() {
        const labelStyle = {
            margin: "0 0 0 20vw"
        };
        return (
            <React.Fragment>
                <form
                    onSubmit={() => {
                        API.POSTProgram(
                            document.getElementById("name").value,
                            localStorage.getItem("boi")
                        );
                        // API.POSTUserProgramCross(localStorage.getItem("boi"))
                    }}
                >
                    <Label
                        style={labelStyle}
                        color="blue"
                        size="huge"
                        htmlFor="name"
                    >
                        Name of Program
                    </Label>
                    <Input size="large" id="name" name="name" type="text" />
                    <Button color="orange" size="massive">
                        Save
                    </Button>
                </form>
            </React.Fragment>
        );
    }
}
