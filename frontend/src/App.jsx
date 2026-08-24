import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import HomePage from "./Pages/HomePage";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <HomePage/>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="LogIn" element={<SignIn />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
