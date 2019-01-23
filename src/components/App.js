import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Headline from "./Headline";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Headline />
        <Footer />
      </div>
    );
  }
}

export default App;
