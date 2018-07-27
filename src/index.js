import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Routes from "./Routes";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
