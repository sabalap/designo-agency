import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import About from "./pages/AboutPage";
import Locations from "./pages/Locations";
import Contact from "./pages/ContactPage";
import AppDesign from "./pages/AppDesignPage";
import ScrollToTop from "./utils/ScrollToTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/locations" exact>
          <Locations />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/appdesign" exact>
          <AppDesign />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
