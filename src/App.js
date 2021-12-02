import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerDashboard from "./components/CustomerDashboard";
import ServiceDashboard from "./components/ServiceDashboard";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/customer" element={<CustomerDashboard />}>
            {" "}
          </Route>
          <Route path="/service" element={<ServiceDashboard />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
