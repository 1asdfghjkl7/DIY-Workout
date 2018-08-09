import React, { Component } from "react";

export default class Chest extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Bench Press</h1>
                    <iframe
                        title="Bench Press Tip"
                        width="375"
                        height="315"
                        src="https://www.youtube.com/embed/0UYkuLR4cNc?rel=0"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
                <span />
                <div>
                    <h1>Paused Bench</h1>
                    <iframe
                        title="Paused Bench"
                        width="375"
                        height="315"
                        src="https://www.youtube.com/embed/zNqnC4Qays0?rel=0"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
                <span />
                <div>
                    <h1>Incline Bench Press</h1>
                    <iframe
                        title="Incline Bench"
                        width="375"
                        height="315"
                        src="https://www.youtube.com/embed/eiVba3zhE5k?rel=0"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
                <span />
                <div>
                    <h1>SlingShot Bench</h1>
                    <iframe
                        title="SlingShot Bench"
                        width="375"
                        height="315"
                        src="https://www.youtube.com/embed/9o1QW4XNb0c?rel=0"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
            </React.Fragment>
        );
    }
}
