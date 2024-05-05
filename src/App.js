import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Game from "./pages/Game";
import AboutUs from "./pages/AboutUs";
import Inspirasi from "./pages/Inspirasi"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/game" element={<Game/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/inspirasi" element={<Inspirasi/>} />
      </Routes>
    </Router>
  );
}

export default App;
