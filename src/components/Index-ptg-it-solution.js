import React from "react";
// define the src for the image at top of page
// import professionalImage from "../assets/images/professional-image.jpg";

// import "../index.css";
// import "../media-queries.css";

function IndexPtgItSolution() {
  // JSX being returned to represent HTML in JS
  return (
    // class my-5 = (m) margin (y) top & bottom - (5) $spacer-y * 3
    <section className="aboutSection">
      <h1 id="about">About Me</h1>
      <div id="aboutPhoto">
        {/* Recent photo and short bio */}
        {/* <img
          src={professionalImage}
          className="photo"
          style={{ width: "25" }}
          alt="blonde woman in suit jacket"
        /> */}
      <div id="summary">
        <p>
          Junior Developer building professional and technical experience after completion of Case Western Reserve University's Full Stack Web Development program. Completed immersive Java Coding Bootcamp with Southern Methodist University.  Currently employed as General Office Manager for Phillips Technology Group, a family-owned small business. 
         </p>   

      </div>
      </div>
    </section>
  );
}

export default IndexPtgItSolution;
