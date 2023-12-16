import "./App.css";
import CreateHotel from "./pages/add-hotel/CreateHotel";
import HotelList from "./pages/list/HotelList";
import Login from "./pages/user _auth/Login";
import Register from "./pages/user _auth/Register";

function App() {
  return (
    <div className="App">
      <Login />
      <CreateHotel />
    </div>
  );
}

export default App;
