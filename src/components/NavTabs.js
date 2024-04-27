import React from "react";
// import "../index.css";
// import "../media-queries.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#welcome"
            onClick={() => handlePageChange("Welcome")}
            className={currentPage === "Welcome" ? "nav-link active" : "nav-link"}
          >
          Welcome
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#service"
            onClick={() => handlePageChange("Service")}
            className={
              currentPage === "Service" ? "nav-link active" : "nav-link"
            }
          >
            Services
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#profile"
            onClick={() => handlePageChange("Profile")}
            className={
              currentPage === "Profile" ? "nav-link active" : "nav-link"
            }
          >
            Profile 
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Contactg")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>

      </ul>
    </header>
  );
}

export default NavTabs;
