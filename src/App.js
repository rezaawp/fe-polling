import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SessionProvider from "./Stores/SessionStore";
import Pollings from "./Pages/Pollings";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ShowPolling from "./Pages/ShowPolling";
import CreatePoll from "./Pages/CreatePoll";

function App(props) {
  const echo = props.echo;
  return (
    <BrowserRouter>
      <SessionProvider>
        <Routes>
          <Route path="/" element={<Pollings echo={echo} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/polling/:id" element={<ShowPolling echo={echo} />} />
          <Route path="/polling/create" element={<CreatePoll />} />
        </Routes>
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;
