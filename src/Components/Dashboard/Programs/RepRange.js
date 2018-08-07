import React, { Component } from "react";

export default class RepRange extends Component {
    render() {
        if (this.props.exercise.typeOfExerciseId === 1) {
            {
                console.log(this.props.typeOfExercise[0].repRange);
            }
            return this.props.typeOfExercise[0].repRange.map(rep => (
                <div key={rep}>
                    {/* {console.log(rep)} */}
                    {/* {console.log(this.props.exercise.typeOfExercise.repRange)} */}
                    {/* {console.log(this.props.currentRadio)}
                            {console.log(this.props.workoutId)} */}
                    {/* {console.log(exercise.id)} */}
                    <input
                        type="radio"
                        id={rep}
                        value={rep}
                        checked={this.props.currentRadio == rep}
                        onChange={this.props.handleRadioChange}
                        // onChange={this.props.arrayStuff}
                    />
                    <label htmlFor={rep}>{rep}</label>
                </div>
            ));
        } else if (this.props.exercise.typeOfExerciseId === 2) {
            return this.props.typeOfExercise[1].repRange.map(rep => (
                <div key={rep}>
                    {/* {console.log(rep)} */}
                    {/* {console.log(this.props.exercise.typeOfExercise.repRange)} */}
                    {/* {console.log(this.props.currentRadio)}
                            {console.log(this.props.workoutId)} */}
                    {/* {console.log(exercise.id)} */}
                    <input
                        type="radio"
                        id={rep}
                        value={rep}
                        checked={this.props.currentRadio == rep}
                        onChange={this.props.handleRadioChange}
                        // onChange={this.props.arrayStuff}
                    />
                    <label htmlFor={rep}>{rep}</label>
                </div>
            ));
        } else if (this.props.exercise.typeOfExerciseId === 3) {
            return this.props.typeOfExercise[2].repRange.map(rep => (
                <div key={rep}>
                    {/* {console.log(rep)} */}
                    {/* {console.log(this.props.exercise.typeOfExercise.repRange)} */}
                    {/* {console.log(this.props.currentRadio)}
                            {console.log(this.props.workoutId)} */}
                    {/* {console.log(exercise.id)} */}
                    <input
                        type="radio"
                        id={rep}
                        value={rep}
                        checked={this.props.currentRadio == rep}
                        onChange={this.props.handleRadioChange}
                        // onChange={this.props.arrayStuff}
                    />
                    <label htmlFor={rep}>{rep}</label>
                </div>
            ));
        } else if (this.props.exercise.typeOfExerciseId === 4) {
            return this.props.typeOfExercise[3].repRange.map(rep => (
                <div key={rep}>
                    {/* {console.log(rep)} */}
                    {/* {console.log(this.props.exercise.typeOfExercise.repRange)} */}
                    {/* {console.log(this.props.currentRadio)}
                            {console.log(this.props.workoutId)} */}
                    {/* {console.log(exercise.id)} */}
                    <input
                        type="radio"
                        id={rep}
                        value={rep}
                        checked={this.props.currentRadio == rep}
                        onChange={this.props.handleRadioChange}
                        // onChange={this.props.arrayStuff}
                    />
                    <label htmlFor={rep}>{rep}</label>
                </div>
            ));
        }
    }
}
