import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { LuArrowLeftRight } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">
            Comptech
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="d-flex list-unstyled gap-3 fs-4">
            <li className="icon1">
              <FaCartArrowDown />
            </li>
            <li className="icon2">
              <BsFillHeartFill />
            </li>
            <li className="icon3">
              <LuArrowLeftRight />
            </li>
            <li className="icon4">
              <BsPersonCircle />
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link
              className="nav-link fw-semibold active"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/addproduct">
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
    </div>
  );
}
export default Navbar;
