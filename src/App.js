import React, { Component } from "react";
import DIYWorkout from "./DIY-Workout";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import history from "./Components/Auth/history";

class App extends Component {
    render() {
        return (
            <Router history={history} component={Home}>
                <DIYWorkout />
            </Router>
        );
    }
}

export default App;
