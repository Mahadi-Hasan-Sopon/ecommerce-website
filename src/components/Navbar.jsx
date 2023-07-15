import { FaPhoneVolume } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdCompare } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";

import "./navbar.css";

function Navbar() {
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
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="search">
          <input type="search" name="search" id="search" />
          <FaSearch />
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
      <nav className="navbar">
        <div className="container-fluid d-flex gap-3 px-5">
          <div className="collapse-item container-fluid">
            <div className="collapse-btn d-flex justify-content-center align-items-center">
              <button className="navbar-toggler">
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
          <div className="nav-container">
            <ul className="nav-ul">
              <li className="nav-icon" href="#">
                <div className="home-icon fs-2">
                  <AiTwotoneHome />
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
