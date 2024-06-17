import { Route, Routes } from "react-router-dom";
import "./App.css";
import  { Navbar }  from "./components/Navbar";
import { CreatePage } from "./components/CreatePage";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="" element={<Navbar />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
        </Routes>
      </div>
  );
}

export default App;
