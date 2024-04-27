// Import components built elsewhere
// Wrapper component that houses all other components

import React, { useState } from "react";
import IndexPtgItSolution from "./Welcome";
import Service from "./Service";
import Profile from "./Profile";
// import Ancillary from "./Ancillary";
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
    // if (currentPage === "Ancillary") {
    //   return <Ancillary/>;
    // }
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
