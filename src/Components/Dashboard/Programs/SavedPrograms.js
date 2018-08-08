import React, { Component } from "react";
import API from "../../APIManager/APIManager";
import SavedProgram from "./SavedProgram";
import "./SavedPrograms.css";

export default class SavedPrograms extends Component {
    state = {
        programs: [],
        userProgramCross: []
    };

    componentDidMount() {
        API.GETPrograms().then(response => {
            this.setState({
                programs: response
            });
        });
        API.GETUserProgramCross().then(response => {
            this.setState({
                userProgramCross: response
            });
        });
    }

    render() {
        return this.state.programs.map(program => {
            if (program.userId == localStorage.getItem("boi")) {
                return (
                    <React.Fragment>
                        <SavedProgram
                            key={program.id}
                            program={program}
                            location={this.props.location}
                        />
                    </React.Fragment>
                );
            } else {
                return null;
            }
        });
    }
}
