import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdCompare } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { AiTwotoneHome } from "react-icons/ai";

import "./navbar.css";

function Navbar() {
  useEffect(() => {
    const navContainer = document.getElementById("nav-container");
    const hideButton = document.getElementById("hideButton");
    const navToggler = document.getElementById("toggle-nav");

    hideButton.addEventListener("click", () => {
      navContainer.classList.add("hideNav");
    });

    navToggler.addEventListener("click", () => {
      navContainer.classList.remove("hideNav");
      navContainer.classList.add("showNav");
    });
  });

  return (
    <header>
      <div className="contact-info d-flex justify-content-center gap-5 fw-bold fs-5 align-items-center">
        <div className="phone">
          <span className="icon">
            <FaPhoneVolume />
          </span>
          <span className="number"> +880 1608 686440</span>
        </div>
        <div className="email">
          <span className="icon">
            <FiMail />
          </span>
          <span className="number"> info@comptech.solutions</span>
        </div>
      </div>
      <div className="d-none head container-fluid px-5 d-lg-flex justify-content-between align-items-center">
        <Link className="logo" to="/ecommerce-website">
          <h1>CSL</h1>
          <img
            src="assets/images/ecommerce-favicom.svg"
            alt=""
          />
        </Link>
        <div className="search">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="pc-builder">
          <button type="button">PC Builder</button>
        </div>
        <div className="cart-fav-compare-account d-flex gap-3">
          <div className="cart" title="Shopping Cart position-relative">
            <div className="cart-icon fs-2">
              <FaShoppingCart />
              <span className="translate-middle badge rounded-pill bg-danger fs-6">
                0
              </span>
            </div>
          </div>
          <div className="favorite">
            <div className="fav-icon fs-2">
              <MdFavorite />
              <span className="translate-middle badge rounded-pill bg-danger fs-6">
                0
              </span>
            </div>
          </div>
          <div className="compare">
            <div className="compare-icon fs-2">
              <MdCompare />
              <span className="translate-middle badge rounded-pill bg-danger fs-6">
                0
              </span>
            </div>
          </div>
          <div className="compare">
            <div className="compare-icon fs-2">
              <MdAccountCircle />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link
              className="nav-link fw-semibold active"
              aria-current="page"
              to="/ecommerce-website"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fw-semibold"
              to="/ecommerce-website/addproduct"
            >
              Add Product
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link fw-semibold dropdown-toggle"
              data-bs-toggle="dropdown"
              to="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown sample
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  item 4
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="#">
              Security Items
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="#">
              Other
            </Link>
          </li>
        </ul>
      </div>
      <nav className="navbar">
        <div className="container-fluid d-flex gap-3 px-5">
          <div className="collapse-item container-fluid">
            <div className="collapse-btn d-flex justify-content-center align-items-center">
              <button id="toggle-nav" className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="logo d-flex justify-content-center align-items-center">
              <h1>LOGO</h1>
            </div>
            <div className="search-fav-cart d-flex justify-content-center align-items-center gap-3 text-center">
              <div className="search fs-2">
                <FaSearch />
              </div>
              <div className="favorite text-center">
                <div className="fav-icon fs-2">
                  <MdFavorite />
                  <span className="translate-middle badge rounded-pill bg-danger fs-6">
                    0
                  </span>
                </div>
              </div>
              <div
                className="cart"
                title="Shopping Cart position-relative text-center"
              >
                <div className="cart-icon fs-2">
                  <FaShoppingCart />
                  <span className="translate-middle badge rounded-pill bg-danger fs-6">
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-container" className="nav-container">
            <ul className="nav-ul">
              <li className="nav-icon" href="#">
                <div className="home-icon fs-2">
                  <AiTwotoneHome />
                </div>
                <div id="hideButton" className="collapse-icon fs-3">
                  <RxCrossCircled className="crossIcon" />
                </div>
              </li>
              <li>Laptop</li>
              <li>Desktop and Server</li>
              <li>Gaming</li>
              <li>Monitor</li>
              <li>Tablet PC</li>
              <li>Printer</li>
              <li>Camera</li>
              <li>Security System</li>
              <li>Network</li>
              <li>Sound System</li>
              <li>Office Items</li>
              <li>Accessories</li>
              <li>Software</li>
              <li>Daily Life</li>
              <li>Store</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
