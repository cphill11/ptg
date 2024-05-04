import React from "react";

import "../index.css";

function Service(props) {
  return (
    <section class="serviceSection">
      <h1 id="service">
        Services
        <h4> Robust, Performance Driven, Full Featured</h4>
      </h1>
      <div id="backing">
        <div className="SplitPane">
          {""}
          {props.left}
          <div className="SplitPane-Left">
            <h3> Web Design</h3>
            <p>
              What does your current site say about you or your organization?
              Does it convey your message? Is it current? Whether you currently
              own a website that needs some attention or are in need of one, a
              solution is available. Utilizing the most current web standards
              and offering a wide array of options to make your visitor's
              experience a memorable and informative one, isn't it time to
              convey your message? First impressions are important. Make your
              mark.
            </p>

            <h4> Key Points</h4>
            <ul>
              <li>Cross-Browser Compatibility</li>
              <li>Mobile and Responsive Web Site Design</li>
              <li> Client Side Scripting</li>
              <li>W3C Standards Compliant</li>
            </ul>

            <h5> What does this mean for you?</h5>
          </div>

          {""}
          {props.left}
          <div className="SplitPane-Left">
            <h3> Web Hosting</h3>
            <p>
              Taking the guess work out of hosting, while offering the
              convenience of having a single resource for your web design,
              development and hosting needs. Whether your current site or a new
              one, a solution can be designed for you. With support for ASP,
              ASP.NET, Coldfusion and PHP languages, and offering MySQL and
              Microsoft SQL Server database access. Because development without
              hosting is only fulfilling a portion of the need...
            </p>

            <h4> Key Points</h4>
            <ul>
              <li>Performance and stability</li>
              <li>Supoort for most programming languages</li>
              <li> MySQL and SQL Server</li>
              <li>Joomia CMS</li>
            </ul>

            <h5> What does this mean for you?</h5>
          </div>
        </div>
        {""}
        {props.right}
        <div className="SplitPane-Right">
          <h3> Web Application Development</h3>
          <p>
            Need something more advanced? We have that covered too. Or maybe you
            have an existing application that you would like extended to perform
            new tasks? With experience in custom development spanning
            e-commerce, project management, FTP and document management,
            cross-media marketing, form and data collection, custom reporting,
            and web to print solutions your concepts can become reality.
            Enterprise level standards ensure security and stability, while
            maintaining the ability to allow the site to grow as you do. From
            blogs to SMS messaging, custom tailor how you deliver your message
            to the world.
          </p>

          <h4> Key Points</h4>
          <ul>
            <li>Stable and Secure</li>
            <li>Extensible</li>
            <li>Basic to Enterprise-Level Capabilities</li>
            <li>ASP.Net, Java, Coldfusion, React</li>
          </ul>

          <h5> What does this mean for you?</h5>
        </div>

        {""}
        {props.right}
        <div className="SplitPane-Right">
          <h3>Consulting</h3>
          <p>
            From design through delivery, maintaining control of your process is
            key to success. Having a resource to assist in planning and
            preparation can ensure that your project time and costs are within
            scope, budget, and delivery time. From technology assessment,
            buidling or growing a team, process review, pre-production task
            planning through delivery, our established track record will provide
            confidence in each area of the project cycle.
          </p>

          <h4> Key Points</h4>
          <ul>
            <li>Business Case Requirements Assessment</li>
            <li>Technology Review</li>
            <li>Process Efficiency</li>
            <li>Project Lifecycle Planning</li>
          </ul>

          <h5> What does this mean for you?</h5>
        </div>
      </div>
    </section>
  );
}

export default Service;
