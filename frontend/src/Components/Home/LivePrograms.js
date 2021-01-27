import React from "react";
import weight from "../../images/unleash-home.jpg";
import iphone from "../../images/iphone.jpg";
import pushup from "../../images/tsfl-home-page.jpg";

function LivePrograms() {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="text-center mt-4 mb-4">
          <h2>
            If you’re ready to feel unstoppable and take your fitness routine to
            the next level, click below to experience one of my LIVE, virtual
            programs: Unleash the Beast or 1:1 Personal Training.
          </h2>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 liveImg">
          <div className="card bg-dark text-white">
            <img
              src={weight}
              className="img-fluid"
              alt="weight on person's back"
            ></img>
            <div className="card-img-overlay">
              <h5 className="card-title text-light">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 liveImg">
          <img
            src={iphone}
            className="img-fluid"
            alt="person holding iphone"
          ></img>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 liveImg">
          <img src={pushup} className="img-fluid" alt="people exercising"></img>
        </div>
      </div>
    </div>
  );
}

export default LivePrograms;
