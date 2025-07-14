import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import App_interests from "./App_interests";
import App_personal from "./App_personal";
import App_output from "./App_output";
import App_company from "./App_company";
import { CookiesProvider } from "react-cookie";
import ScrollToTop from "./ScrollToTop";

//Router builds the Page
const routing = (
  <CookiesProvider>
    <Router>
      <ScrollToTop>
        <switch>
          <Route exact path="/" component={App} />
          <Route exact path="/services" component={App_company} />
          <Route exact path="/survey" component={App_interests} />
          <Route exact path="/survey" component={App_personal} />
          <Route exact path="/result" component={App_output} />
          <div className="Footer" />
        </switch>
      </ScrollToTop>
    </Router>
  </CookiesProvider>
);
ReactDOM.render(routing, document.getElementById("root"));
