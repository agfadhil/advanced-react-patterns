import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RenderProps from "./pages/RenderProps";
import HOC from "./pages/HOC";
import CompoundComponent from "./pages/CompoundComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/render-props" exact element={<RenderProps />} />
        <Route path="/hoc" exact element={<HOC />} />
        <Route
          path="/compound-component"
          exact
          element={<CompoundComponent />}
        />
      </Routes>
    </Router>
  );
}

export default App;
