import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import About from "./pages/AboutPage";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
