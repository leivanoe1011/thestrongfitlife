
import React from "react";

import Body from "./DashboardBody";

function Dashboard() {

    return(
        <section>
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <Body />
                    </div>
                    <div className="col-sm-4">
                        <Body />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <Body />
                </div>
            </div>
            
        </section>
    )
}

export default Dashboard;

