import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Hooks/auth";
import { User } from "../Stores/SessionStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Session = useContext(User);

  const doLogin = () => {
    auth.login({ email, password }).then((res) => {
      if (res.status) {
        sessionStorage.setItem("ssid", res.data.token);
        navigate("/");
      } else if (!res.status) {
        alert("login gagal");
      }
    });
  };

  return (
    <div className="container p-5" style={{ width: "32rem" }}>
      <h2 className="fw-bold mb-4">Login</h2>
      <label htmlFor="email">Email : </label>
      <input
        type="email"
        className="form-control mb-2"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="email">Password : </label>
      <input
        type="password"
        className="form-control"
        id="email"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary mt-3 fw-bold" onClick={doLogin}>
        Login
      </button>
      <br />
      <label htmlFor="" className="mt-3">
        Belum punya akun? <Link to={"/register"}>Register</Link>
      </label>
    </div>
  );
};

export default Login;
