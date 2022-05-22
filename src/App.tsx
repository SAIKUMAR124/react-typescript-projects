import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FormikForm from "./Pages/FormikForm";
import Home from "./Pages/Home";

function App() {
  return (
    <div role="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormikForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
