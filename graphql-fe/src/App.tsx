import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
    const isLoggedIn = false;
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <h1>home</h1>
                    </Route>
                    <Route path="/login">
                        <h1>login</h1>
                    </Route>
                    <Route path="/signup">
                        <h1>signup</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
