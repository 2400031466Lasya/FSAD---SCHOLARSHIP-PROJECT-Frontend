import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";   // ✅ ADD THIS
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// STUDENT
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./pages/StudentDashboard";
import Scholarships from "./pages/Scholarships";
import StudentApplications from "./pages/StudentApplications";

// ADMIN
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminScholarships from "./pages/AdminScholarships";
import AdminApplications from "./pages/AdminApplications";

function App() {
  return (
    <Router>
      <Routes>

        {/* ✅ LANDING PAGE WITH NAVBAR */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* STUDENT */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="browse" element={<Scholarships />} />
          <Route path="applications" element={<StudentApplications />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="scholarships" element={<AdminScholarships />} />
          <Route path="applications" element={<AdminApplications />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App;