import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../APIManager/APIManager";

export default class NewProgram extends Component {
    render() {
        return (
            <React.Fragment>
                <form
                    onSubmit={() => {
                        API.POSTProgram(document.getElementById("name").value);
                    }}
                >
                    <label htmlFor="name">Name of Program</label>
                    <input id="name" name="name" type="text" />
                    <button>Save</button>
                </form>
            </React.Fragment>
        );
    }
}
