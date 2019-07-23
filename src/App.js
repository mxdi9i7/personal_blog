import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/Normalize.css";
import "./styles/Global.css";
import "./styles/Grid.css";
import Landing from "./pages/Landing";
import BlogPage from "./pages/Blog";
import moment from "moment";
import "moment/locale/zh-cn";
import { ApolloConsumer } from "react-apollo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
moment.locale("zh-cn");

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloConsumer>
          {client => {
            return (
              <div>
                <Navbar />
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <Landing {...routeProps} apollo={client} />
                  )}
                />
                <Route
                  exact
                  path="/blog/:slug"
                  render={routeProps => (
                    <BlogPage {...routeProps} apollo={client} />
                  )}
                />
                <Footer apollo={client} />
              </div>
            );
          }}
        </ApolloConsumer>
      </Router>
    );
  }
}

export default App;
