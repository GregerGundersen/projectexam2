import { GlobalStyle } from "./App.styled";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Navigation from "./components/Navigation/Navigation";
import ContactUs from "./pages/ContactUs";
import Hotel from "./pages/Hotel";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <GlobalStyle />
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/hotel" element={<Hotel />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
