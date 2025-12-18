import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./routes/Register";
import Dash from "./routes/Dash";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dash />} />
      </Routes>
      <Footer />
    </>
  );
}
