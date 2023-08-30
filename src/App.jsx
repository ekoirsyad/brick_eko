import "./App.css";
import githubLogo from "./assets/github-mark.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="main-container">
      <div className="header">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img src={githubLogo} className="logo" alt="Vite logo" />
        </a>
        <div>
          <h2>Github Explorer</h2>
          <p>Search user or repositories below</p>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
