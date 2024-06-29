import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RenderProps from "./pages/RenderProps";
import HOC from "./pages/HOC";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/render-props" exact element={<RenderProps />} />
        <Route path="/hoc" exact element={<HOC />} />
      </Routes>
    </Router>
  );
}

export default App;
