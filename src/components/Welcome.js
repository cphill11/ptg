// Landing Screen for Home Page

import React from "react";
// define the src for the image at top of page
// import professionalImage from "../assets/images/professional-image.jpg";

// import "../index.css";
// import "../media-queries.css";

function Welcome() {
  // JSX being returned to represent HTML in JS
  return (
    // class my-5 = (m) margin (y) top & bottom - (5) $spacer-y * 3
    <section className="welcomeSection">
      <h1 id="welcome">Welcome</h1>
      {/* <div id="aboutPhoto"> */}
        {/* Recent photo and short bio */}
        {/* <img
          src={professionalImage}
          className="photo"
          style={{ width: "25" }}
          alt="blonde woman in suit jacket"
        /> */}
      <div id="summary">
        <p>
          "...the internet has turned what used to be a controlled, one way message into a real-time dialogue with millions"
          <h6> Daniel Sacks, Fast Company</h6>
         </p>   
        <p> 
          <h2> Are you making a statement?</h2>
          Web presence is key in the transformation from limited to limitless.  Every individual, business, and organization can benefite from an online identity.  Opening new doors, inspiring new idea, and enhancing the communication channels available to you.  Every web site is an instance of innovation... are you ready?  Innovate digitally.
        </p>
      {/* </div> */}
      <p> Learn more (? button to connect to services section)</p>
      </div>

    </section>
  );
}

export default Welcome;
