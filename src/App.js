import "./App.css";
import CustomerDashboard from "./components/CustomerDashboard/CustomerDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDashboard from "./components/ServiceDashboard";
import AppointmentDashboard from "./components/AppointmentDashboard";

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
          <Route path="/appointment" element={<AppointmentDashboard />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
