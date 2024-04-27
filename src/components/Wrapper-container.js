// Import components built elsewhere
// Wrapper component that houses all other components

import React, { useState } from "react";
import IndexPtgItSolution from "./Welcome";
import Service from "./Service";
import Profile from "./Profile";
import Demo from "./Demo";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Header from "./Header";

import "../index.css";
import "../App.css";


export default function WrapperContainer() {
  const [currentPage, setCurrentPage] = useState("Welcome");

  // when an individual selects various tabs, individuals will see what is on those specific pages
  const renderPage = () => {
    if (currentPage === "Welcome") {
      return <IndexPtgItSolution />;
    }
    if (currentPage === "Service") {
      return <Service />;
    }
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === "Demo") {
      return <Demo/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {/* // handlePageChange fxns as a way to change the current page state variable */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}

      <Footer />
    </div>
  );
}
