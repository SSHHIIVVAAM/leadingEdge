import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed">
        <div class="container-fluid">
          <a className="navbar-brand" href="#">
            <b>leis</b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Typography
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-success" type="submit">
              <i class='bx bxs-hand'></i>Lets Talk
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
