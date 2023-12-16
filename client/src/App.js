import "./App.css";
import CreateHotel from "./pages/add-hotel/CreateHotel";
import Home from "./pages/home/Home";
import HotelList from "./pages/list/HotelList";
import Login from "./pages/user _auth/Login";
import Register from "./pages/user _auth/Register";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-hotel" element={<CreateHotel />} />
      </Routes>
    </div>
  );
}

export default App;
