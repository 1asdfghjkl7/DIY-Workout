import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
    render() {
        return (
            <Menu>
                <Link
                    to="/Dashboard"
                    // onClick={() => {
                    //     window.location.reload();
                    // }}
                >
                    <Menu.Item name="Dashboard" />
                </Link>
            </Menu>
        );
    }
}
