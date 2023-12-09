import { Box } from "@mui/system";
import LoginForm from "./components/molecules/Login";
import CloudBackground from "./components/molecules/CloudBackground";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
function App() {
  return (
    <Box>
      <Box>
        <Navbar />
        <CloudBackground />
        <LoginForm />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
