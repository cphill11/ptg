// Landing Screen for Home Page
// Import components built elsewhere

// App.js is the center of the application (root component / wrapper component that houses all of the other components)

// to effect change on the application, we need to either modify this file or add components inside of it

import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import IndexPtgItSolution from "./components/Index-ptg-it-solution";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <NavTabs/>
      <IndexPtgItSolution/>
        <p>
          Edit <code>src/App.js</code> and save to reload.  
        </p>
        <p> This will be PTG's new landing page
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Footer/>
    </div>
  );
}

export default App;
