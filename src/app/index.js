import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home";
import Counter from "./components/Counter";

class App extends React.Component {
    render() {
        return (
            <div>
                <Root />
                <Switch>
                    <Route exact path="/" Component={Root} />
                    <Route path="/home" Component={Home} />
                    <Route path="/counter" Component={Counter} />
                </Switch>
            </div>
        );
    }
}

render(<Router><App/></Router>,window.document.getElementById("app"));
