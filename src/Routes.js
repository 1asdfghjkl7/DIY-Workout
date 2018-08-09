import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Callback from "./Components/Callback/Callback";
import Auth from "./Components/Auth/Auth";
import Dashboard from "./Components/Dashboard/Dashboard";
import Programs from "./Components/Dashboard/Programs/Programs";
import Tutorials from "./Components/Dashboard/Tutorials/Tutorials";
import NewProgram from "./Components/Dashboard/Programs/NewProgram";
import SavedPrograms from "./Components/Dashboard/Programs/SavedPrograms";
import SavedProgram from "./Components/Dashboard/Programs/SavedProgram";
import ExerciseFormPageHolder from "./Components/Dashboard/Programs/ExerciseFormPageHolder";
import Chest from "./Components/Dashboard/Tutorials/Chest";
import Quads from "./Components/Dashboard/Tutorials/Quads";
import Hamstrings from "./Components/Dashboard/Tutorials/Hamstrings";
import Triceps from "./Components/Dashboard/Tutorials/Triceps";
import Biceps from "./Components/Dashboard/Tutorials/Biceps";
import Back from "./Components/Dashboard/Tutorials/Back";
import Shoulders from "./Components/Dashboard/Tutorials/Shoulders";
import Abs from "./Components/Dashboard/Tutorials/Abs";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
};

const Routes = () => (
    <div>
        <Route
            exact
            path="/"
            render={props => <Home auth={auth} {...props} />}
        />
        <Route
            exact
            path="/Dashboard"
            render={props => <Dashboard {...props} />}
        />
        <Route
            path="/callback"
            render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
            }}
        />
        <Route
            exact
            path="/Dashboard/Programs"
            render={props => <Programs {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Programs/NewProgram"
            render={props => <NewProgram {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Tutorials"
            render={props => <Tutorials {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Tutorials/Chest"
            render={props => <Chest {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Tutorials/Quads"
            render={props => <Quads {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Tutorials/Hamstrings"
            render={props => <Hamstrings {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Tutorials/Triceps"
            render={props => <Triceps {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Tutorials/Biceps"
            render={props => <Biceps {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Tutorials/Back"
            render={props => <Back {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Tutorials/Shoulders"
            render={props => <Shoulders {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Tutorials/Abs"
            render={props => <Abs {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Programs/SavedPrograms/"
            render={props => <SavedPrograms {...props} />}
        />
        <Route
            exact
            path="/Dashboard/Programs/SavedPrograms/:programId"
            render={props => {
                return (
                    <SavedProgram
                        {...props}
                        program={props.location.state.program}
                        toggle={props.location.state.toggle}
                    />
                );
            }}
        />
        <Route
            exact
            path="/AddExercise"
            render={props => {
                return <ExerciseFormPageHolder {...props} />;
            }}
        />
    </div>
);

export default Routes;
