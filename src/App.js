import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RenderProps from "./pages/RenderProps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/render-props" exact element={<RenderProps />} />
      </Routes>
    </Router>
  );
}

export default App;
