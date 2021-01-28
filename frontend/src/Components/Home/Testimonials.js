import React from "react";

function Testimonials() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center">
            <h1>LOVE NOTES</h1>
          </div>
        </div>
        <div className="row">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
