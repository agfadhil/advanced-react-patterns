import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RenderProps from "./pages/RenderProps";

const Page3 = () => <h2>Page 3</h2>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/render-props" exact element={<RenderProps />} />
        <Route path="/page3" exact element={Page3} />
      </Routes>
    </Router>
  );
}

export default App;
