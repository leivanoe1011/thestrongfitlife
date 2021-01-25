
import React from "react"

function MainBody(props) {

    return (
        <div className="main-sec about-us-section parallax">
            {props.children}
        </div>
    )
}

export default MainBody