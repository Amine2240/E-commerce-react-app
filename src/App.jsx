import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Success from "./components/success";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<div>you are in the wrong page </div>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

// the project is not that perfect : the cart contains duplicates elements ; after deleting one element off the cart it will be shown after adding another one
