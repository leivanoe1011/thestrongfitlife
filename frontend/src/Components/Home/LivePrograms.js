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

        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
          <div className="card bg-dark text-white liveImg">
            <img
              src={weight}
              className="img-fluid"
              alt="weight on person's back"
            ></img>
            <div className="card-img text-center">
              <h4 className="text-light mt-2">Unleash The Beast</h4>
              <p className="card-body text-light">
                Fitness Membership with Live Workouts, Support, and
                Accountability.
              </p>
              <div className="mb-2">
                <a className="btn btn-large bg-light" href="/">
                  TELL ME MORE!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
          <div className="card bg-dark text-white liveImg">
            <img
              src={iphone}
              className="img-fluid"
              alt="weight on person's back"
            ></img>
            <div className="card-img text-center">
              <h4 className="text-light mt-2">Personal Training</h4>
              <p className="card-body text-light">
                1:1 Personalized Online Fitness Coaching.
              </p>
              <div className="mb-2">
                <a className="btn btn-large bg-light" href="/">
                  I WANT INFO!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
          <div className="card bg-dark text-white liveImg">
            <img
              src={pushup}
              className="img-fluid"
              alt="weight on person's back"
            ></img>
            <div className="card-img text-center">
              <h4 className="text-light mt-2">Testimonials</h4>
              <p className="card-body text-light">
                Real Transformation Stories from The Beastmode Community
              </p>
              <div className="mb-2">
                <a className="btn btn-large bg-light" href="/">
                  BRING ME THERE!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivePrograms;
