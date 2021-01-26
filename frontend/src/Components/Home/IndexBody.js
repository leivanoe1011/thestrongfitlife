import React from "react";

import "./style.css";

function IndexBody() {
  return (
    <div className="row m-5">
      <div className="col-sm-12 col-md-5 col-lg-5 indexBodyImg">
        <img
          className="img-fluid mb-5"
          src="https://images.squarespace-cdn.com/content/v1/5b98025012b13f43168a1e70/1597363424014-8AS4ARI86TZ9XP52SM8I/ke17ZwdGBToddI8pDm48kGvsJSkuKZO7eYMV5YzgTfR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbFeHJVR-930yo_tzqAvXUZKtiZdkHQUXLVHXpO2mG3ELqRYSQk6N9OYbVZu2wcCwA/vanessa-welcome.jpg?format=750w"
        />
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6 bodyCon">
        <div>
          <div>
            <div className="helloTitle">
              <p className="p1">Hey There! I’m Vanessa,,</p>
              <p className="p1">Beastmode Personal Trainer & Health Coach.</p>
            </div>
          </div>

          <div className="p1">
            <p>
              I’m a Malbec-sippin’ mama on a mission to help you achieve a
              fitness level you didn’t think was possible.
            </p>
            <p>
              My #1 passion is helping women like you shatter the fitness
              plateaus that hold you back from reaching your full potential.
            </p>
            <p>
              <strong>
                I believe everyone has an inner beast waiting to be unleashed,
                and I’ll push you to unchain yours.
              </strong>
            </p>
            <p>
              You’ll gain bold confidence, unstoppable energy, a bad-ass
              mindset, and powerful results.
            </p>
            <p>
              <em>
                I’m talking
                check-out-that-fearless-beast-staring-back-at-me-in-the-mirror
                kind of results.
              </em>
            </p>
            <p>
              I know because I’ve experienced these life-changing results
              firsthand.
            </p>
          </div>

          <div className=" myStory">
            <div className="image-button-inner">
              {/* <a href="/about">My Story</a> */}
              <button type="button" class="btn btn-primary">
                My Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexBody;
