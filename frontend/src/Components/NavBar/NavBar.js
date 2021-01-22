

import React from 'react';
import { Link } from "react-router-dom";

import LeftNav from "./LeftNavContent";
import RightNav from "./RightNavContent"
import MidNavContent from "./MidNavContent";

function NavBar() {

    
    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="nav-link" to="/">WELCOME</Link>

                    <button className="navbar-toggler justify-content-end" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Justify-content-between will 
                    create the effect of left middle and end Nav Objects */}
                    <div className="collapse navbar-collapse justify-content-between" id="navbarText">
                        <ul className="navbar-nav">
                        
                            <LeftNav/>   

                        </ul>

                            <MidNavContent />
    

                        <ul className="navbar-nav">
                            <RightNav/>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* <div><RightNav/></div> */}
            
        </>
    )
    
}

export default NavBar;













