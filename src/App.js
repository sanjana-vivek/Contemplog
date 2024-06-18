import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CreatePage } from "./components/CreatePage";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
