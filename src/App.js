import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import DocsCodeblocks from "./pages/DocsCodeblocks";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/docs-codeblocks" component={DocsCodeblocks} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route exact path="/" component={Main} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
