import "./App.css";
import Homepage from "./pages/homepage";
import BlockDetails from "./pages/BlockDetails";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/blockdetails" element={<BlockDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
