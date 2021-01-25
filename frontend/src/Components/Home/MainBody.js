
import React from "react"

// import "../styles/App.css"

function MainBody(props) {

    return (
        <div className="main-sec about-us-section parallax">
            {props.children}
        </div>
    )
}

export default MainBody