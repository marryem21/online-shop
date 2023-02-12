import "./App.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Categories from "./views/Categories";
import Deals from "./views/Deals";
import WhatsNew from "./views/WhatsNew";
import Delivery from "./views/Delivery";
import Profile from "./views/Profile";
import Cart from "./views/Cart";
function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/whatsNew" element={<WhatsNew />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
