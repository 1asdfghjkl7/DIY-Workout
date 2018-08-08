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
                <Link
                    to="/Dashboard/Programs"
                    // onClick={() => {
                    //     window.location.reload();
                    // }}
                >
                    <Menu.Item name="Programs" />
                </Link>
                <Link
                    to="/Dashboard/Programs/SavedPrograms"
                    // onClick={() => {
                    //     window.location.reload();
                    // }}
                >
                    <Menu.Item name="Saved Programs" />
                </Link>
                <Link
                    to="/Dashboard/Programs/NewProgram"
                    // onClick={() => {
                    //     window.location.reload();
                    // }}
                >
                    <Menu.Item name="New Program" />
                </Link>
                <Link
                    to="/Dashboard/Tutorials"
                    // onClick={() => {
                    //     window.location.reload();
                    // }}
                >
                    <Menu.Item name="Tutorials" />
                </Link>
            </Menu>
        );
    }
}
