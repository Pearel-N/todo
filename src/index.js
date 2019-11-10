import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Todo from "./todoComponents/todo";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Todo />, document.getElementById("tocomplete"));
serviceWorker.unregister();
