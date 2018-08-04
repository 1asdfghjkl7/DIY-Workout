import React, { Component } from "react";
import API from "../../APIManager/APIManager";
import { Button, Input, Label } from "semantic-ui-react";
export default class NewProgram extends Component {
    render() {
        return (
            <React.Fragment>
                <form
                    onSubmit={() => {
                        API.POSTProgram(document.getElementById("name").value);
                    }}
                >
                    <Label
                        pointing="right"
                        color="blue"
                        size="massive"
                        htmlFor="name"
                    >
                        Name of Program
                    </Label>
                    <Input size="massive" id="name" name="name" type="text" />
                    <Button size="massive">Save</Button>
                </form>
            </React.Fragment>
        );
    }
}
