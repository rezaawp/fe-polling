import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid mt-3 pt-5"
        style={{ width: "90%", height: window.screen.height - 150 }}
      >
        {children}
      </div>

      <Footer />
    </>
  );
};

export default Layout;
