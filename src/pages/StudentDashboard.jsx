import { useEffect, useState } from "react";
import API from "../api/axios";
import "./StudentDashboard.css";

const StudentDashboard = () => {

  const [applications, setApplications] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const userId = localStorage.getItem("userId");

        if (!userId) {
          setError("User not logged in");
          return;
        }

        const [schRes, appRes] = await Promise.all([
          API.get("/scholarships"),
          API.get(`/applications/user/${userId}`)
        ]);

        setScholarships(schRes.data || []);
        setApplications(appRes.data || []);

      } catch (err) {
        console.error(err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  const totalApplications = applications.length;
  const pending = applications.filter(a => a.status === "PENDING").length;
  const approved = applications.filter(a => a.status === "APPROVED").length;

  if (loading) return <h2>Loading dashboard...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div className="dashboard">

      <h1>Welcome Student 😇</h1>

      <div className="stats">

        <div className="stat-card">
          <h3>Available Scholarships</h3>
          <span>{scholarships.length}</span>
        </div>

        <div className="stat-card">
          <h3>My Applications</h3>
          <span>{totalApplications}</span>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <span>{pending}</span>
        </div>

        <div className="stat-card">
          <h3>Approved</h3>
          <span>{approved}</span>
        </div>

      </div>

      <div className="deadlines-card">
        <h2>My Applications</h2>

        {applications.length === 0 ? (
          <p>No applications yet</p>
        ) : (
          applications.map((app) => (
            <div key={app.id} className="deadline-item">
              <h4>{app.scholarshipTitle || app.scholarshipName}</h4>
              <p>Status: {app.status}</p>
            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default StudentDashboard;