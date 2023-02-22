import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Hooks/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const doRegister = () => {
    auth.register({ name, email, password }).then((res) => {
      if (res.status) {
        sessionStorage.setItem("ssid", res.data.token);
        alert("register anda berhasil");
        navigate("/");
      } else if (!res.status) {
        console.log(res);
        alert("register gagal");
      }
    });
  };

  return (
    <div className="container p-5" style={{ width: "32rem" }}>
      <h2 className="fw-bold mb-4">Register</h2>

      <label htmlFor="email">Name : </label>
      <input
        type="email"
        className="form-control mb-2"
        id="email"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

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
      <button className="btn btn-primary mt-3 fw-bold" onClick={doRegister}>
        Register
      </button>
      <br />
      <label htmlFor="" className="mt-3">
        Sudah punya akun? <Link to={"/login"}>Login</Link>
      </label>
    </div>
  );
};

export default Register;
