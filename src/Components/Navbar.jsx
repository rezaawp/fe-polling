import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Hooks/auth";

const Navbar = () => {
  const navigate = useNavigate("");
  const doLogout = () => {
    auth.logout().then((res) => {
      console.log(res);
      if (res.status) {
        sessionStorage.removeItem("ssid");
        navigate("/login");
      }
    });
  };

  useEffect(() => {}, []);

  return (
    <div
      className="container-fluid bg-light fixed-top"
      style={{
        height: "60px",
        display: "inline-block !important",
      }}
    >
      <div
        className="container-fluid d-flex align-items-center"
        style={{ height: "100%" }}
      >
        <div className="row">
          <div className="col-6 ">
            <span className="fw-bold fs-3 me-4">Pollings</span>
          </div>

          <div className="col-6 d-flex align-items-center justify-content-end gap-3">
            <span className="fw-bold">Home</span>
            <span>Votes</span>
            <span>Profile</span>
            <span onClick={doLogout} style={{ cursor: "pointer" }}>
              Logout
            </span>
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex align-item-center justify-content-end"></div>
    </div>
  );
};

export default Navbar;
