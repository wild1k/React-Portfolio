import React, { Component } from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    );
  }
}
export default App;
