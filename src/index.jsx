import React, {Component,Fragment} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FuncApp from "./funcApp";

class App extends Component {
    render() {
        return (
            <Fragment>
                <FuncApp />
            </Fragment>

        )
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)