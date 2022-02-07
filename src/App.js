import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organism/Navbar/Navbar";
import Home from "./components/pages/Home";
import Comment from "./components/pages/Comment";
import ApiProvider from "./core/apiContext";

import "./css/global.scss";

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comment/:id" element={<Comment />} />
        </Routes>
      </ApiProvider>
    </div>
  );
}

export default App;
