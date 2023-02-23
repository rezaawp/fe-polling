import { useContext } from "react";
import { User } from "../Stores/SessionStore";

const Footer = () => {
  const Session = useContext(User);
  return (
    <div className="container-fluid bg-light fixed-bottom text-center shadow">
      {Session.user_name}
    </div>
  );
};

export default Footer;
