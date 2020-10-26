import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Projects from "./Pages/Projects";





class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" component={Projects}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;