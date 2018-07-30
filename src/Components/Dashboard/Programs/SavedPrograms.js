import React, { Component } from "react";
import API from "../../APIManager/APIManager";
import SavedProgram from "./SavedProgram";

export default class SavedPrograms extends Component {
    state = {
        programs: []
    };

    componentDidMount() {
        API.GETPrograms().then(response => {
            this.setState({
                programs: response
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.programs.map(program => (
                    <SavedProgram key={program.id} program={program} />
                ))}
            </React.Fragment>
        );
    }
}
