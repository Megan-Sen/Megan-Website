import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
// import Footer from "./components/Footer/Footer";
import "./App.css";

// Home:
import Home from "./pages/Home/Home";
// About:
import About from "./pages/About/About";
// Product:
import Works from "./pages/Works/Works";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="nav-bar">
          <Logo />
          <Nav />
        </div>
        <hr />
        <h3>Front End Developer - JavaScript & React</h3>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/works" component={Works} />
          </Switch>
        </main>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
