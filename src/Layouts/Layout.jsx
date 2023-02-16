import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{ width: "90%", height: "500px", marginTop: "80px" }}
      >
        {children}
      </div>

      <Footer />
    </>
  );
};

export default Layout;
