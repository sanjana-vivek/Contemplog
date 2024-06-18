import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CreatePage } from "./components/CreatePage";
import { HomePage } from "./components/HomePage";
//import Layout from "./components/Layout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*<Route path="" element={<Layout />}>*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        {/*</Route>*/}
      </Routes>
    </div>
  );
}

export default App;
