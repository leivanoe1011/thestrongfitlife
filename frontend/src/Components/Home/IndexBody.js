
import React from "react";

import "./style.css"

function IndexBody() {

    return(

        <div className="row">
            <div className="col-sm-12 col-lg-6 indexBodyImg">
                <img src="https://images.squarespace-cdn.com/content/v1/5b98025012b13f43168a1e70/1597363424014-8AS4ARI86TZ9XP52SM8I/ke17ZwdGBToddI8pDm48kGvsJSkuKZO7eYMV5YzgTfR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbFeHJVR-930yo_tzqAvXUZKtiZdkHQUXLVHXpO2mG3ELqRYSQk6N9OYbVZu2wcCwA/vanessa-welcome.jpg?format=750w"/>
            </div>

            <div className="col-sm-12 col-lg-6">

                <div className="image-card sqs-dynamic-text-container">

              
                    <div className="image-title-wrapper">
                        <div 
                            className="image-title sqs-dynamic-text p1" 
                            // data-animation-override="" 
                            // data-width-percentage="56.8"
                        >
                            <p className="">Hey There! I’m Vanessa,,</p><p className="">Beastmode Personal Trainer &amp; Health Coach.</p><p className=""></p>
                        </div>
                    </div>



                    <div className="image-subtitle-wrapper">
                        <div 
                            className="image-subtitle sqs-dynamic-text p2" 
                            // data-animation-override="" 
                            // data-width-percentage="49.5"
                        >
                            <p className="">I’m a Malbec-sippin’ mama on a mission to help you achieve a fitness level you didn’t think was possible.</p>
                            <p className="">My #1 passion is helping women like you shatter the fitness plateaus that hold you back from reaching your full potential.</p>
                            <p className=""><strong>I believe everyone has an inner beast waiting to be unleashed, and I’ll push you to unchain yours.</strong></p>
                            <p className="">You’ll gain bold confidence, unstoppable energy, a bad-ass mindset, and powerful results.</p>
                            <p className=""><em>I’m talking check-out-that-fearless-beast-staring-back-at-me-in-the-mirror kind of results.</em></p>
                            <p className="">I know because I’ve experienced these life-changing results firsthand.</p>
                        </div>
                    </div>



                    <div className="image-button-wrapper">
                        <div 
                            className="image-button sqs-dynamic-text myStory" 
                            // data-width-percentage="49.5"
                        >
                            <div className="image-button-inner">
                                {/* <a href="/about">My Story</a> */}
                                <button type="button" className="btn btn-primary">My Story</button>
                            </div>
                        </div>
                    </div>


                </div>
            
            </div>
        </div>

    );
}

export default IndexBody;

