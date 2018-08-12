import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";
import "./Navbar.css";

export default class NavBar extends Component {
    render() {
        const dashboardMenuItem = {
            padding: "0 25vw 0 25vw"
        };
        return (
            <Menu>
                <Menu.Item>
                    <Link
                        to="/"
                        // onClick={() => {
                        //     window.location.reload();
                        // }}
                    >
                        <Button color="orange">Logout</Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link
                        style={dashboardMenuItem}
                        to="/Dashboard"
                        // onClick={() => {
                        //     window.location.reload();
                        // }}
                    >
                        <Button color="orange">Dashboard</Button>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}
