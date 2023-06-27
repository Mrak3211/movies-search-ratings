import "./App.css";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import SearchBar from "./Component/SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
