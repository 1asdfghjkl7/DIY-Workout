import React, { Component } from "react";

export default class Home extends Component {
    // calls the login method in authentication service
    login = () => {
        this.props.auth.login();
    };
    // calls the logout method in authentication service
    logout = () => {
        this.props.auth.logout();
        window.location.reload();
    };
    render() {
        // calls the isAuthenticated method in authentication service
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                {isAuthenticated() && (
                    <div className="container column">
                        <h5>
                            You are logged in!{" "}
                            <a
                                style={{ cursor: "pointer" }}
                                onClick={this.logout}
                            >
                                Log Out.
                            </a>
                        </h5>
                    </div>
                )}
                {!isAuthenticated() && (
                    <div className="container column">
                        <h5>
                            You are not logged in! Please{" "}
                            <a
                                style={{ cursor: "pointer" }}
                                onClick={this.login}
                            >
                                Log In
                            </a>{" "}
                            to continue.
                        </h5>
                    </div>
                )}
            </div>
        );
    }
}
