import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
