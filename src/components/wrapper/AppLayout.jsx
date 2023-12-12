import Footer from "./../molecules/Footer";
import Navbar from "./../molecules/Navbar";
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
