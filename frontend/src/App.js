import React from "react";

import { Router } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import MainBody from "./Components/Home/MainBody";
import Footer from "./Components/Footer";
import Routes from "./Services/RoutesServices";

import history from "./Services/History";

// const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        {/* The Link components in the NavBar must live within the Router component */}
        <NavBar />
        <MainBody>
          <Routes history={history} />
        </MainBody>
        <Footer />
      </Router>
  );
}

export default App;
