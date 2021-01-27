import React, { useContext } from "react";

import Header from "./IndexHeader";
// import Login from "./IndexLogin";

import { AuthContext } from "../../Context/AuthContext";

function Index() {
  // const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {/* Header */}
      <Header />

      {/* <div className = "container">
                <div className="row">
                    <div className={isAuthenticated ? "col-sm-12" : "col-sm-7"}>
                        <Header/>
                    </div>

                    {isAuthenticated ? <div></div> : <div className="col-sm-5">
                        <Login/>
                    </div> }
                    
                </div>
            </div> */}

      {/* Body */}
    </>
  );
}

export default Index;
