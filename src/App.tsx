import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import FormikForm from "./Pages/FormikForm";
import Home from "./Pages/Home";
import SubmitPage from "./Pages/FormikForm/SubmitPage";

function App() {
  return (
    <div role="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Outlet />}>
            <Route index element={<FormikForm />} />
            <Route path="submit" element={<SubmitPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
