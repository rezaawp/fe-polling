import { useState } from "react";
import { LineWave } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const doLogin = async () => {
    try {
      setLoading(true);
      const res = await auth.login({ email, password });
      if (res.status) {
        sessionStorage.setItem("ssid", res.data.token);
        setLoading(false);
        navigate("/");
      } else if (!res.status) {
        alert("login gagal");
      }
    } catch (e) {
      setLoading(true);
      console.log({ e });
    }
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

      <div className="container-fluid d-flex p-0 pb-0">
        <button className="btn btn-primary mt-3 fw-bold" onClick={doLogin}>
          Login
        </button>
        {loading && (
          <LineWave
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        )}
      </div>
      <label htmlFor="" className="mt-3">
        Belum punya akun? <Link to={"/register"}>Register</Link>
      </label>
      <br />
    </div>
  );
};

export default Login;
