import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Revize from "./pages/Revize";
import TypyPanelu from "./pages/TypyPanelu";
import Navbar from "./pages/Navbar";

export default function App() {
  return (
    <>
      <Navbar/>
      <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Revize/>} />
            <Route path="/revize" element={<Revize/>} />
            <Route path="/typy_panelu" element={<TypyPanelu/>} />
          </Routes>
      </div>
    </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);