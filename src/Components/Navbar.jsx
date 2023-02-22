import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../Hooks/auth";

const Navbar = () => {
  const location = useLocation("").pathname;

  const navigate = useNavigate("");
  const doLogout = () => {
    auth.logout().then((res) => {
      if (res.status) {
        sessionStorage.removeItem("ssid");
        navigate("/login");
      }
    });
  };

  useEffect(() => {}, []);

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="#">
          Pollings
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${location == "/" && "active fw-bold"}`}
                aria-current="page"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location == "/polling/create" && "active fw-bold"
                }`}
                to={"/polling/create"}
              >
                Create
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Polling
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
                onClick={doLogout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
