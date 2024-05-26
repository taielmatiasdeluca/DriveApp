import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import "./index.css";
import { Panel } from "./pages/Panel";
function App() {
  return (
    <Routes>
      <Route exact path="" element={<Landing />} />
      <Route path="/panel/*" element={<Panel />} />
    </Routes>
  );
}

export default App;
