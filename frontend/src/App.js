import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import MainBody from "./Components/Home/MainBody";
import Footer from "./Components/Footer";
import CustomRoutes from "./Services/RoutesServices";

function App() {
  return (
    <Router>
      {/* The Link components in the NavBar must live within the Router component */}
      <NavBar />
      <MainBody>
        <CustomRoutes />
      </MainBody>
      <Footer />
    </Router>
  );
}

export default App;
