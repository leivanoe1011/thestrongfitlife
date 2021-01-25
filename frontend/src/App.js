

import React from "react";

import { Router } from 'react-router-dom';


import NavBar from "./Components/NavBar/NavBar";
import MainBody from "./Components/Home/MainBody";
import Footer from "./Components/Footer";
import Routes from "./Services/RoutesServices";

import "./styles/App.css";

import history from './Services/History';



// const history = createBrowserHistory();


function App() {
  return (

    <>
     
      {/* The Link components in the NavBar must live within the Router component */}
      <Router history={history}>
    
        {/* <Router> */}
              {/* Start of NavBar */}
              <div className="navContainer">

                  <div className="container-flex">
                    <NavBar className="row" />
                  </div>

              </div>     
              {/* End of NavBar */}
              
              <MainBody>
                  <Routes history={history} />
              </MainBody>

          {/* </Router> */}

      </Router>
     
      {/* Footer */}
      <footer className="footer">
        <Footer/>
      </footer>
      {/* End of Container */}
      

 
    </>

    );
}

export default App;




