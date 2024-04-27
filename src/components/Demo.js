import React from "react";

function Demo(props) {
return (
<section class="demoSection">
            <h1 id="demo">
                Demos
                <h4>Explore an Array of Samples</h4>
            </h1>
            <div id="backing">
                <div className="SplitPane">
                    {""}
                    {props.left}
                    <div className="SplitPane-Left">
                        <h3> Marketing Materials Ordering Portal</h3>
                        <p> 
                        (EXPLORE FURTHER)
                        </p>
                    </div>

                    {""}
                    {props.left}
                    <div className="SplitPane-Left">
                        <h3> Organization Infrastructure</h3>
                        <p> 
                        (EXPLORE FURTHER) </p>
 
                    </div>
               
                    {""}
                    {props.left}
                    <div className="SplitPane-Left">
                        <h3>Online e-Catalog Solution</h3>
                        <p> 
                        (EXPLORE FURTHER) </p>
 
                    </div>
\
                </div>
               
                    {""}
                    {props.right}
                    <div className="SplitPane-Right"> 
                    <h3>Online e-Catalog Solution</h3>
                        <p> 
                        (EXPLORE FURTHER) </p>

                    </div>

                    {""}
                    {props.right}
                    <div className="SplitPane-Right"> 
                    <h3>SEO (?)</h3>
                        <p>  (EXPLORE FURTHER) </p>

                    </div>
            </div>
        </section>
    )
}
export default Demo;